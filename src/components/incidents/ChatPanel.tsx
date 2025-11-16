import { useState, useEffect, useRef } from 'react';
import { ChatMessage } from './ChatMessage';
import { Button } from '../common/Button';
import { Input } from '../common/Input';
import { Loader } from '../common/Loader';
import type { Incidente, ChatMessage as ChatMessageType } from '../../types/incidentes';

interface ChatPanelProps {
  incidente: Incidente | null;
  obtenerMensajes: (incidenteId: string) => Promise<ChatMessageType[]>;
  enviarMensaje: (incidenteId: string, mensaje: string) => Promise<void>;
  currentUserEmail: string;
}

export function ChatPanel({
  incidente,
  obtenerMensajes,
  enviarMensaje,
  currentUserEmail,
}: ChatPanelProps) {
  const [mensajes, setMensajes] = useState<ChatMessageType[]>([]);
  const [nuevoMensaje, setNuevoMensaje] = useState('');
  const [enviando, setEnviando] = useState(false);
  const [cargando, setCargando] = useState(false);
  const [mostrarChat, setMostrarChat] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (mostrarChat && incidente) {
      cargarMensajes();
      // Recargar mensajes cada 3 segundos para recibir respuestas automáticas
      const interval = setInterval(() => {
        if (incidente) {
          cargarMensajes();
        }
      }, 3000);
      return () => clearInterval(interval);
    } else {
      // Limpiar mensajes cuando se cierra el chat o cambia el incidente
      setMensajes([]);
    }
  }, [mostrarChat, incidente?.id]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    scrollToBottom();
  }, [mensajes]);

  const cargarMensajes = async () => {
    if (!incidente || !incidente.id) {
      setMensajes([]);
      return;
    }
    setCargando(true);
    try {
      const msgs = await obtenerMensajes(incidente.id);
      setMensajes(Array.isArray(msgs) ? msgs : []);
    } catch (error) {
      console.error('Error al cargar mensajes:', error);
      setMensajes([]);
    } finally {
      setCargando(false);
    }
  };

  const handleEnviarMensaje = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nuevoMensaje.trim() || !incidente || !incidente.id || enviando) return;

    setEnviando(true);
    try {
      await enviarMensaje(incidente.id, nuevoMensaje.trim());
      setNuevoMensaje('');
      // Recargar mensajes después de enviar
      await cargarMensajes();
    } catch (error) {
      console.error('Error al enviar mensaje:', error);
      alert('Error al enviar el mensaje. Por favor, intenta de nuevo.');
    } finally {
      setEnviando(false);
    }
  };

  if (!incidente) return null;

  // Solo mostrar el chat si hay un trabajador asignado
  const tieneTrabajador = incidente.atendidoPor !== null;

  if (!tieneTrabajador) {
    return (
      <div className="rounded-xl p-6 mb-6" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.03)' }}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold" style={{ color: '#4a5a40' }}>
            Mensajería
          </h2>
        </div>
        <p className="text-sm" style={{ color: '#666666' }}>
          El chat estará disponible cuando un trabajador sea asignado a este incidente.
        </p>
      </div>
    );
  }

  const trabajadorNombre = incidente.atendidoPor?.split('@')[0] || 'Trabajador';

  return (
    <div className="rounded-xl mb-6 overflow-hidden" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.03)' }}>
      <div
        className="p-4 cursor-pointer flex items-center justify-between"
        style={{ backgroundColor: '#adcc9c' }}
        onClick={() => setMostrarChat(!mostrarChat)}
      >
        <div className="flex items-center gap-3">
          <svg className="w-5 h-5" style={{ color: '#4a5a40' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <h2 className="text-xl font-semibold" style={{ color: '#4a5a40' }}>
            Mensajería con {trabajadorNombre}
          </h2>
        </div>
        <svg
          className={`w-5 h-5 transition-transform ${mostrarChat ? 'rotate-180' : ''}`}
          style={{ color: '#4a5a40' }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {mostrarChat && (
        <div className="flex flex-col" style={{ height: '500px' }}>
          {/* Área de mensajes */}
          <div className="flex-1 overflow-y-auto p-4" style={{ backgroundColor: '#f9fafb' }}>
            {cargando ? (
              <div className="flex justify-center items-center h-full">
                <Loader />
              </div>
            ) : mensajes.length === 0 ? (
              <div className="flex justify-center items-center h-full">
                <p className="text-sm" style={{ color: '#666666' }}>
                  No hay mensajes aún. Inicia la conversación.
                </p>
              </div>
            ) : (
              <div>
                {mensajes.map((msg) => (
                  <ChatMessage
                    key={msg.id}
                    message={msg}
                    isOwn={msg.enviadoPor === currentUserEmail}
                    senderName={msg.enviadoPor === currentUserEmail ? 'Tú' : trabajadorNombre}
                  />
                ))}
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>

          {/* Formulario de envío */}
          <form onSubmit={handleEnviarMensaje} className="p-4 border-t" style={{ borderColor: '#d1d5db' }}>
            <div className="flex gap-2">
              <Input
                value={nuevoMensaje}
                onChange={(e) => setNuevoMensaje(e.target.value)}
                placeholder="Escribe un mensaje..."
                disabled={enviando}
                className="flex-1"
              />
              <Button type="submit" disabled={enviando || !nuevoMensaje.trim()}>
                {enviando ? (
                  <Loader />
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                )}
              </Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}


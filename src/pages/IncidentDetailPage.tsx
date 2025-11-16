import { useState, useEffect } from 'react';
import { IncidentStatusBadge } from '../components/incidents/IncidentStatusBadge';
import { IncidentTimeline } from '../components/incidents/IncidentTimeline';
import { Button } from '../components/common/Button';
import { Loader } from '../components/common/Loader';
import type { Incidente, HistorialItem } from '../types/incidentes';

interface IncidentDetailPageProps {
  incidente: Incidente;
  onClose: () => void;
  obtenerHistorial?: (id: string) => Promise<HistorialItem[]>;
}

export function IncidentDetailPage({ incidente, onClose, obtenerHistorial }: IncidentDetailPageProps) {
  const [historial, setHistorial] = useState<HistorialItem[]>([]);
  const [loadingHistorial, setLoadingHistorial] = useState(false);

  useEffect(() => {
    const cargarHistorial = async () => {
      if (!obtenerHistorial) return;
      setLoadingHistorial(true);
      try {
        const data = await obtenerHistorial(incidente.id);
        setHistorial(data);
      } catch (error) {
        console.error('Error al cargar historial:', error);
      } finally {
        setLoadingHistorial(false);
      }
    };

    cargarHistorial();
  }, [incidente.id, obtenerHistorial]);

  const formatDate = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleString('es-PE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getUrgenciaColor = (urgencia: string) => {
    const colors: Record<string, string> = {
      baja: 'text-slate-400 bg-slate-800',
      media: 'text-yellow-400 bg-yellow-500/20',
      alta: 'text-red-400 bg-red-500/20',
    };
    return colors[urgencia] || 'text-slate-400 bg-slate-800';
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-900 rounded-2xl border border-slate-800 shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-slate-900 border-b border-slate-800 p-6 flex justify-between items-start z-10">
          <div>
            <h2 className="text-2xl font-bold text-slate-100 mb-2">
              Detalle del Incidente
            </h2>
            <div className="flex items-center gap-2">
              <IncidentStatusBadge estado={incidente.estado} />
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${getUrgenciaColor(
                  incidente.urgencia
                )}`}
              >
                {incidente.urgencia.toUpperCase()}
              </span>
            </div>
          </div>
          <Button variant="secondary" onClick={onClose}>
            Cerrar
          </Button>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <h3 className="text-sm font-medium text-slate-400 mb-1">Tipo</h3>
            <p className="text-lg text-slate-100">{incidente.tipo}</p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-slate-400 mb-1">Ubicación</h3>
            <p className="text-lg text-slate-100">{incidente.ubicacion}</p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-slate-400 mb-1">Descripción</h3>
            <p className="text-slate-300">{incidente.descripcion}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-medium text-slate-400 mb-1">
                Reportado por
              </h3>
              <p className="text-slate-100">{incidente.reportadoPor}</p>
            </div>
            {incidente.atendidoPor && (
              <div>
                <h3 className="text-sm font-medium text-slate-400 mb-1">
                  Atendido por
                </h3>
                <p className="text-slate-100">{incidente.atendidoPor}</p>
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-medium text-slate-400 mb-1">
                Fecha de creación
              </h3>
              <p className="text-slate-100">{formatDate(incidente.creadoEn)}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-slate-400 mb-1">
                Última actualización
              </h3>
              <p className="text-slate-100">{formatDate(incidente.actualizadoEn)}</p>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-6">
            <h3 className="text-lg font-semibold mb-4 text-slate-100">Historial</h3>
            {loadingHistorial ? (
              <Loader />
            ) : (
              <IncidentTimeline historial={historial} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

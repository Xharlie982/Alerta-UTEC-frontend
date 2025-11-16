interface UserGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function UserGuideModal({ isOpen, onClose }: UserGuideModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-slate-900">Guía de Usuario</h2>
          <button
            onClick={onClose}
            className="text-slate-500 hover:text-slate-700 transition-colors"
            aria-label="Cerrar"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-6 space-y-6">
          {/* Introducción */}
          <section>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Bienvenido a AlertaUTEC</h3>
            <p className="text-slate-700 leading-relaxed">
              AlertaUTEC es una plataforma diseñada para que los estudiantes de UTEC puedan reportar
              y gestionar incidentes de manera eficiente. Esta guía te ayudará a utilizar todas las
              funcionalidades del sistema.
            </p>
          </section>

          {/* Registro e Inicio de Sesión */}
          <section>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">1. Registro e Inicio de Sesión</h3>
            <div className="space-y-3 text-slate-700">
              <div>
                <h4 className="font-semibold mb-2">Registro:</h4>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Completa el formulario de registro con tus datos personales</li>
                  <li>Ingresa tu correo institucional (@utec.edu.pe)</li>
                  <li>Crea una contraseña segura</li>
                  <li>Confirma tu contraseña</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Inicio de Sesión:</h4>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Ingresa tu correo institucional y contraseña</li>
                  <li>También puedes iniciar sesión con tu cuenta de Google</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Reportar Incidentes */}
          <section>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">2. Reportar un Incidente</h3>
            <div className="space-y-3 text-slate-700">
              <p>Para reportar un nuevo incidente:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Haz clic en el botón "Reportar Incidente" en tu dashboard</li>
                <li>Selecciona el tipo de incidente (Infraestructura, Limpieza, Seguridad, etc.)</li>
                <li>Indica el nivel de urgencia (Baja, Media, Alta, Crítica)</li>
                <li>Describe detalladamente el problema</li>
                <li>Agrega la ubicación exacta del incidente</li>
                <li>Opcionalmente, adjunta fotos o documentos</li>
                <li>Envía el reporte</li>
              </ul>
            </div>
          </section>

          {/* Seguimiento de Incidentes */}
          <section>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">3. Seguimiento de Incidentes</h3>
            <div className="space-y-3 text-slate-700">
              <p>Puedes ver el estado de todos tus incidentes reportados:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong>Pendiente:</strong> El incidente ha sido reportado y está esperando asignación</li>
                <li><strong>En Proceso:</strong> Un trabajador ha sido asignado y está trabajando en la solución</li>
                <li><strong>Resuelto:</strong> El incidente ha sido solucionado</li>
                <li><strong>Cerrado:</strong> El incidente ha sido cerrado después de la verificación</li>
              </ul>
              <p className="mt-3">
                Puedes filtrar tus incidentes por tipo, estado o urgencia para encontrar fácilmente
                lo que buscas.
              </p>
            </div>
          </section>

          {/* Detalles del Incidente */}
          <section>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">4. Ver Detalles de un Incidente</h3>
            <div className="space-y-3 text-slate-700">
              <p>Al hacer clic en un incidente, podrás ver:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Información completa del incidente</li>
                <li>Historial de actualizaciones y comentarios</li>
                <li>Estado actual y trabajador asignado</li>
                <li>Ubicación en el mapa (si está disponible)</li>
              </ul>
            </div>
          </section>

          {/* Notificaciones */}
          <section>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">5. Notificaciones</h3>
            <div className="space-y-3 text-slate-700">
              <p>
              Recibirás notificaciones en tiempo real cuando:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Tu incidente sea asignado a un trabajador</li>
                <li>Haya una actualización en el estado de tu incidente</li>
                <li>Se agreguen comentarios a tu incidente</li>
                <li>Tu incidente sea resuelto</li>
              </ul>
            </div>
          </section>

          {/* Consejos */}
          <section>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">6. Consejos para un Mejor Uso</h3>
            <div className="space-y-3 text-slate-700">
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Proporciona descripciones claras y detalladas de los incidentes</li>
                <li>Incluye fotos cuando sea posible para facilitar la identificación</li>
                <li>Indica correctamente la ubicación del problema</li>
                <li>Revisa regularmente el estado de tus incidentes reportados</li>
                <li>Mantén tu información de contacto actualizada</li>
              </ul>
            </div>
          </section>

          {/* Soporte */}
          <section>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">7. ¿Necesitas Ayuda?</h3>
            <div className="space-y-3 text-slate-700">
              <p>
                Si tienes alguna pregunta o problema con el sistema, puedes:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Contactar al soporte técnico a través del Centro de Ayuda</li>
                <li>Revisar las preguntas frecuentes</li>
                <li>Reportar un problema técnico del sistema</li>
              </ul>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-slate-50 border-t border-slate-200 px-6 py-4 flex justify-end">
          <button
            onClick={onClose}
            className="bg-[#3d4934] hover:bg-[#4a5a40] text-white px-6 py-2 rounded-lg font-medium transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}


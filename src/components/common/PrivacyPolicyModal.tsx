interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PrivacyPolicyModal({ isOpen, onClose }: PrivacyPolicyModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-slate-900">Políticas de Privacidad</h2>
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
            <h3 className="text-xl font-semibold text-slate-900 mb-3">1. Introducción</h3>
            <p className="text-slate-700 leading-relaxed">
              AlertaUTEC se compromete a proteger la privacidad de los usuarios de nuestra plataforma.
              Esta política de privacidad describe cómo recopilamos, usamos, almacenamos y protegemos
              la información personal de los estudiantes de UTEC que utilizan nuestro sistema de
              gestión de incidentes.
            </p>
          </section>

          {/* Información que recopilamos */}
          <section>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">2. Información que Recopilamos</h3>
            <div className="space-y-3 text-slate-700">
              <div>
                <h4 className="font-semibold mb-2">Información Personal:</h4>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Nombre completo</li>
                  <li>Correo electrónico institucional (@utec.edu.pe)</li>
                  <li>Código de estudiante</li>
                  <li>Información de contacto</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Información de Incidentes:</h4>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Descripción de incidentes reportados</li>
                  <li>Ubicación de los incidentes</li>
                  <li>Fotografías o documentos adjuntos</li>
                  <li>Historial de comunicaciones relacionadas con incidentes</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Información Técnica:</h4>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Dirección IP</li>
                  <li>Tipo de navegador y dispositivo</li>
                  <li>Registros de actividad en la plataforma</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Uso de la información */}
          <section>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">3. Uso de la Información</h3>
            <div className="space-y-3 text-slate-700">
              <p>Utilizamos la información recopilada para:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Gestionar y procesar los incidentes reportados</li>
                <li>Comunicarnos con los usuarios sobre el estado de sus reportes</li>
                <li>Mejorar nuestros servicios y la experiencia del usuario</li>
                <li>Cumplir con obligaciones legales y regulatorias</li>
                <li>Prevenir fraudes y garantizar la seguridad de la plataforma</li>
                <li>Generar estadísticas y reportes anónimos para la universidad</li>
              </ul>
            </div>
          </section>

          {/* Compartir información */}
          <section>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">4. Compartir Información</h3>
            <div className="space-y-3 text-slate-700">
              <p>No vendemos ni alquilamos información personal. Podemos compartir información con:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong>Personal autorizado de UTEC:</strong> Trabajadores y supervisores que necesitan acceder a la información para resolver incidentes</li>
                <li><strong>Proveedores de servicios:</strong> Empresas que nos ayudan a operar la plataforma (hosting, seguridad, etc.) bajo estrictos acuerdos de confidencialidad</li>
                <li><strong>Autoridades legales:</strong> Cuando sea requerido por ley o para proteger nuestros derechos legales</li>
              </ul>
            </div>
          </section>

          {/* Seguridad */}
          <section>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">5. Seguridad de la Información</h3>
            <div className="space-y-3 text-slate-700">
              <p>
                Implementamos medidas de seguridad técnicas y organizativas para proteger su información:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Cifrado de datos en tránsito y en reposo</li>
                <li>Autenticación segura mediante contraseñas y OAuth</li>
                <li>Acceso restringido solo a personal autorizado</li>
                <li>Monitoreo continuo de seguridad</li>
                <li>Copias de seguridad regulares</li>
              </ul>
            </div>
          </section>

          {/* Retención de datos */}
          <section>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">6. Retención de Datos</h3>
            <p className="text-slate-700 leading-relaxed">
              Conservamos su información personal mientras su cuenta esté activa y durante el tiempo
              necesario para cumplir con los propósitos descritos en esta política, a menos que la ley
              requiera o permita un período de retención más largo. Los datos de incidentes pueden
              conservarse para fines estadísticos y de mejora del servicio.
            </p>
          </section>

          {/* Derechos del usuario */}
          <section>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">7. Sus Derechos</h3>
            <div className="space-y-3 text-slate-700">
              <p>Usted tiene derecho a:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Acceder a su información personal</li>
                <li>Corregir información inexacta</li>
                <li>Solicitar la eliminación de su información (sujeto a obligaciones legales)</li>
                <li>Oponerse al procesamiento de su información</li>
                <li>Retirar su consentimiento en cualquier momento</li>
                <li>Exportar sus datos en formato legible</li>
              </ul>
              <p className="mt-3">
                Para ejercer estos derechos, contáctenos a través del Centro de Ayuda o en
                soporte@alerta.utec.edu.pe
              </p>
            </div>
          </section>

          {/* Cookies */}
          <section>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">8. Cookies y Tecnologías Similares</h3>
            <p className="text-slate-700 leading-relaxed">
              Utilizamos cookies y tecnologías similares para mejorar su experiencia, autenticar usuarios
              y analizar el uso de la plataforma. Puede configurar su navegador para rechazar cookies,
              aunque esto puede afectar algunas funcionalidades del sitio.
            </p>
          </section>

          {/* Cambios a la política */}
          <section>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">9. Cambios a esta Política</h3>
            <p className="text-slate-700 leading-relaxed">
              Podemos actualizar esta política de privacidad ocasionalmente. Le notificaremos sobre
              cambios significativos mediante notificaciones en la plataforma o por correo electrónico.
              La fecha de la última actualización se indica al final de este documento.
            </p>
          </section>

          {/* Contacto */}
          <section>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">10. Contacto</h3>
            <div className="space-y-3 text-slate-700">
              <p>
                Si tiene preguntas o inquietudes sobre esta política de privacidad, puede contactarnos:
              </p>
              <ul className="list-none space-y-1 ml-4">
                <li><strong>Email:</strong> soporte@alerta.utec.edu.pe</li>
                <li><strong>Teléfono:</strong> (01) 123-4567</li>
                <li><strong>Dirección:</strong> Campus UTEC</li>
              </ul>
            </div>
          </section>

          {/* Fecha de actualización */}
          <section className="pt-4 border-t border-slate-200">
            <p className="text-sm text-slate-500">
              <strong>Última actualización:</strong> {new Date().toLocaleDateString('es-PE', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
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


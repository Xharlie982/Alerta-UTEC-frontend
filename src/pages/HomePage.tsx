import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import studentsLoginImage from '../assets/students_login.jpg';
import alertaImage from '../assets/alerta.png';
import relampagoImage from '../assets/relampago.png';
import tecnologiaImage from '../assets/tecnologia-Photoroom.png';
import estadisticasImage from '../assets/estadisticas.png';
import campanaImage from '../assets/campana.png';
import checkImage from '../assets/check.png';
import reporteImage from '../assets/reporte.png';
import laptopImage from '../assets/laptop.png';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { INTRANET_URL } from '../config/constants';
import { UserGuideModal } from '../components/common/UserGuideModal';
import { PrivacyPolicyModal } from '../components/common/PrivacyPolicyModal';

export function HomePage() {
  const navigate = useNavigate();
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const imageRef = useScrollAnimation();
  const messageRef = useScrollAnimation();
  const laptopRef = useScrollAnimation();
  const featuresRef = useScrollAnimation();
  const titleRef = useScrollAnimation();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleRegister = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      navigate('/register');
    }, 300);
  };

  return (
    <div className="flex flex-col bg-white">
      <div className="flex">
        {/* Sidebar Izquierda - 35% */}
        <aside className="hidden lg:flex lg:w-[35%] bg-[#3d4934] text-[#f0f0f0] p-10 flex-col min-h-screen">
            <header className="flex justify-between items-center">
              <div className="flex items-center gap-3 -ml-10">
                <img src={alertaImage} alt="Alerta" className="w-12 h-12" />
                <div className="text-2xl font-bold">AlertaUTEC</div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={handleLogin}
                  className="bg-[#b7d9a8] text-[#3d4934] px-4 py-2 rounded-lg font-semibold text-xs hover:bg-[#a8c998] transition-colors"
                >
                  Iniciar sesión
                </button>
                <span className="text-[#c0c0c0] text-sm">o</span>
                <button
                  onClick={handleRegister}
                  className="text-[#b7d9a8] hover:text-white text-sm font-medium transition-colors underline"
                >
                  regístrate
                </button>
              </div>
            </header>

          <div className="mt-20 flex-1">
            <div
              ref={titleRef.ref}
              className={`transition-opacity duration-1000 ${
                titleRef.isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <h1 className="text-5xl leading-tight font-geometric font-thin mb-4 tracking-tight">
                Gestión de <span className="text-[#b7d9a8] font-normal">Incidentes</span>
                <br />
                Simplificada
              </h1>
              <p className="text-lg text-[#c0c0c0] mt-4">
                Sin complicaciones. Reporta, gestiona y resuelve incidentes en tiempo real.
              </p>
            </div>

            <section 
              ref={featuresRef.ref}
              className={`mt-12 transition-opacity duration-1000 delay-100 ${
                featuresRef.isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <h3 className="text-base text-[#c0c0c0] font-normal tracking-wide mb-5">
                Nuestras características
              </h3>
              <div className="grid grid-cols-3 gap-6">
                <div className="bg-[#4a5a40] p-6 rounded-xl text-center min-w-[120px]">
                  <img src={relampagoImage} alt="Rayo" className="w-8 h-8 mx-auto mb-2 opacity-80" />
                  <p className="text-sm font-medium mt-2 opacity-70">Reporte Instantáneo</p>
                </div>
                <div className="bg-[#4a5a40] p-6 rounded-xl text-center min-w-[120px]">
                  <img src={estadisticasImage} alt="Estadísticas" className="w-8 h-8 mx-auto mb-2 opacity-80" />
                  <p className="text-sm font-medium mt-2 opacity-70">Seguimiento en Tiempo Real</p>
                </div>
                <div className="bg-[#4a5a40] p-6 rounded-xl text-center min-w-[120px]">
                  <img src={tecnologiaImage} alt="Tecnología" className="w-8 h-8 mx-auto mb-2 opacity-80" />
                  <p className="text-sm font-medium mt-2 opacity-70">Tecnología Avanzada</p>
                </div>
              </div>
            </section>
          </div>
        </aside>

        {/* Contenido Principal - 65% */}
        <main className="w-full lg:w-[65%] p-10 flex flex-col bg-white flex-1">
            {/* Logo para mobile */}
            <div className="lg:hidden flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <img src={alertaImage} alt="Alerta" className="w-12 h-12" />
                <div className="text-2xl font-bold text-slate-900">AlertaUTEC</div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleLogin}
                  className="bg-emerald-600 text-white px-4 py-2 rounded-lg font-semibold text-xs hover:bg-emerald-700 transition-colors"
                >
                  Iniciar sesión
                </button>
                <span className="text-slate-600 text-sm">o</span>
                <button
                  onClick={handleRegister}
                  className="text-emerald-600 hover:text-emerald-700 text-sm font-medium transition-colors underline"
                >
                  regístrate
                </button>
              </div>
            </div>

          {/* Contenedor de imagen con notificaciones */}
          <div 
            ref={imageRef.ref}
            className={`relative w-full mb-12 transition-opacity duration-1000 ${
              imageRef.isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={studentsLoginImage} 
              alt="Estudiantes usando el sistema de gestión de incidentes" 
              className="w-full h-[500px] object-cover rounded-3xl"
            />

            {/* Notificaciones flotantes */}
            <div className="absolute top-[10%] left-[5%] bg-[#b7d9a8]/90 backdrop-blur-sm text-[#3d4934] px-5 py-3 rounded-full text-sm font-medium flex items-center gap-2 shadow-lg">
              <img src={checkImage} alt="Check" className="w-7 h-7" />
              Incidente resuelto!
            </div>
            <div className="absolute top-[20%] right-[8%] bg-[#b7d9a8]/90 backdrop-blur-sm text-[#3d4934] px-5 py-3 rounded-full text-sm font-medium flex items-center gap-2 shadow-lg">
              <img src={reporteImage} alt="Reporte" className="w-5 h-5" />
              Nuevo reporte!
            </div>
            <div className="absolute bottom-[15%] left-[30%] bg-[#b7d9a8]/90 backdrop-blur-sm text-[#3d4934] px-5 py-3 rounded-full text-sm font-medium flex items-center gap-2 shadow-lg">
              <img src={campanaImage} alt="Campana" className="w-7 h-7" />
              Actualización recibida!
            </div>
          </div>

          {/* Sección de mensaje principal */}
          <section 
            ref={messageRef.ref}
            className={`text-center mb-12 transition-opacity duration-1000 delay-200 ${
              messageRef.isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <h2 className="text-3xl text-slate-800 font-semibold max-w-lg mx-auto leading-relaxed">
              Optimizamos la eficiencia y productividad en la gestión de incidentes
            </h2>
          </section>

          {/* Imagen de laptop con información */}
          <div 
            ref={laptopRef.ref}
            className={`max-w-7xl mx-auto w-full mb-12 transition-opacity duration-1000 delay-300 ${
              laptopRef.isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="flex flex-col lg:flex-row items-start gap-8">
              {/* Imagen de laptop */}
              <div className="flex-[1.4] -ml-48 lg:-ml-96 mt-12 lg:mt-16">
                <img 
                  src={laptopImage} 
                  alt="Sistema de gestión de incidentes" 
                  className="w-full h-auto rounded-lg scale-110"
                />
              </div>

              {/* Párrafo informativo */}
              <div className="flex-1 pt-16 lg:pt-24">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Tecnología al servicio de la comunidad
                </h3>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>
                    AlertaUTEC es una plataforma diseñada específicamente para la comunidad universitaria, 
                    permitiendo reportar y gestionar incidentes de manera eficiente y rápida.
                  </p>
                  <p>
                    Nuestro sistema garantiza una respuesta ágil a cualquier problema que pueda surgir en 
                    el campus, desde fallas en infraestructura hasta problemas de limpieza o seguridad.
                  </p>
                  <p>
                    Con un seguimiento en tiempo real y notificaciones instantáneas, mantén siempre 
                    informado sobre el estado de tus reportes y contribuye a mejorar el ambiente 
                    universitario para todos.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Espaciado adicional para que el footer esté más abajo */}
          <div className="h-48"></div>
        </main>
      </div>

      {/* Pie de página */}
      <footer className="w-full bg-slate-800 border-t border-slate-700 py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Columna 1 - Información general */}
            <div>
              <h3 className="font-semibold text-slate-100 mb-4">AlertaUTEC</h3>
              <p className="text-sm text-slate-400">
                Sistema de gestión de incidentes para la comunidad UTEC.
              </p>
            </div>

            {/* Columna 2 - Soporte */}
            <div>
              <h3 className="font-semibold text-slate-100 mb-4">Soporte</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href={INTRANET_URL} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">Centro de ayuda</a></li>
                <li><button onClick={() => setIsGuideOpen(true)} className="hover:text-emerald-400 transition-colors text-left text-slate-400 text-sm">Guía de usuario</button></li>
                <li><button onClick={() => setIsPrivacyOpen(true)} className="hover:text-emerald-400 transition-colors text-left text-slate-400 text-sm">Política de privacidad</button></li>
              </ul>
            </div>

            {/* Columna 3 - Contacto */}
            <div>
              <h3 className="font-semibold text-slate-100 mb-4">Contacto</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>Email: soporte@alerta.utec.edu.pe</li>
                <li>Teléfono: (01) 123-4567</li>
                <li>Dirección: Campus UTEC</li>
                <li className="pt-2">
                  <a href="https://www.instagram.com/utecuniversidad/?hl=es-la" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">Instagram</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Línea divisoria y copyright */}
          <div className="mt-8 pt-6 border-t border-slate-700">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
              <p>© 2024 AlertaUTEC. Todos los derechos reservados.</p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-emerald-400 transition-colors">Términos de servicio</a>
                <a href="#" className="hover:text-emerald-400 transition-colors">Política de privacidad</a>
                <a href="#" className="hover:text-emerald-400 transition-colors">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <UserGuideModal isOpen={isGuideOpen} onClose={() => setIsGuideOpen(false)} />
      <PrivacyPolicyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
    </div>
  );
}


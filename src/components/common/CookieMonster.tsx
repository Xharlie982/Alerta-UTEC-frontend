// Componente del Comegalletas con ojos que siguen el mouse
// Basado en el HTML proporcionado

import { useEffect, useRef } from 'react';
import { useSidebar } from '../../context/SidebarContext';

export function CookieMonster() {
  const { sidebarVisible } = useSidebar();
  const leftPupilRef = useRef<HTMLDivElement>(null);
  const rightPupilRef = useRef<HTMLDivElement>(null);
  const leftEyeballRef = useRef<HTMLDivElement>(null);
  const rightEyeballRef = useRef<HTMLDivElement>(null);
  const starContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Eliminar cualquier fondo azul o estrellas del sidebar
    const sidebar = document.querySelector('aside');
    if (sidebar) {
      // Asegurar que el sidebar tenga su color verde original
      const existingStarsContainer = sidebar.querySelector('.cookie-stars-background');
      if (existingStarsContainer) {
        existingStarsContainer.remove();
      }
      // Restaurar el color de fondo verde del sidebar si fue modificado
      if (sidebar instanceof HTMLElement) {
        sidebar.style.backgroundColor = '';
      }
    }

    // Función para mover las pupilas
    const handleMouseMove = (e: MouseEvent) => {
      const pupils = [leftPupilRef.current, rightPupilRef.current];
      const eyeballs = [leftEyeballRef.current, rightEyeballRef.current];

      pupils.forEach((pupil, index) => {
        const eyeball = eyeballs[index];
        if (!pupil || !eyeball) return;

        const rect = eyeball.getBoundingClientRect();
        const eyeballCenterX = rect.left + rect.width / 2;
        const eyeballCenterY = rect.top + rect.height / 2;

        const angle = Math.atan2(e.clientY - eyeballCenterY, e.clientX - eyeballCenterX);
        const maxMoveDistance = (rect.width / 2) - (pupil.offsetWidth / 2);
        const pupilX = Math.cos(angle) * (maxMoveDistance * 0.7);
        const pupilY = Math.sin(angle) * (maxMoveDistance * 0.7);

        // Para la pupila izquierda, agregar un offset vertical adicional
        if (index === 0) {
          pupil.style.transform = `translate(${pupilX}px, ${pupilY - 3}px)`;
        } else {
          pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
        }
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <style>{`
        .cookie-star-container {
          position: relative;
          width: 100%;
          height: 100%;
          background-color: #0062AD;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        }
        
        .cookie-star {
          position: absolute;
          background-color: white;
          border-radius: 50%;
          animation: twinkle linear infinite;
          opacity: 0;
          filter: blur(0.5px);
          z-index: 0;
        }
        
        
        @keyframes twinkle {
          0% { opacity: 0; transform: scale(0.5); }
          50% { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(0.5); }
        }
        
        .cookie-monster-eyes {
          position: relative;
          z-index: 1;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .cookie-eye-ball {
          position: absolute;
          width: 90px;
          height: 90px;
          background-color: #FDF9E9;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }
        
        .cookie-eye-ball.left {
          left: 50%;
          transform: translateX(-105%) translateY(-8px); /* Pupila izquierda un poco más arriba */
        }
        
        .cookie-eye-ball.right {
          left: 50%;
          transform: translateX(5%);
        }
        
        .cookie-pupil {
          position: absolute;
          width: 36px;
          height: 36px;
          background-color: black;
          border-radius: 50%;
          transition: transform 0.1s ease-out;
        }
      `}</style>
      {sidebarVisible && (
        <div className="fixed bottom-4 left-4 z-30 w-48 h-32 pointer-events-none transition-opacity duration-300">
          <div className="cookie-star-container" ref={starContainerRef}>
            <div className="cookie-monster-eyes">
              <div className="cookie-eye-ball left" ref={leftEyeballRef}>
                <div className="cookie-pupil" ref={leftPupilRef}></div>
              </div>
              <div className="cookie-eye-ball right" ref={rightEyeballRef}>
                <div className="cookie-pupil" ref={rightPupilRef}></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}


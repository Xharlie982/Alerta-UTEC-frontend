// Componente del Comegalletas con ojos que siguen el mouse
// Basado en el HTML proporcionado

import { useEffect, useRef } from 'react';

export function CookieMonster() {
  const leftPupilRef = useRef<HTMLDivElement>(null);
  const rightPupilRef = useRef<HTMLDivElement>(null);
  const leftEyeballRef = useRef<HTMLDivElement>(null);
  const rightEyeballRef = useRef<HTMLDivElement>(null);
  const starContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Crear estrellas en el fondo izquierdo completo
    const sidebar = document.querySelector('aside');
    if (!sidebar) return;

    // Crear contenedor de estrellas para toda la parte izquierda
    let starsContainer = sidebar.querySelector('.cookie-stars-background') as HTMLElement;
    if (!starsContainer) {
      starsContainer = document.createElement('div');
      starsContainer.className = 'cookie-stars-background';
      starsContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 0;
        overflow: hidden;
        background-color: #0062AD;
      `;
      sidebar.style.position = 'relative';
      sidebar.style.backgroundColor = 'transparent'; // Hacer el sidebar transparente para que se vea el fondo azul
      sidebar.appendChild(starsContainer);
    }

    const numberOfStars = 80; // Más estrellas para cubrir toda el área

    // Limpiar estrellas existentes
    starsContainer.innerHTML = '';

    for (let i = 0; i < numberOfStars; i++) {
      const star = document.createElement('div');
      star.classList.add('cookie-star');
      
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      star.style.left = `${x}%`;
      star.style.top = `${y}%`;
      
      const size = Math.random() * 2 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      
      const animationDuration = Math.random() * 3 + 1;
      const animationDelay = Math.random() * 2;
      star.style.animationDuration = `${animationDuration}s`;
      star.style.animationDelay = `${animationDelay}s`;
      
      starsContainer.appendChild(star);
    }

    // No crear estrellas en el contenedor pequeño del comegalletas (solo fondo azul)
    // Limpiar cualquier estrella existente en el contenedor del comegalletas
    if (starContainerRef.current) {
      const starContainer = starContainerRef.current;
      // Eliminar todas las estrellas existentes
      const existingStars = starContainer.querySelectorAll('.cookie-star');
      existingStars.forEach(star => star.remove());
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
        
        .cookie-stars-background .cookie-star {
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
      <div className="fixed bottom-4 left-4 z-30 w-48 h-32 pointer-events-none">
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
    </>
  );
}


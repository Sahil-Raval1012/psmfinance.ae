import { useEffect, useRef } from 'react';

export const useImmersiveEffects = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Cursor trail effect
    const createCursorTrail = () => {
      const trail = document.createElement('div');
      trail.className = 'cursor-trail';
      document.body.appendChild(trail);

      let mouseX = 0;
      let mouseY = 0;
      let trailX = 0;
      let trailY = 0;

      const handleMouseMove = (e: MouseEvent) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
      };

      const animateTrail = () => {
        const distX = mouseX - trailX;
        const distY = mouseY - trailY;
        
        trailX += distX * 0.1;
        trailY += distY * 0.1;
        
        trail.style.transform = `translate(${trailX - 10}px, ${trailY - 10}px)`;
        requestAnimationFrame(animateTrail);
      };

      document.addEventListener('mousemove', handleMouseMove);
      animateTrail();

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        trail.remove();
      };
    };

    // Parallax scrolling effect
    const handleParallaxScroll = () => {
      const scrollY = window.scrollY;
      const parallaxElements = document.querySelectorAll('[data-parallax]');
      
      parallaxElements.forEach((element) => {
        const speed = parseFloat(element.getAttribute('data-parallax') || '0.5');
        const yPos = -(scrollY * speed);
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    // Interactive tilt effect
    const addTiltEffect = () => {
      const tiltElements = document.querySelectorAll('.interactive-tilt');
      
      tiltElements.forEach((element) => {
        const handleMouseMove = (e: Event) => {
          const mouseEvent = e as MouseEvent;
          const rect = element.getBoundingClientRect();
          const x = mouseEvent.clientX - rect.left;
          const y = mouseEvent.clientY - rect.top;
          
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          
          const rotateX = (y - centerY) / centerY * -10;
          const rotateY = (x - centerX) / centerX * 10;
          
          (element as HTMLElement).style.transform = 
            `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
        };

        const handleMouseLeave = () => {
          (element as HTMLElement).style.transform = 
            'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
        };

        element.addEventListener('mousemove', handleMouseMove);
        element.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    const cleanupCursor = createCursorTrail();
    window.addEventListener('scroll', handleParallaxScroll);
    addTiltEffect();

    return () => {
      cleanupCursor();
      window.removeEventListener('scroll', handleParallaxScroll);
    };
  }, []);

  return containerRef;
};

export const useParticleSystem = (containerRef: React.RefObject<HTMLElement>) => {
  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const particleCount = 15;

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 8}s`;
      container.appendChild(particle);
    }

    return () => {
      // Cleanup particles
      const particles = container.querySelectorAll('.particle');
      particles.forEach(particle => particle.remove());
    };
  }, [containerRef]);
};
import { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade';
  distance?: number;
}

export function ScrollReveal({ 
  children, 
  delay = 0, 
  className = '',
  direction = 'up',
  distance = 30
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const getTransform = () => {
    if (isVisible) return 'translate3d(0, 0, 0) scale(1)';
    
    switch (direction) {
      case 'up':
        return `translate3d(0, ${distance}px, 0) scale(1)`;
      case 'down':
        return `translate3d(0, -${distance}px, 0) scale(1)`;
      case 'left':
        return `translate3d(${distance}px, 0, 0) scale(1)`;
      case 'right':
        return `translate3d(-${distance}px, 0, 0) scale(1)`;
      case 'scale':
        return `translate3d(0, 0, 0) scale(0.8)`;
      case 'fade':
        return `translate3d(0, 0, 0) scale(1)`;
      default:
        return `translate3d(0, ${distance}px, 0) scale(1)`;
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
}

// Stagger animation for lists and grids
export function ScrollStagger({ 
  children, 
  staggerDelay = 100,
  className = '',
  direction = 'up'
}: {
  children: React.ReactNode[];
  staggerDelay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade';
}) {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <ScrollReveal 
          key={index} 
          delay={index * staggerDelay}
          direction={direction}
        >
          {child}
        </ScrollReveal>
      ))}
    </div>
  );
}

// Parallax scroll effect
export function useParallax() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return offset;
}

// Typing animation effect
export function useTypingEffect(text: string, speed: number = 50) {
  const [displayText, setDisplayText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let index = 0;
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed, isVisible]);

  return { displayText, ref };
}
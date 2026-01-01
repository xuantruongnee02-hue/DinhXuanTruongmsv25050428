import { useEffect, useRef, useState } from 'react';

export type AnimationType = 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'zoom-out' | 'flip' | 'blur';

export const useScrollAnimation = (threshold = 0.1, animationType: AnimationType = 'fade-up') => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const getAnimationClasses = (visible: boolean, type: AnimationType = animationType, delay: number = 0) => {
    const baseClasses = 'transition-all duration-700 ease-out';
    const delayStyle = { transitionDelay: `${delay}ms` };
    
    const animations: Record<AnimationType, { hidden: string; visible: string }> = {
      'fade-up': {
        hidden: 'opacity-0 translate-y-12',
        visible: 'opacity-100 translate-y-0'
      },
      'fade-down': {
        hidden: 'opacity-0 -translate-y-12',
        visible: 'opacity-100 translate-y-0'
      },
      'fade-left': {
        hidden: 'opacity-0 translate-x-12',
        visible: 'opacity-100 translate-x-0'
      },
      'fade-right': {
        hidden: 'opacity-0 -translate-x-12',
        visible: 'opacity-100 translate-x-0'
      },
      'zoom-in': {
        hidden: 'opacity-0 scale-75',
        visible: 'opacity-100 scale-100'
      },
      'zoom-out': {
        hidden: 'opacity-0 scale-110',
        visible: 'opacity-100 scale-100'
      },
      'flip': {
        hidden: 'opacity-0 rotate-y-90',
        visible: 'opacity-100 rotate-y-0'
      },
      'blur': {
        hidden: 'opacity-0 blur-sm scale-95',
        visible: 'opacity-100 blur-0 scale-100'
      }
    };

    const animation = animations[type];
    return {
      className: `${baseClasses} ${visible ? animation.visible : animation.hidden}`,
      style: delayStyle
    };
  };

  return { ref, isVisible, getAnimationClasses };
};

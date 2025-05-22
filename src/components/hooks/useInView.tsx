import { useState, useEffect, RefObject } from 'react';

interface InViewOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useInView = (
  ref: RefObject<Element>,
  options: InViewOptions = {}
): boolean => {
  const [isInView, setIsInView] = useState(false);
  const { threshold = 0, rootMargin = '0px', triggerOnce = false } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, threshold, rootMargin, triggerOnce]);

  return isInView;
};
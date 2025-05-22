import React, { useState, useEffect, useRef } from 'react';
import { useInView } from '../hooks/useInView';

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
  color: string;
  duration?: number;
}

const StatCounter: React.FC<StatCounterProps> = ({ 
  value, 
  suffix = '', 
  label, 
  color,
  duration = 2000 
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(countRef, { threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentCount = Math.floor(progress * value);
      
      setCount(currentCount);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(value);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    
    return () => cancelAnimationFrame(animationFrameId);
  }, [value, duration, isInView]);

  return (
    <div 
      ref={countRef}
      className="relative bg-white rounded-3xl p-8 transform transition-all duration-500 hover:scale-105 group"
      style={{
        boxShadow: `0 20px 40px rgba(${color === '#075e54' ? '7, 94, 84' : '18, 140, 126'}, 0.1)`
      }}
    >
      <div 
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg, ${color} 0%, transparent 100%)`
        }}
      />
      <div 
        className="text-6xl md:text-7xl font-bold mb-4 flex items-end"
        style={{ color }}
      >
        {count}{suffix}
      </div>
      <div className="text-xl font-medium opacity-90">{label}</div>
    </div>
  );
};

export default StatCounter

import { useEffect, useState } from "react";

interface TechBackgroundProps {
  animated?: boolean;
}

export function TechBackground({ animated = true }: TechBackgroundProps) {
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    binary: string;
    delay: number;
  }>>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 15; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          binary: Math.random().toString(2).substring(2, 8).padEnd(6, '0'),
          delay: Math.random() * 5,
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-10 dark:opacity-20">
      {/* Binary floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`absolute text-blue-500 dark:text-blue-400 font-mono text-sm ${
            animated ? 'animate-pulse' : ''
          }`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
          }}
        >
          {particle.binary}
        </div>
      ))}

      {/* Circuit-like lines */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path
              d="M10 10 L90 10 L90 90 L10 90 Z M30 30 L70 30 M50 10 L50 90"
              stroke="currentColor"
              strokeWidth="0.5"
              fill="none"
              className="text-blue-500/20 dark:text-blue-400/30"
            />
            <circle cx="30" cy="30" r="2" fill="currentColor" className="text-blue-500/30 dark:text-blue-400/40" />
            <circle cx="70" cy="30" r="2" fill="currentColor" className="text-blue-500/30 dark:text-blue-400/40" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>

      {/* Glowing dots */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
      <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-green-500 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-purple-500 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
    </div>
  );
}

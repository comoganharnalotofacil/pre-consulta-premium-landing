
import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

const Particles: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  
  useEffect(() => {
    const particleCount = Math.min(window.innerWidth / 20, 50); // Responsive number of particles
    const newParticles: Particle[] = [];
    
    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 6 + 1,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.3 + 0.1
      });
    }
    
    setParticles(newParticles);
    
    return () => {
      setParticles([]);
    };
  }, []);
  
  return (
    <div className="particles-container">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle animate-particle-float"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            animationDelay: `${particle.id * 0.1}s`
          }}
        />
      ))}
    </div>
  );
};

export default Particles;

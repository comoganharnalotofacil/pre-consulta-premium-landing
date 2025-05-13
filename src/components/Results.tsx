
import React, { useEffect, useRef } from 'react';

const Results: React.FC = () => {
  const resultsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fadeInActive');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fadeIn');
    elements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="resultados" className="py-20 bg-verde-escuro text-branco" ref={resultsRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Impacto direto na sua rotina clínica
          </h2>
          <div className="w-24 h-1 bg-verde-claro mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Result Card 1 */}
          <div className="glass-card backdrop-blur-md bg-white/10 border border-white/20 p-8 rounded-xl fadeIn transform hover:translate-y-[-5px] transition-all duration-500">
            <div className="text-5xl font-bold text-verde-claro mb-2 flex justify-center">
              <span className="mr-2">-</span>
              <span className="counter">15</span>
              <span className="text-2xl self-end mb-1 ml-1">min</span>
            </div>
            <h3 className="text-xl font-medium mb-2 text-center">Elimine minutos extras</h3>
            <p className="text-center text-branco/70">
              Seus pacientes chegam com histórico já preenchido, otimizando o tempo da consulta.
            </p>
          </div>
          
          {/* Result Card 2 */}
          <div className="glass-card backdrop-blur-md bg-white/10 border border-white/20 p-8 rounded-xl fadeIn transform hover:translate-y-[-5px] transition-all duration-500" style={{ animationDelay: '0.2s' }}>
            <div className="text-5xl font-bold text-verde-claro mb-2 flex justify-center">
              <span className="mr-2">+</span>
              <span className="counter">30</span>
              <span className="text-2xl self-end mb-1 ml-1">%</span>
            </div>
            <h3 className="text-xl font-medium mb-2 text-center">Mais pacientes atendidos</h3>
            <p className="text-center text-branco/70">
              Aumente sua capacidade de atendimento sem comprometer a qualidade do serviço.
            </p>
          </div>
          
          {/* Result Card 3 */}
          <div className="glass-card backdrop-blur-md bg-white/10 border border-white/20 p-8 rounded-xl fadeIn transform hover:translate-y-[-5px] transition-all duration-500" style={{ animationDelay: '0.4s' }}>
            <div className="text-5xl font-bold text-verde-claro mb-2 flex justify-center">
              <span className="counter">100</span>
              <span className="text-2xl self-end mb-1 ml-1">%</span>
            </div>
            <h3 className="text-xl font-medium mb-2 text-center">Consultas eficientes</h3>
            <p className="text-center text-branco/70">
              Agendamento otimizado e pacientes mais informados geram consultas mais produtivas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;

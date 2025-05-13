
import React, { useEffect, useRef } from 'react';

const Numbers: React.FC = () => {
  const numbersRef = useRef<HTMLDivElement>(null);
  
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
    <section className="py-20 bg-branco" ref={numbersRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fadeIn">
          <h2 className="section-title mx-auto">
            Números que Impressionam
          </h2>
          <p className="text-xl max-w-2xl mx-auto text-cinza-escuro/80">
            Junte-se a milhares de profissionais que já otimizaram suas consultas
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center mb-16">
          <div className="text-center px-8 py-6 fadeIn">
            <div className="text-5xl md:text-6xl font-bold text-verde-escuro">+1.200</div>
            <p className="text-lg text-cinza-escuro/80 mt-2">médicos consultores</p>
          </div>
          
          <div className="hidden md:block h-16 w-px bg-verde-claro/30 mx-4"></div>
          
          <div className="text-center px-8 py-6 fadeIn" style={{ animationDelay: '0.2s' }}>
            <div className="text-5xl md:text-6xl font-bold text-verde-escuro">98%</div>
            <p className="text-lg text-cinza-escuro/80 mt-2">de satisfação</p>
          </div>
          
          <div className="hidden md:block h-16 w-px bg-verde-claro/30 mx-4"></div>
          
          <div className="text-center px-8 py-6 fadeIn" style={{ animationDelay: '0.4s' }}>
            <div className="text-5xl md:text-6xl font-bold text-verde-escuro">15 min</div>
            <p className="text-lg text-cinza-escuro/80 mt-2">economizados por consulta</p>
          </div>
        </div>
        
        <div className="text-center mb-12 fadeIn">
          <h3 className="text-2xl font-bold text-verde-escuro mb-4">Clínicas Parceiras</h3>
          <div className="w-16 h-1 bg-verde-claro mx-auto mb-8"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
          <div className="flex justify-center fadeIn">
            <img src="/partner-1.svg" alt="Clínica Parceira" className="h-16 grayscale hover:grayscale-0 transition-all duration-500" />
          </div>
          <div className="flex justify-center fadeIn" style={{ animationDelay: '0.1s' }}>
            <img src="/partner-2.svg" alt="Centro Médico C" className="h-16 grayscale hover:grayscale-0 transition-all duration-500" />
          </div>
          <div className="flex justify-center fadeIn" style={{ animationDelay: '0.2s' }}>
            <img src="/partner-3.svg" alt="Hospital D" className="h-16 grayscale hover:grayscale-0 transition-all duration-500" />
          </div>
          <div className="flex justify-center fadeIn" style={{ animationDelay: '0.3s' }}>
            <img src="/partner-4.svg" alt="Centro Médico E" className="h-16 grayscale hover:grayscale-0 transition-all duration-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Numbers;

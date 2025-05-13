
import React, { useEffect, useRef } from 'react';

const Impact: React.FC = () => {
  const impactRef = useRef<HTMLDivElement>(null);
  
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
    <section id="impacto" className="py-24 bg-gradient-to-b from-branco to-verde-claro/20" ref={impactRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto">
            A Ponte Digital
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-cinza-escuro/80">
            Conectando pacientes e médicos antes da consulta para uma experiência mais eficiente
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 fadeIn">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-verde-escuro rounded-full p-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F5F6F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-verde-escuro mb-2">Foco na prática essencial</h3>
                  <p className="text-cinza-escuro/80">Dedique mais tempo ao diagnóstico e menos à coleta de dados básicos do paciente.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-verde-escuro rounded-full p-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F5F6F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-verde-escuro mb-2">100% mobile-friendly</h3>
                  <p className="text-cinza-escuro/80">Seus pacientes podem preencher formulários em qualquer dispositivo, a qualquer momento antes da consulta.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-verde-escuro rounded-full p-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F5F6F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-verde-escuro mb-2">Preenchimento automático</h3>
                  <p className="text-cinza-escuro/80">Formulários inteligentes que se adaptam às respostas dos pacientes e facilitam o preenchimento.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 fadeIn">
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-verde-claro/30 rounded-full filter blur-xl"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-verde-escuro/30 rounded-full filter blur-xl"></div>
              
              <div className="glass-card p-1 relative z-10 transform hover:scale-[1.02] transition-all duration-500">
                <img 
                  src="/app-screenshot-2.svg" 
                  alt="Pre-Consulta App Interface" 
                  className="w-full h-auto rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-verde-escuro/10 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;

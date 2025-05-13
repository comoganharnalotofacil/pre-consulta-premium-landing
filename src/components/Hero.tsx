
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import Particles from './Particles';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  
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
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-gradient-to-b from-branco to-verde-claro/10">
      <Particles />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={heroRef}>
            <h1 
              ref={headingRef}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-verde-escuro mb-6 fadeIn"
            >
              <span className="inline-block">Recupere até</span>{" "}
              <span className="text-neon inline-block">15 minutos</span>{" "}
              <span className="inline-block">em cada consulta</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-cinza-escuro/80 fadeIn">
              Obtenha pacientes informados antes da consulta. Otimize os tempos essenciais da sua rotina.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 fadeIn">
              <Button className="premium-btn text-lg py-6 px-8 animate-pulse">
                Teste Grátis 7 Dias
              </Button>
              <p className="text-verde-escuro font-semibold mt-2 sm:mt-4 sm:ml-2">
                Sem Cartão!
              </p>
            </div>
          </div>
          <div className="relative fadeIn">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-verde-claro/20 rounded-full filter blur-xl animate-float"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-verde-escuro/20 rounded-full filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
            
            <div className="relative bg-white shadow-elevated rounded-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-700">
              <div className="absolute inset-0 bg-gradient-to-tr from-verde-escuro/5 to-transparent z-0"></div>
              <img 
                src="/app-screenshot-1.svg" 
                alt="Pre-Consulta App" 
                className="w-full h-auto relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-verde-escuro font-medium mb-2">Saiba mais</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-verde-escuro">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;

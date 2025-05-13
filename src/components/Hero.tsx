
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
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 right-10 w-96 h-96 bg-verde-claro/10 rounded-full filter blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-verde-escuro/10 rounded-full filter blur-3xl animate-float-slow" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={heroRef}>
            <div className="relative inline-block mb-2">
              <span className="text-verde-claro text-lg font-semibold tracking-wider uppercase relative z-10">
                Solução Premium para Médicos
              </span>
              <div className="absolute -bottom-1 left-0 h-1 w-full bg-gradient-to-r from-verde-claro to-transparent rounded-full"></div>
            </div>
            
            <h1 
              ref={headingRef}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-verde-escuro mb-8 leading-tight fadeIn"
            >
              <span className="inline-block">Recupere até</span>{" "}
              <span className="text-neon inline-block relative">
                15 minutos
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-verde-neon to-verde-claro rounded-full"></span>
              </span>{" "}
              <span className="inline-block">em cada consulta</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-cinza-escuro/90 leading-relaxed max-w-xl fadeIn">
              Obtenha pacientes informados antes da consulta. Otimize os tempos essenciais da sua rotina.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 fadeIn">
              <Button className="premium-btn text-lg py-6 px-10 bg-gradient-to-r from-verde-escuro to-verde-claro shadow-lg hover:shadow-xl hover:translate-y-[-5px] transition-all duration-500">
                Teste Grátis 7 Dias
              </Button>
              <div className="flex items-center space-x-2 sm:mt-0 mt-4">
                <div className="w-6 h-6 bg-verde-escuro rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F5F6F5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <p className="text-verde-escuro font-semibold">
                  Sem necessidade de cartão
                </p>
              </div>
            </div>
          </div>
          <div className="relative fadeIn">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-verde-claro/20 rounded-full filter blur-xl animate-float"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-verde-escuro/20 rounded-full filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
            
            <div className="relative bg-white shadow-elevated rounded-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-700 p-1">
              <div className="absolute inset-0 bg-gradient-to-tr from-verde-escuro/5 to-transparent z-0"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-tr from-verde-escuro/20 to-verde-claro/20 rounded-2xl blur-sm"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-verde-escuro/5 to-transparent z-0"></div>
              <img 
                src="/app-screenshot-1.svg" 
                alt="Pre-Consulta App" 
                className="w-full h-auto relative z-10 rounded-xl"
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

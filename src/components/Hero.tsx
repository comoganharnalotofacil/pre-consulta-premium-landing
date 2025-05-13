
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
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-gradient-to-b from-branco to-verde-claro/5">
      {/* Enhanced Particles */}
      <div className="absolute inset-0 z-0">
        <Particles />
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-br from-verde-claro/10 to-verde-claro/5 rounded-full filter blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-tr from-verde-escuro/10 to-verde-claro/5 rounded-full filter blur-3xl animate-float-slow" style={{ animationDelay: '2s' }}></div>
        
        {/* Light streaks */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-verde-claro/30 to-transparent"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-verde-claro/30 to-transparent"></div>
        
        {/* Mesh grid background with low opacity */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: "linear-gradient(rgba(163, 201, 168, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(163, 201, 168, 0.2) 1px, transparent 1px)",
            backgroundSize: "30px 30px"
          }}></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={heroRef} className="relative">
            {/* Premium highlight accent */}
            <div className="absolute -left-4 -top-4 w-20 h-20 rounded-full bg-gradient-to-br from-verde-claro/20 to-transparent blur-xl"></div>
            
            <div className="relative inline-flex items-center mb-4 overflow-hidden rounded-full bg-verde-escuro/5 border border-verde-claro/20 px-4 py-1.5 shadow-inner">
              <span className="relative z-10 text-verde-escuro font-semibold tracking-wider uppercase text-sm">
                Solução Premium para Médicos
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-verde-claro/10 via-verde-claro/5 to-transparent animate-shine"></div>
            </div>
            
            <h1 
              ref={headingRef}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-verde-escuro mb-8 leading-tight fadeIn"
            >
              <span className="relative block mb-2 z-10">
                Recupere até
                <div className="absolute -bottom-1 -left-1 w-16 h-16 bg-verde-claro/10 rounded-full filter blur-xl -z-10"></div>
              </span>
              <span className="text-neon inline-block relative">
                15 minutos
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-verde-neon to-transparent rounded-full"></span>
                <div className="absolute inset-0 bg-verde-neon/5 blur-xl -z-10 animate-pulse" style={{animationDuration: '3s'}}></div>
              </span>{" "}
              <span className="inline-block">em cada consulta</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-10 text-cinza-escuro/90 leading-relaxed max-w-xl fadeIn font-light">
              Obtenha pacientes informados antes da consulta. 
              <span className="font-medium"> Otimize os tempos essenciais da sua rotina de alta performance.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 fadeIn">
              {/* Premium button with glow effect */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-verde-escuro via-verde-claro to-verde-escuro rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
                <Button className="relative premium-btn text-lg py-6 px-10 bg-gradient-to-r from-verde-escuro to-verde-escuro hover:from-verde-escuro hover:to-verde-claro shadow-lg hover:shadow-xl hover:translate-y-[-5px] transition-all duration-500 border border-verde-claro/20">
                  Teste Grátis 7 Dias
                </Button>
              </div>
              
              <div className="flex items-center space-x-3 sm:mt-0 mt-4">
                <div className="w-6 h-6 bg-gradient-to-br from-verde-escuro to-verde-escuro/80 rounded-full flex items-center justify-center shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F5F6F5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <p className="text-verde-escuro font-medium">
                  Sem necessidade de cartão
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative fadeIn">
            {/* Background blobs with premium gradients */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-verde-claro/20 to-transparent rounded-full filter blur-xl animate-float"></div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-gradient-to-tl from-verde-escuro/20 to-transparent rounded-full filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
            
            {/* Premium device mockup with glossy effect */}
            <div className="relative transform hover:scale-[1.03] transition-all duration-700 group">
              {/* Outer glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-verde-escuro/30 to-verde-claro/30 rounded-2xl blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Card with glassmorphism effect */}
              <div className="relative bg-white/90 backdrop-blur-xl shadow-2xl rounded-2xl overflow-hidden p-2 border border-white/40">
                {/* Inner subtle gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-verde-escuro/5 to-transparent opacity-50"></div>
                
                {/* Screen reflection effect */}
                <div className="absolute -inset-full top-0 h-full w-[200%] bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full animate-shine" style={{animationDuration: '3s'}}></div>
                
                <img 
                  src="/app-screenshot-1.svg" 
                  alt="Pre-Consulta App" 
                  className="w-full h-auto relative z-10 rounded-xl"
                />
                
                {/* Subtle device frame */}
                <div className="absolute inset-0 border-[3px] border-white/30 rounded-2xl pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Premium scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-verde-escuro font-medium mb-2 relative px-4 py-1 bg-white/30 backdrop-blur-sm rounded-full border border-verde-claro/10 shadow-sm">Saiba mais</span>
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-b from-verde-claro/20 to-transparent backdrop-blur-sm border border-verde-claro/10 shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-verde-escuro">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;

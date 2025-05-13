
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";

const Plans: React.FC = () => {
  const plansRef = useRef<HTMLDivElement>(null);
  
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
    <section id="planos" className="py-20 bg-branco relative overflow-hidden" ref={plansRef}
      style={{ backgroundImage: "url('/texture-lines.svg')" }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-verde-claro/10 to-transparent rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-verde-escuro/10 to-transparent rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-verde-claro text-lg font-semibold uppercase tracking-wider">Planos Premium</span>
          <h2 className="section-title mx-auto mt-4">
            Escolha o plano ideal para sua prática
          </h2>
          <p className="text-xl max-w-2xl mx-auto text-cinza-escuro/80 mt-3">
            Oferecemos opções flexíveis que se adaptam ao tamanho da sua clínica
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Monthly Plan */}
          <div className="glass-card backdrop-blur-md bg-white/80 border border-white/40 p-8 rounded-2xl shadow-elevated relative z-10 fadeIn transform hover:translate-y-[-10px] transition-all duration-500">
            <div className="absolute -inset-0.5 bg-gradient-to-tr from-verde-escuro/20 to-verde-claro/20 rounded-2xl blur-sm opacity-75"></div>
            <div className="relative bg-white/95 rounded-xl p-8 h-full">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-verde-escuro mb-2">Mensal</h3>
                <div className="flex justify-center items-end">
                  <span className="text-5xl font-bold text-verde-escuro">R$ 99,90</span>
                  <span className="text-cinza-escuro/80 ml-1">/mês</span>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-verde-claro/20 rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1A3C34" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <span>Até 100 pacientes/mês</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-verde-claro/20 rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1A3C34" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <span>Formulários personalizáveis</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-verde-claro/20 rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1A3C34" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <span>Suporte por e-mail</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-verde-claro/20 rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1A3C34" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <span>Exportação de dados</span>
                </div>
              </div>
              
              <Button className="w-full py-6 bg-verde-escuro hover:bg-verde-escuro/80 text-white border-2 border-verde-escuro hover:shadow-xl transition-all duration-300">
                Iniciar Teste Grátis
              </Button>
            </div>
          </div>
          
          {/* Annual Plan - Featured */}
          <div className="glass-card backdrop-blur-lg bg-gradient-to-br from-verde-escuro to-verde-escuro/90 text-white p-8 rounded-2xl shadow-elevated relative z-10 fadeIn transform hover:translate-y-[-10px] transition-all duration-500" style={{ animationDelay: '0.2s' }}>
            <div className="absolute -inset-0.5 bg-gradient-to-tr from-dourado/50 to-verde-claro/30 rounded-2xl blur-sm"></div>
            <div className="absolute -top-4 left-0 right-0 flex justify-center">
              <span className="bg-dourado text-verde-escuro text-sm font-bold py-1 px-6 rounded-full shadow-lg">
                RECOMENDADO
              </span>
            </div>
            
            <div className="relative z-10 p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Anual</h3>
                <div className="flex justify-center items-end">
                  <span className="text-5xl font-bold">R$ 399,00</span>
                  <span className="text-white/80 ml-1">/ano</span>
                </div>
                <p className="mt-2 text-verde-claro font-medium">
                  Economize R$ 195,90 anual
                </p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-verde-claro/30 rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#A3C9A8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <span>Pacientes ilimitados</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-verde-claro/30 rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#A3C9A8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <span>Formulários personalizáveis</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-verde-claro/30 rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#A3C9A8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <span>Suporte prioritário</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-verde-claro/30 rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#A3C9A8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <span>Integração com sistema da clínica</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-verde-claro/30 rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#A3C9A8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <span>Análises avançadas</span>
                </div>
              </div>
              
              <Button className="w-full py-6 bg-verde-claro hover:bg-verde-claro/80 text-verde-escuro font-bold border-2 border-verde-claro hover:shadow-2xl transition-all duration-300 animate-pulse">
                Iniciar Teste Grátis
              </Button>
            </div>
            
            {/* Shine effect */}
            <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
              <div className="absolute -rotate-12 -translate-x-1/2 top-1/2 w-1/2 h-40 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-sm transform animate-shine"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;


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
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto">
            Escolha o plano ideal para sua prática
          </h2>
          <p className="text-xl max-w-2xl mx-auto text-cinza-escuro/80">
            Oferecemos opções flexíveis que se adaptam ao tamanho da sua clínica
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Monthly Plan */}
          <div className="glass-card backdrop-blur-md bg-white/80 border border-white/40 p-8 rounded-2xl shadow-elevated relative z-10 fadeIn transform hover:scale-[1.02] transition-all duration-500">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-verde-escuro mb-2">Mensal</h3>
              <div className="flex justify-center items-end">
                <span className="text-5xl font-bold text-verde-escuro">R$ 99,90</span>
                <span className="text-cinza-escuro/80 ml-1">/mês</span>
              </div>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A3C34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Até 100 pacientes/mês</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A3C34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Formulários personalizáveis</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A3C34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Suporte por e-mail</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A3C34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Exportação de dados</span>
              </div>
            </div>
            
            <Button className="w-full py-6 bg-verde-escuro hover:bg-verde-escuro/80 text-white border-2 border-verde-escuro hover:shadow-lg transition-all duration-300">
              Iniciar Teste Grátis
            </Button>
          </div>
          
          {/* Annual Plan - Featured */}
          <div className="glass-card backdrop-blur-md bg-gradient-to-br from-verde-escuro to-verde-escuro/90 text-white p-8 rounded-2xl shadow-elevated relative z-10 fadeIn transform hover:scale-[1.02] transition-all duration-500" style={{ animationDelay: '0.2s' }}>
            <div className="absolute -top-4 left-0 right-0 flex justify-center">
              <span className="bg-dourado text-verde-escuro text-sm font-bold py-1 px-4 rounded-full shadow-lg">
                RECOMENDADO
              </span>
            </div>
            
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">Anual</h3>
              <div className="flex justify-center items-end">
                <span className="text-5xl font-bold">R$ 399,00</span>
                <span className="text-white/80 ml-1">/ano</span>
              </div>
              <p className="mt-2 text-verde-claro">
                Economize R$ 195,90 anual
              </p>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A3C9A8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Pacientes ilimitados</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A3C9A8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Formulários personalizáveis</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A3C9A8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Suporte prioritário</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A3C9A8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Integração com sistema da clínica</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A3C9A8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Análises avançadas</span>
              </div>
            </div>
            
            <Button className="w-full py-6 bg-verde-claro hover:bg-verde-claro/80 text-verde-escuro font-bold border-2 border-verde-claro hover:shadow-xl transition-all duration-300 animate-pulse">
              Iniciar Teste Grátis
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;

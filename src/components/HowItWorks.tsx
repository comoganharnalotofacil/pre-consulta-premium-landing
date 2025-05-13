
import React, { useEffect, useRef } from 'react';

const HowItWorks: React.FC = () => {
  const howItWorksRef = useRef<HTMLDivElement>(null);
  
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
    <section id="como-funciona" className="py-20 bg-gradient-to-b from-branco to-verde-claro/10" ref={howItWorksRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto">
            Como Funciona
          </h2>
          <p className="text-xl max-w-2xl mx-auto text-cinza-escuro/80">
            Simples, intuitivo e eficiente para você e seus pacientes
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Steps connection line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-verde-claro/30 transform -translate-x-1/2 z-0"></div>
            
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center mb-16 md:mb-24 fadeIn">
              <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 text-center md:text-right">
                <h3 className="text-2xl font-bold text-verde-escuro mb-3">1. Cadastre seus pacientes</h3>
                <p className="text-cinza-escuro/80">
                  Importe sua lista de pacientes ou adicione novos com apenas alguns cliques. O sistema é simples e intuitivo.
                </p>
              </div>
              
              <div className="bg-verde-escuro text-white w-12 h-12 flex items-center justify-center rounded-full text-xl font-bold z-10 mb-6 md:mb-0 relative">
                <div className="absolute w-full h-full rounded-full bg-verde-escuro animate-pulse opacity-50"></div>
                1
              </div>
              
              <div className="md:w-1/2 md:pl-12 text-center md:text-left">
                <img 
                  src="/app-screenshot-1.svg" 
                  alt="Cadastro de pacientes" 
                  className="rounded-lg shadow-elevated w-full max-w-xs mx-auto md:ml-0"
                />
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center mb-16 md:mb-24 fadeIn" style={{ animationDelay: '0.2s' }}>
              <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0 text-center md:text-left">
                <h3 className="text-2xl font-bold text-verde-escuro mb-3">2. Envie o formulário pré-consulta</h3>
                <p className="text-cinza-escuro/80">
                  Com apenas dois cliques, envie por e-mail ou WhatsApp o formulário personalizado para seu paciente preencher.
                </p>
              </div>
              
              <div className="bg-verde-escuro text-white w-12 h-12 flex items-center justify-center rounded-full text-xl font-bold z-10 mb-6 md:mb-0 relative">
                <div className="absolute w-full h-full rounded-full bg-verde-escuro animate-pulse opacity-50"></div>
                2
              </div>
              
              <div className="md:w-1/2 md:pr-12 text-center md:text-right">
                <img 
                  src="/app-screenshot-2.svg" 
                  alt="Envio de formulário" 
                  className="rounded-lg shadow-elevated w-full max-w-xs mx-auto md:mr-0"
                />
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-center fadeIn" style={{ animationDelay: '0.4s' }}>
              <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 text-center md:text-right">
                <h3 className="text-2xl font-bold text-verde-escuro mb-3">3. Receba as informações completas</h3>
                <p className="text-cinza-escuro/80">
                  Quando seu paciente chegar, você já terá todas as informações necessárias disponíveis em um formato organizado.
                </p>
              </div>
              
              <div className="bg-verde-escuro text-white w-12 h-12 flex items-center justify-center rounded-full text-xl font-bold z-10 mb-6 md:mb-0 relative">
                <div className="absolute w-full h-full rounded-full bg-verde-escuro animate-pulse opacity-50"></div>
                3
              </div>
              
              <div className="md:w-1/2 md:pl-12 text-center md:text-left">
                <img 
                  src="/app-screenshot-3.svg" 
                  alt="Visualização das informações" 
                  className="rounded-lg shadow-elevated w-full max-w-xs mx-auto md:ml-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

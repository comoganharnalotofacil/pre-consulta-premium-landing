
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";

const Cta: React.FC = () => {
  const ctaRef = useRef<HTMLDivElement>(null);
  
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
    <section className="py-20 bg-verde-escuro text-branco relative overflow-hidden" ref={ctaRef}>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-verde-claro rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-verde-claro rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Economize tempo, sem riscos
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-white/80">
            Teste nossa plataforma clínica e veja como ela pode transformar sua rotina
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="premium-btn bg-verde-claro hover:bg-verde-claro/80 text-verde-escuro text-lg py-6 px-10">
              Iniciar Teste Grátis
            </Button>
            <Button variant="outline" className="bg-transparent border-2 border-branco text-branco hover:bg-branco/10 text-lg py-6 px-10">
              Agendar Demonstração
            </Button>
          </div>
          
          <p className="mt-8 font-medium">
            Ganhe 30 dias grátis ou seu dinheiro de volta
          </p>
        </div>
      </div>
    </section>
  );
};

export default Cta;

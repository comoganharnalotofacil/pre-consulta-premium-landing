
import React, { useEffect, useRef, useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "O processo é intuitivo e prático?",
    answer: "Sim, desenvolvemos uma interface extremamente intuitiva tanto para médicos quanto para pacientes. Você poderá enviar formulários com apenas dois cliques, e seus pacientes os preencherão facilmente em qualquer dispositivo."
  },
  {
    question: "Como envio o link para o paciente?",
    answer: "Após cadastrar o paciente em nosso sistema, você pode enviar o link do formulário automaticamente por WhatsApp ou e-mail. O sistema também permite agendamento para envio automático dias antes da consulta."
  },
  {
    question: "É mesmo gratuito para testar?",
    answer: "Sim! Oferecemos 7 dias de teste gratuito com todas as funcionalidades disponíveis. Não exigimos cartão de crédito para o período de teste, permitindo que você experimente sem compromisso."
  },
  {
    question: "Posso personalizar os formulários?",
    answer: "Absolutamente! Criamos formulários base para diversas especialidades médicas, mas você pode personalizar completamente de acordo com sua necessidade específica ou especialidade."
  },
  {
    question: "Onde ficam armazenados os dados dos pacientes?",
    answer: "Todos os dados são armazenados em servidores seguros com criptografia de ponta a ponta, seguindo todas as normas da LGPD e padrões internacionais de segurança de dados médicos."
  },
  {
    question: "Posso integrar com o sistema que já uso na minha clínica?",
    answer: "Sim, oferecemos integração com os principais sistemas de gestão de clínicas do mercado. No plano anual, disponibilizamos suporte técnico para realizar essa integração."
  }
];

const Faq: React.FC = () => {
  const faqRef = useRef<HTMLDivElement>(null);
  
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
    <section id="faq" className="py-20 bg-gradient-to-b from-white to-verde-claro/10 relative overflow-hidden" ref={faqRef}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-verde-claro/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-verde-escuro/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <h2 className="section-title mx-auto relative z-10">
              Perguntas Frequentes
            </h2>
            <div className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-verde-claro/40 to-verde-escuro/40 rounded-full transform -skew-x-12"></div>
          </div>
          <p className="text-xl max-w-2xl mx-auto text-cinza-escuro/80 mt-4">
            Tire suas dúvidas sobre a plataforma Pre-Consulta
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto fadeIn">
          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="glass-card backdrop-blur-md bg-white/80 border border-white/40 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <AccordionTrigger className="px-8 py-5 text-lg font-medium text-verde-escuro hover:text-verde-claro transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6 text-cinza-escuro/80">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-16 text-center">
            <p className="text-lg mb-8 text-cinza-escuro/90">Ainda tem dúvidas? Entre em contato conosco</p>
            <Button className="premium-btn bg-gradient-to-r from-verde-escuro to-verde-claro hover:shadow-xl transition-all duration-500 transform hover:translate-y-[-5px] py-6 px-10 text-lg">
              Fale Conosco
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;

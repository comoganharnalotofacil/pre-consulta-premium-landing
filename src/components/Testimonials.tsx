
import React, { useEffect, useRef, useState } from 'react';

interface Testimonial {
  id: number;
  name: string;
  title: string;
  image: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Dr. Carlos Silva",
    title: "Ortopedista",
    image: "/doctor-1.svg",
    quote: "Gerenciamento muito mais fácil, otimizando meu tempo. Consigo me concentrar no que realmente importa durante as consultas."
  },
  {
    id: 2,
    name: "Dra. Mariana Costa",
    title: "Dermatologista",
    image: "/doctor-2.svg",
    quote: "Ótimo para pacientes informados antes da consulta. A plataforma é intuitiva e facilita muito o dia a dia na clínica."
  },
  {
    id: 3,
    name: "Dr. André Santos",
    title: "Cardiologista",
    image: "/doctor-3.svg",
    quote: "Economizei 12 minutos por consulta. Isso me permitiu atender mais pacientes e melhorar a qualidade do atendimento."
  }
];

const Testimonials: React.FC = () => {
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
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

    // Auto-rotation for testimonials
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => {
      elements.forEach((el) => {
        observer.unobserve(el);
      });
      clearInterval(interval);
    };
  }, []);

  return (
    <section id="depoimentos" className="py-20 bg-gradient-to-b from-verde-claro/10 to-branco" ref={testimonialsRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto">
            O que dizem nossos clientes
          </h2>
          <p className="text-xl max-w-2xl mx-auto text-cinza-escuro/80">
            Veja como o Pre-Consulta tem transformado a rotina de médicos como você
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative fadeIn">
          <div className="relative overflow-hidden glass-card backdrop-blur-lg bg-white/60 p-8 md:p-12 rounded-2xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-verde-escuro to-verde-claro"></div>
            
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white shadow-lg overflow-hidden flex-shrink-0">
                <img 
                  src={testimonials[currentTestimonial].image} 
                  alt={testimonials[currentTestimonial].name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div>
                <svg className="w-10 h-10 text-verde-claro/30 mb-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
                </svg>
                
                <p className="text-xl md:text-2xl text-cinza-escuro mb-6 italic">
                  "{testimonials[currentTestimonial].quote}"
                </p>
                
                <div>
                  <h4 className="text-xl font-bold text-verde-escuro">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-cinza-escuro/80">{testimonials[currentTestimonial].title}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentTestimonial === index ? 'bg-verde-escuro scale-125' : 'bg-verde-claro'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

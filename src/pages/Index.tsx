
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import HowItWorks from '@/components/HowItWorks';
import Impact from '@/components/Impact';
import Results from '@/components/Results';
import Numbers from '@/components/Numbers';
import Testimonials from '@/components/Testimonials';
import Plans from '@/components/Plans';
import Faq from '@/components/Faq';
import Cta from '@/components/Cta';
import Footer from '@/components/Footer';
import FloatingButton from '@/components/FloatingButton';

const Index = () => {
  // Update page title and meta description
  useEffect(() => {
    document.title = "Pre-Consulta | Otimize seu tempo em cada consulta";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Recupere até 15 minutos em cada consulta com histórico pré-preenchido. Obtenha pacientes informados antes da consulta.');
    }
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Benefits />
      <HowItWorks />
      <Impact />
      <Results />
      <Numbers />
      <Testimonials />
      <Plans />
      <Faq />
      <Cta />
      <Footer />
      <FloatingButton />
    </div>
  );
};

export default Index;

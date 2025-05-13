
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`sticky-header fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'scrolled py-2' : 'py-4'
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src="/pre-consulta-logo.svg" alt="Pre-Consulta" className="h-8 md:h-10" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-verde-escuro hover:text-verde-claro font-medium transition-colors">Início</Link>
          <a href="#beneficios" className="text-verde-escuro hover:text-verde-claro font-medium transition-colors">Benefícios</a>
          <a href="#como-funciona" className="text-verde-escuro hover:text-verde-claro font-medium transition-colors">Como Funciona</a>
          <Button className="premium-btn">
            Teste Grátis
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-verde-escuro p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-branco shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link to="/" className="text-verde-escuro hover:text-verde-claro font-medium transition-colors" onClick={() => setMobileMenuOpen(false)}>Início</Link>
            <a href="#beneficios" className="text-verde-escuro hover:text-verde-claro font-medium transition-colors" onClick={() => setMobileMenuOpen(false)}>Benefícios</a>
            <a href="#como-funciona" className="text-verde-escuro hover:text-verde-claro font-medium transition-colors" onClick={() => setMobileMenuOpen(false)}>Como Funciona</a>
            <Button className="premium-btn w-full">
              Teste Grátis
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

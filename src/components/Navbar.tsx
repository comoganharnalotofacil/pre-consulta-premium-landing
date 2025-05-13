
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
    <header className={`sticky-header fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'scrolled py-2 bg-branco/95 backdrop-blur-xl shadow-[0_8px_30px_rgba(42,60,52,0.12)]' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link 
            to="/" 
            className="flex items-center relative group"
          >
            <img 
              src="/pre-consulta-logo.svg" 
              alt="Pre-Consulta" 
              className={`${scrolled ? 'h-8' : 'h-10'} transition-all duration-300 filter drop-shadow-lg`} 
            />
            {/* Logo shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-verde-claro/20 to-transparent w-[200%] transform -translate-x-full group-hover:translate-x-full transition-transform duration-1500 ease-in-out"></div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <Link to="/" className="relative px-4 py-2 text-verde-escuro font-medium transition-colors group overflow-hidden">
            <span className="relative z-10">Início</span>
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-verde-escuro to-verde-claro transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
          <a href="#beneficios" className="relative px-4 py-2 text-verde-escuro font-medium transition-colors group overflow-hidden">
            <span className="relative z-10">Benefícios</span>
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-verde-escuro to-verde-claro transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </a>
          <a href="#como-funciona" className="relative px-4 py-2 text-verde-escuro font-medium transition-colors group overflow-hidden">
            <span className="relative z-10">Como Funciona</span>
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-verde-escuro to-verde-claro transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </a>
          <div className="ml-4 relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-verde-escuro via-verde-claro to-verde-escuro rounded-md blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
            <Button className="relative bg-gradient-to-r from-verde-escuro to-verde-escuro/90 hover:from-verde-escuro hover:to-verde-claro text-branco border border-verde-claro/20 shadow-[0_8px_20px_rgba(26,60,52,0.3)] hover:shadow-[0_8px_30px_rgba(26,60,52,0.5)] transition-all duration-500 transform hover:scale-[1.02] font-medium">
              Teste Grátis
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-verde-escuro p-2 rounded-full hover:bg-verde-claro/10 transition-colors"
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
        <div className="md:hidden bg-white/95 backdrop-blur-lg shadow-lg border-t border-verde-claro/10 animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-verde-escuro hover:text-verde-claro font-medium transition-colors p-2 hover:bg-verde-claro/5 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Início
            </Link>
            <a 
              href="#beneficios" 
              className="text-verde-escuro hover:text-verde-claro font-medium transition-colors p-2 hover:bg-verde-claro/5 rounded-md" 
              onClick={() => setMobileMenuOpen(false)}
            >
              Benefícios
            </a>
            <a 
              href="#como-funciona" 
              className="text-verde-escuro hover:text-verde-claro font-medium transition-colors p-2 hover:bg-verde-claro/5 rounded-md" 
              onClick={() => setMobileMenuOpen(false)}
            >
              Como Funciona
            </a>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-verde-escuro to-verde-claro rounded-md blur opacity-30"></div>
              <Button 
                className="relative w-full bg-gradient-to-r from-verde-escuro to-verde-escuro/90 text-branco border border-verde-claro/20 shadow-lg"
                onClick={() => setMobileMenuOpen(false)}  
              >
                Teste Grátis
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

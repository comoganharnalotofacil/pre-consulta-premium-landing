
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-cinza-escuro text-branco py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <img src="/pre-consulta-logo.svg" alt="Pre-Consulta" className="h-10 mb-4 brightness-200" />
            <p className="text-branco/70 mb-6">
              A ponte digital que conecta pacientes e médicos antes da consulta, otimizando o tempo e melhorando a experiência.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-branco/70 hover:text-verde-claro transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-branco/70 hover:text-verde-claro transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-branco/70 hover:text-verde-claro transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              <li><a href="#beneficios" className="text-branco/70 hover:text-verde-claro transition-colors">Benefícios</a></li>
              <li><a href="#como-funciona" className="text-branco/70 hover:text-verde-claro transition-colors">Como Funciona</a></li>
              <li><a href="#depoimentos" className="text-branco/70 hover:text-verde-claro transition-colors">Depoimentos</a></li>
              <li><a href="#planos" className="text-branco/70 hover:text-verde-claro transition-colors">Planos</a></li>
              <li><a href="#faq" className="text-branco/70 hover:text-verde-claro transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Recursos</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-branco/70 hover:text-verde-claro transition-colors">Blog</a></li>
              <li><a href="#" className="text-branco/70 hover:text-verde-claro transition-colors">Tutoriais</a></li>
              <li><a href="#" className="text-branco/70 hover:text-verde-claro transition-colors">Suporte</a></li>
              <li><a href="#" className="text-branco/70 hover:text-verde-claro transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="text-branco/70 hover:text-verde-claro transition-colors">Termos de Uso</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-verde-claro">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span className="text-branco/70">(11) 9999-9999</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-verde-claro">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span className="text-branco/70">contato@preconsulta.com</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-verde-claro">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span className="text-branco/70">São Paulo, SP</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-branco/20 text-center text-branco/50">
          <p>&copy; {year} Pre-Consulta. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

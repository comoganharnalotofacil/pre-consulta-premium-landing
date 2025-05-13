
import React from 'react';
import { Button } from "@/components/ui/button";

const FloatingButton: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <Button className="float-btn premium-btn rounded-full p-4 shadow-lg animate-pulse">
        <span className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
          Teste Grátis
        </span>
      </Button>
    </div>
  );
};

export default FloatingButton;

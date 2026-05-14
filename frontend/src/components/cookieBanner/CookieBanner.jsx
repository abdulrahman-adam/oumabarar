import React, { useState, useEffect } from 'react';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Vérifie si l'utilisateur a déjà fait un choix
  useEffect(() => {
    const consent = localStorage.getItem('oumabarar_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500); // Délai élégant
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('oumabarar_cookie_consent', 'all');
    setIsVisible(false);
  };

  const handleRefuse = () => {
    localStorage.setItem('oumabarar_cookie_consent', 'essential');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-[9999] animate-in fade-in slide-in-from-bottom-10 duration-700">
      <div className="w-full bg-gray-300 shadow-[0_-10px_40px_rgba(0,0,0,0.08)] border border-gray-100 p-6 md:p-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* Texte descriptif */}
          <div className="flex-1 space-y-3 text-center lg:text-left">
            <h4 className="text-lg font-black uppercase tracking-tighter text-gray-900">
              Respect de votre vie privée
            </h4>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-3xl">
              Chez <span className="font-bold text-gray-900">Oumabarar</span>, nous utilisons des cookies pour améliorer votre expérience d'achat, 
              analyser notre trafic et vous proposer des contenus adaptés à vos envies. 
              Vous pouvez accepter tous les cookies ou configurer vos préférences.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            <button
              onClick={handleRefuse}
              className="w-full sm:w-auto px-8 py-3 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-gray-900 transition-colors"
            >
              Continuer sans accepter
            </button>
            
            <button
              onClick={() => {/* Logique personnalisée */}}
              className="w-full sm:w-auto px-8 py-3 border-2 border-gray-100 text-[10px] font-black uppercase tracking-widest text-gray-700 hover:border-indigo-600 hover:text-indigo-600 transition-all"
            >
              Personnaliser
            </button>

            <button
              onClick={handleAcceptAll}
              className="w-full sm:w-auto px-8 py-3 bg-gray-900 text-white text-[10px] font-black uppercase tracking-widest hover:bg-indigo-600 shadow-lg shadow-gray-200 transition-all active:scale-95"
            >
              Accepter tout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
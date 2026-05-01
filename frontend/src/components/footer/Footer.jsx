import React from "react";

const Footer = () => {
  const footerSections = [
    {
      title: "Entreprise",
      links: [
        { name: "À propos", href: "/about" },
        { name: "Conditions", href: "/terms" },
        { name: "Confidentialité", href: "/privacy-policy" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Contact", href: "/contact" },
        { name: "FAQ", href: "/faq" },
        { name: "Livraison", href: "/shipping" },
      ],
    },
    {
      title: "Boutique",
      links: [
        { name: "Produits", href: "/products" },
        { name: "Nouveautés", href: "/new-arrivals" },
        { name: "Promotions", href: "/sales" },
      ],
    },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-950 via-black to-gray-950 border-t border-gray-800/50 shadow-2xl text-gray-200 overflow-hidden">
      {/* Decorative Glow Background Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 py-16 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
          
          {/* BRAND COLUMN */}
          <div className="col-span-1 flex flex-col items-center md:items-start text-center md:text-left animate-fadeIn">
            <div className="group cursor-default">
              <h2 className="text-3xl font-black tracking-tighter text-indigo-500 transition-all duration-500 group-hover:drop-shadow-[0_0_8px_rgba(99,102,241,0.8)] group-hover:text-indigo-400">
                OUMABARAR
              </h2>
              <div className="h-1 w-0 bg-indigo-500 transition-all duration-500 group-hover:w-full mt-1"></div>
            </div>
            
            <p className="mt-6 text-gray-400 text-sm leading-relaxed max-w-xs transition-colors hover:text-gray-300">
              Plateforme e-commerce moderne, rapide et sécurisée. Sublimez votre style de vie grâce à nos collections soigneusement sélectionnées.
            </p>

            {/* SOCIAL WITH HOVER ANIMATION */}
            <div className="flex gap-4 mt-8">
              {["facebook", "instagram", "twitter-x"].map((icon) => (
                <a
                  key={icon}
                  href={`https://${icon}.com`}
                  className="w-11 h-11 flex items-center justify-center rounded-xl bg-gray-900/50 border border-gray-800 text-gray-400 hover:border-indigo-500 hover:text-indigo-400 hover:-translate-y-2 hover:shadow-[0_10px_20px_-10px_rgba(99,102,241,0.5)] transition-all duration-300"
                >
                  <i className={`bi bi-${icon} text-lg`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* LINKS COLUMNS WITH STAGGERED HOVER */}
          <div className="col-span-1 md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-10">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-6">
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-indigo-400/80 border-l-2 border-indigo-500 pl-4">
                  {section.title}
                </h3>
                <ul className="space-y-4">
                  {section.links.map((link, i) => (
                    <li key={i} className="group overflow-hidden">
                      <a
                        href={link.href}
                        className="flex items-center text-gray-400 text-sm group-hover:text-white transition-all duration-300 transform group-hover:translate-x-2"
                      >
                        <span className="w-0 h-px bg-indigo-500 mr-0 transition-all duration-300 group-hover:w-4 group-hover:mr-3"></span>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* TRUST BADGES & BOTTOM */}
        <div className="mt-20 pt-10 border-t border-gray-800/50">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
            
            {/* TRUST BADGES WITH INTERACTION */}
            <div className="flex flex-wrap justify-center gap-8 text-[10px] font-bold text-gray-500 uppercase tracking-[0.15em]">
              {[
                { icon: "shield-lock", text: "Secure Payment" },
                { icon: "truck", text: "Global Shipping" },
                { icon: "arrow-repeat", text: "30-Day Returns" },
              ].map((badge, idx) => (
                <span key={idx} className="flex items-center gap-3 group cursor-default">
                  <div className="p-2 rounded-lg bg-gray-900 border border-gray-800 group-hover:border-indigo-500/50 transition-colors">
                    <i className={`bi bi-${badge.icon} text-indigo-500 text-base group-hover:scale-110 transition-transform block`}></i>
                  </div>
                  <span className="group-hover:text-gray-300 transition-colors">{badge.text}</span>
                </span>
              ))}
            </div>

            {/* COPYRIGHT AREA */}
            <div className="text-center lg:text-right">
              <div className="bg-gray-900/50 px-6 py-2 rounded-full border border-gray-800/50 inline-block backdrop-blur-sm">
                <p className="text-gray-500 text-[11px] tracking-wide">
                  © {new Date().getFullYear()} <span className="font-black text-indigo-400 tracking-tighter">OUMABARAR</span>. Tous droits réservés.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS For FadeIn Animation */}
      <style jsx="true">{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
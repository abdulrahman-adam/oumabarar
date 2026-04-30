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
    <footer className="bg-gradient-to-br from-gray-950 to-black border-t border-gray-800 shadow-inner text-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-10">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* BRAND COLUMN */}
          <div className="col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-2xl font-black tracking-tighter text-indigo-500">FANCYMARCKET</h2>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed max-w-xs">
              Plateforme e-commerce moderne, rapide et sécurisée. Sublimez votre style de vie grâce à nos collections soigneusement sélectionnées.
            </p>
            {/* SOCIAL */}
            <div className="flex gap-4 mt-6">
              {["facebook", "instagram", "twitter-x"].map((icon) => (
                <a
                  key={icon}
                  href={`https://${icon}.com`}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 border border-gray-800 text-gray-400 hover:border-indigo-500 hover:text-indigo-500 transition-all shadow-sm"
                >
                  <i className={`bi bi-${icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* LINKS COLUMNS */}
          <div className="col-span-3 grid grid-cols-3 gap-8">
            {footerSections.map((section, index) => (
              <div key={index}>
                <h3 className="text-sm font-bold uppercase tracking-widest text-indigo-400 mb-5">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a
                        href={link.href}
                        className="text-gray-400 text-sm hover:text-white transition-colors duration-200"
                      >
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
        <div className="mt-12 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center gap-6 text-xs font-medium text-gray-500 uppercase tracking-widest">
            <span className="flex items-center gap-2"><i className="bi bi-shield-lock text-indigo-500 text-lg"></i> Secure Payment</span>
            <span className="flex items-center gap-2"><i className="bi bi-truck text-indigo-500 text-lg"></i> Global Shipping</span>
            <span className="flex items-center gap-2"><i className="bi bi-arrow-repeat text-indigo-500 text-lg"></i> 30-Day Returns</span>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-500 text-xs">
              © {new Date().getFullYear()} <span className="font-bold text-gray-300">FANCYMARCKET</span>. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
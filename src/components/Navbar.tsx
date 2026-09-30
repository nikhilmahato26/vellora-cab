import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageCircle, Menu, X, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../utils/contact';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'Cars', href: '/#fleet' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'How It Works', href: '/#how-it-works' },
    { name: 'About', href: '/#about' },
    { name: 'Contact', href: '/#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith('/#')) {
      const elementId = href.replace('/#', '');
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-slate-200'
          : 'bg-white/80 backdrop-blur-sm py-4 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center group py-0.5"
            aria-label="Velora Drive Home"
          >
            <div className="bg-black px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl border border-slate-800 shadow-xs flex items-center justify-center transition-all duration-200 group-hover:border-cyan-500/40">
              <img
                src="/images/logo.png"
                alt="Velora Drive - Drive Beyond Ordinary"
                className="h-8 sm:h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  if (location.pathname === '/') {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }
                }}
                className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-cyan-600 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={BUSINESS_INFO.phonePrimaryTel}
              className="inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors border border-slate-200"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-600" />
              <span>{BUSINESS_INFO.phonePrimary}</span>
            </a>
            <a
              href="#booking"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('/#booking');
              }}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold text-white bg-slate-900 hover:bg-cyan-600 rounded-lg transition-all duration-200 shadow-sm shadow-slate-900/10 group"
            >
              <span>Book Now</span>
              <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button & Quick CTAs */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={BUSINESS_INFO.phonePrimaryTel}
              aria-label="Call Velora Drive"
              className="p-2 text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors border border-slate-200"
            >
              <Phone className="w-4 h-4 text-cyan-600" />
            </a>
            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Velora Drive"
              className="p-2 text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors border border-slate-200"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:text-cyan-600 hover:bg-cyan-50/50 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 space-y-2.5">
            <a
              href="#booking"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('/#booking');
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-slate-900 text-white font-bold text-sm shadow-sm"
            >
              <span>Book Now</span>
              <ArrowRight className="w-4 h-4 text-cyan-400" />
            </a>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={BUSINESS_INFO.phonePrimaryTel}
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-slate-100 text-slate-800 text-xs font-semibold border border-slate-200"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-600" />
                <span>Call Primary</span>
              </a>
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

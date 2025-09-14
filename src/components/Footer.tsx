'use client';

import Link from 'next/link';
import { MapPin, Clock, Phone, Mail, Instagram, Facebook } from 'lucide-react';

export default function Footer() {

  const socialLinks = [
    { name: 'Instagram', href: 'https://instagram.com/lashbloomstudio', icon: Instagram },
    { name: 'Facebook', href: 'https://facebook.com/lashbloomstudio', icon: Facebook },
  ];

  const navLinks = [
    { href: '/', label: 'Sākums' },
    { href: '/par-mums', label: 'Par mums' },
    { href: '/cenas', label: 'Pakalpojumi' },
    { href: '/rezervacija', label: 'Pieraksts' },
    { href: '/kontakti', label: 'Kontakti' },
  ];

  return (
    <footer 
      role="contentinfo" 
      aria-label="Site footer"
      className="mt-16 sm:mt-20 py-10 sm:py-12"
    >
      {/* Main Footer Card - matches Hero spacing pattern */}
      <div className="mx-3 sm:mx-4 md:mx-6 lg:mx-8 rounded-3xl shadow-xl ring-1 ring-black/5 bg-[var(--ink)] text-white p-8 sm:p-10 lg:p-12">
          {/* Content Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Brand Column */}
            <div className="space-y-4 lg:col-span-1">
              <h3 
                className="font-extrabold tracking-tight text-[var(--accent)]"
                style={{ fontSize: 'clamp(20px, 2.2vw, 24px)' }}
              >
                Lash Bloom Studio
              </h3>
              <p className="text-sm leading-relaxed text-white/80">
                Premium skropstu un uzacu kopšana Rīgas sirdī ar mīlestību uz detaļām un profesionālu pieeju.
              </p>
            </div>

            {/* Contact Column */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-white uppercase tracking-wide">
                Kontakti
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 mt-0.5 text-[var(--accent)] flex-shrink-0" aria-hidden="true" />
                  <span className="text-white/80 leading-relaxed">
                    Brīvības iela 123<br />
                    Rīga, LV-1001<br />
                    Latvija
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-[var(--accent)] flex-shrink-0" aria-hidden="true" />
                  <a 
                    href="tel:+37120123456"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    +371 20 123 456
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-[var(--accent)] flex-shrink-0" aria-hidden="true" />
                  <a 
                    href="mailto:info@lashbloomstudio.com"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    info@lashbloomstudio.com
                  </a>
                </div>
              </div>
            </div>

            {/* Hours Column */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-white uppercase tracking-wide">
                Darba laiks
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-start space-x-3">
                  <Clock className="h-4 w-4 mt-0.5 text-[var(--accent)] flex-shrink-0" aria-hidden="true" />
                  <div className="text-white/80 leading-relaxed">
                    <div>P-Pk: 9:00 - 19:00</div>
                    <div>Sestd: 10:00 - 17:00</div>
                    <div>Svētd: Slēgts</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Links & Social Column */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-white uppercase tracking-wide">
                Navigācija
              </h4>
              <nav className="space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              
              {/* Social Links */}
              <div className="pt-4">
                <h5 className="text-xs font-semibold text-white/60 uppercase tracking-wide mb-3">
                  Sekojiet mums
                </h5>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/80 hover:text-[var(--accent)] transition-colors"
                        aria-label={`Sekojiet mums ${social.name}`}
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/10 mt-8 pt-6">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
              <p className="text-sm text-white/60">
                © {new Date().getFullYear()} Lash Bloom Studio. Visas tiesības aizsargātas.
              </p>
              <div className="flex space-x-6 text-sm">
                <Link 
                  href="/politika" 
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Privātuma politika
                </Link>
                <Link 
                  href="/noteikumi" 
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Lietošanas noteikumi
                </Link>
              </div>
            </div>
          </div>
        </div>
    </footer>
  );
}

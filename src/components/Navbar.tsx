'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import styles from './Navbar.module.scss';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.navContent}>
          {/* Logo */}
          <div className={styles.logoContainer}>
            <div className={styles.logoWrapper}>
              <Image 
                src="/images/susyLogo.webp" 
                alt="SUSY SOLUTIONS" 
                width={200} 
                height={80} 
                className={styles.logo}
                priority
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className={styles.desktopNav}>
            <button onClick={() => scrollToSection('home')} className={styles.navLink}>
              Home
            </button>
            <button onClick={() => scrollToSection('services')} className={styles.navLink}>
              Services
            </button>
            <button onClick={() => scrollToSection('features')} className={styles.navLink}>
              Features
            </button>
            <button onClick={() => scrollToSection('about')} className={styles.navLink}>
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={styles.contactButton}
            >
              Contact Us
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={styles.mobileMenuButton}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className={styles.mobileNav}>
            <div className={styles.mobileNavLinks}>
              <button onClick={() => scrollToSection('home')} className={styles.mobileNavLink}>
                Home
              </button>
              <button onClick={() => scrollToSection('services')} className={styles.mobileNavLink}>
                Services
              </button>
              <button onClick={() => scrollToSection('features')} className={styles.mobileNavLink}>
                Features
              </button>
              <button onClick={() => scrollToSection('about')} className={styles.mobileNavLink}>
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className={styles.mobileContactButton}
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

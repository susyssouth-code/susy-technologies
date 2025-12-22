'use client';

import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import Image from 'next/image';
import styles from './Footer.module.scss';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Company Info */}
          <div className={styles.companyInfo}>
            <div className={styles.logoWrapper}>
              <Image 
                src="/images/susyLogoFooter.webp" 
                alt="SUSY SOLUTIONS" 
                width={150} 
                height={48} 
                className={styles.logo}
              />
            </div>
            <p className={styles.tagline}>
              Driving the future of hospital technology systems
            </p>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink}>
                <Linkedin size={20} />
              </a>
              <a href="#" className={styles.socialLink}>
                <Twitter size={20} />
              </a>
              <a href="#" className={styles.socialLink}>
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.section}>
            <h4>Quick Links</h4>
            <ul className={styles.linkList}>
              <li>
                <button onClick={() => scrollToSection('home')} className={styles.link}>
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className={styles.link}>
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('features')} className={styles.link}>
                  Features
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className={styles.link}>
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className={styles.link}>
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className={styles.section}>
            <h4>Our Services</h4>
            <ul className={styles.linkList}>
              <li className={styles.textItem}>Nurse Call System</li>
              <li className={styles.textItem}>Token System</li>
              <li className={styles.textItem}>Queue Management</li>
              <li className={styles.textItem}>AMC & Support</li>
              <li className={styles.textItem}>Automation Solutions</li>
              <li className={styles.textItem}>ELV Systems</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.section}>
            <h4>Contact Us</h4>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <Phone size={18} className={styles.contactIcon} />
                <div className={styles.contactText}>
                  <div>+91 89713 30226</div>
                  <div>+91 73822 34758</div>
                </div>
              </li>
              <li className={styles.contactItem}>
                <Mail size={18} className={styles.contactIcon} />
                <div className={styles.contactText}>
                  <div>susyssouth@gmail.com</div>
                  <div>sales@susytechnologies.com</div>
                </div>
              </li>
              <li className={styles.contactItem}>
                <MapPin size={18} className={styles.contactIcon} />
                <div className={styles.contactText}>
                  Susy Solutions<br />
                  No.23 Anasuya Nilayam 7th Cross 3rd Block Ayyappa Nagar, KR Puram,<br />
                  Bangalore - 560036
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.bottomContent}>
            <div>
              <p className={styles.copyright}>
                ©2025 SUSY SOLUTIONS. All rights reserved.
              </p>
            </div>
            <div className={styles.legalLinks}>
              <a href="#" className={styles.legalLink}>
                Privacy Policy
              </a>
              <a href="#" className={styles.legalLink}>
                Terms of Service
              </a>
              <a href="#" className={styles.legalLink}>
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

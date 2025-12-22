'use client';

import { ArrowRight, Phone } from 'lucide-react';
import styles from './CTA.module.scss';

export function CTA() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Ready to Upgrade Your Hospital Systems?
          </h2>
          <p className={styles.description}>
            Trust is built on results. Partner with Susy Technologies for the operational upgrade you need. We deliver advanced, reliable technology designed to powerfully support caregivers and uphold patient protection. Our core promise: a complete transformation delivered with a guaranteed non-disruptive implementation. We fit our process to your calendar, not the other way around.
          </p>
          
          <div className={styles.buttons}>
            <button 
              onClick={scrollToContact}
              className={styles.primaryButton}
            >
              Request a Demo
              <ArrowRight size={20} className={styles.buttonIcon} />
            </button>
            <a 
              href="tel:+918971330226"
              className={styles.secondaryButton}
            >
              <Phone size={20} />
              Call Now
            </a>
          </div>

          <p className={styles.footnote}>
            Our team is ready to demonstrate our solutions across India – book your demo today!
          </p>
        </div>
      </div>
    </section>
  );
}

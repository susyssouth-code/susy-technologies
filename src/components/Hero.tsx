'use client';

import { ArrowRight, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import styles from './Hero.module.scss';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Content */}
          <div className={styles.content}>
            <div className={styles.badge}>
              <span className={styles.badgeContent}>
                <CheckCircle size={16} />
                Trusted Healthcare Technology Partner
              </span>
            </div>
            
            <h1 className={styles.title}>
              Smart Technology Solutions for Modern Hospitals
            </h1>
            
            <p className={styles.description}>
              Advanced hospital technologies transform healthcare through AI, IoT systems, and smart devices such as Nurse Call, OPD, and Token Management systems—automating workflows, improving patient engagement, and enhancing operational efficiency.
            </p>

            <div className={styles.buttons}>
              <button 
                onClick={scrollToContact}
                className={styles.primaryButton}
              >
                Get Started
                <ArrowRight size={20} className={styles.buttonIcon} />
              </button>
              <button 
                onClick={scrollToServices}
                className={styles.secondaryButton}
              >
                View Solutions
              </button>
            </div>

            {/* Stats */}
            <div className={styles.stats}>
              <div>
                <h3 className={styles.statValue}>50+</h3>
                <p className={styles.statLabel}>Installations</p>
              </div>
              <div>
                <h3 className={styles.statValue}>24/7</h3>
                <p className={styles.statLabel}>Support</p>
              </div>
              <div>
                <h3 className={styles.statValue}>5+</h3>
                <p className={styles.statLabel}>Years Experience</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className={styles.imageContainer}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/banner.webp"
                alt="Hospital Technology"
                width={1080}
                height={720}
                className={styles.heroImage}
                priority
              />
            </div>
            {/* Floating Card */}
            <div className={styles.floatingCard}>
              <div className={styles.floatingCardContent}>
                <div className={styles.floatingCardIcon}>
                  <CheckCircle size={24} />
                </div>
                <div>
                  <h4 className={styles.floatingCardTitle}>ISO Certified</h4>
                  <p className={styles.floatingCardText}>Quality Assured</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

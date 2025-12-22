'use client';

import { Bell, Hash, Users, Flame, Wrench, Zap, Network, LucideIcon } from 'lucide-react';
import styles from './Services.module.scss';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  colorClass: string;
}

const services: Service[] = [
  {
    icon: Bell,
    title: 'Nurse Call System',
    description: 'Advanced nurse call systems ensuring rapid response to patient needs with real-time alerts and comprehensive monitoring.',
    features: [
      'Instant patient-to-nurse communication',
      'Priority-based alert management',
      'Integration with hospital infrastructure',
      'Mobile app support for staff'
    ],
    colorClass: 'blue'
  },
  {
    icon: Hash,
    title: 'Token System',
    description: 'Digital token management system streamlining patient flow and reducing wait times in OPD and other departments.',
    features: [
      'Automated queue generation',
      'Digital display boards',
      'SMS & mobile notifications',
      'Analytics and reporting'
    ],
    colorClass: 'purple'
  },
  {
    icon: Users,
    title: 'Queue Management System (QMS)',
    description: 'Intelligent queue management optimizing patient flow across multiple departments and service points.',
    features: [
      'Multi-department coordination',
      'Real-time queue status',
      'Self-service kiosks',
      'Performance metrics dashboard'
    ],
    colorClass: 'green'
  },
  {
    icon: Flame,
    title: 'Fire Alarm System',
    description: 'State-of-the-art fire detection and alarm systems ensuring patient and staff safety with early warning capabilities.',
    features: [
      'Advanced smoke & heat detection',
      'Automatic emergency alerts',
      'Integrated evacuation protocols',
      'Regular maintenance & testing'
    ],
    colorClass: 'red'
  },
  {
    icon: Wrench,
    title: 'AMC & Support Services',
    description: 'Comprehensive annual maintenance contracts and 24/7 technical support ensuring uninterrupted system operations.',
    features: [
      '24/7 technical support',
      'Preventive maintenance',
      'Quick response times',
      'Spare parts availability'
    ],
    colorClass: 'orange'
  },
  {
    icon: Zap,
    title: 'Automation Solutions for Hotels and Hospital',
    description: 'Smart automation systems for lighting, HVAC, access control, and energy management to enhance comfort and efficiency.',
    features: [
      'Intelligent lighting control',
      'Climate automation',
      'Energy management systems',
      'Centralized control panels'
    ],
    colorClass: 'cyan'
  },
  {
    icon: Network,
    title: 'ELV Systems',
    description: 'Complete Extra Low Voltage systems including CCTV, access control, PA systems, and structured cabling solutions.',
    features: [
      'IP-based CCTV surveillance',
      'Biometric access control',
      'Public address systems',
      'Structured cabling & networking'
    ],
    colorClass: 'indigo'
  }
];

export function Services() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <div className={styles.badge}>
            Our Solutions
          </div>
          <h2 className={styles.title}>
            Comprehensive Healthcare Technology Solutions
          </h2>
          <p className={styles.subtitle}>
            We empower healthcare facilities with intelligent, connected systems that improve operational efficiency, patient engagement, and overall care quality.
          </p>
        </div>

        {/* Services Grid */}
        <div className={styles.grid}>
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className={styles.card}
              >
                {/* Icon */}
                <div className={`${styles.iconWrapper} ${styles[service.colorClass]}`}>
                  <Icon size={28} />
                </div>

                {/* Title */}
                <h3 className={styles.cardTitle}>
                  {service.title}
                </h3>

                {/* Description */}
                <p className={styles.cardDescription}>
                  {service.description}
                </p>

                {/* Features */}
                <ul className={styles.featureList}>
                  {service.features.map((feature, idx) => (
                    <li key={idx} className={styles.featureItem}>
                      <span className={styles.featureCheck}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <button 
                  onClick={scrollToContact}
                  className={styles.quoteButton}
                >
                  Get a Quote
                  <span className={styles.quoteArrow}>→</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

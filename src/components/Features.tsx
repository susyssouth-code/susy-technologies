import { Shield, Clock, Award, Headphones, Zap, TrendingUp, LucideIcon } from 'lucide-react';
import styles from './Features.module.scss';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Shield,
    title: 'Reliable & Secure',
    description: 'Enterprise-grade security with guaranteed uptime and data protection compliance.'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock technical support and emergency response for critical situations.'
  },
  {
    icon: Award,
    title: 'ISO Certified',
    description: 'Quality-assured products and services meeting international healthcare standards.'
  },
  {
    icon: Headphones,
    title: 'Expert Consultation',
    description: 'Dedicated team of healthcare technology specialists for personalized guidance.'
  },
  {
    icon: Zap,
    title: 'Quick Deployment',
    description: 'Fast installation and setup with minimal disruption to hospital operations.'
  },
  {
    icon: TrendingUp,
    title: 'Scalable Solutions',
    description: 'Flexible systems that grow with your facility\'s expanding needs.'
  }
];

export function Features() {
  return (
    <section id="features" className={styles.features}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <div className={styles.badge}>
            Why Choose Us
          </div>
          <h2 className={styles.title}>
            Your Trusted Healthcare Technology Partner
          </h2>
          <p className={styles.subtitle}>
            We combine technical expertise with deep healthcare industry knowledge to deliver 
            solutions that make a real difference in patient care and hospital efficiency.
          </p>
        </div>

        {/* Features Grid */}
        <div className={styles.grid}>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className={styles.card}
              >
                <div className={styles.iconWrapper}>
                  <Icon size={24} />
                </div>
                <h4 className={styles.cardTitle}>
                  {feature.title}
                </h4>
                <p className={styles.cardDescription}>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { Target, Eye, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import styles from './About.module.scss';

export function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left - Image */}
          <div className={styles.imageSection}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/about-healthcare.webp"
                alt="Healthcare Professionals"
                width={1080}
                height={720}
                className={styles.aboutImage}
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className={styles.contentSection}>
            <div className={styles.badge}>
              About Susy Technologies
            </div>
            
            <h2 className={styles.title}>
              Leading Healthcare Technology Solutions Provider
            </h2>
            
            <p className={styles.introText}>
              With over 5 years of experience in healthcare technology, Susy Technologies has established 
              itself as a trusted partner for hospitals and healthcare facilities across the region.
            </p>

            <p className={styles.description}>
              We specialize in providing comprehensive hospital management systems that integrate seamlessly 
              with existing infrastructure, improving operational efficiency and patient care quality. Our 
              solutions are designed with healthcare professionals in mind, ensuring ease of use and reliability.
            </p>

            {/* Mission & Vision */}
            <div className={styles.missionVision}>
              <div className={styles.missionItem}>
                <div className={styles.missionIcon}>
                  <Target size={24} />
                </div>
                <div>
                  <h4 className={styles.missionTitle}>Our Mission</h4>
                  <p className={styles.missionText}>
                    To empower healthcare facilities with innovative technology solutions that enhance 
                    patient care and operational excellence.
                  </p>
                </div>
              </div>

              <div className={styles.missionItem}>
                <div className={styles.missionIcon}>
                  <Eye size={24} />
                </div>
                <div>
                  <h4 className={styles.missionTitle}>Our Vision</h4>
                  <p className={styles.missionText}>
                    To be the most trusted healthcare technology partner, driving digital transformation 
                    in hospitals nationwide.
                  </p>
                </div>
              </div>
            </div>

            {/* Key Points */}
            <div className={styles.keyPoints}>
              {[
                'ISO certified quality standards',
                '50+ successful installations',
                'Dedicated support & maintenance team',
                'Customized solutions for every facility'
              ].map((point, index) => (
                <div key={index} className={styles.keyPoint}>
                  <CheckCircle size={20} className={styles.keyPointIcon} />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

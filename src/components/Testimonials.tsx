import { Star, Quote } from 'lucide-react';
import styles from './Testimonials.module.scss';

interface Testimonial {
  name: string;
  role: string;
  hospital: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: 'Dr. Bhaskar Rao Bollineni',
    role: 'Chief Medical Officer',
    hospital: 'KIMS Hospitals group',
    content: 'Susy Technologies transformed our patient management system. The Nurse Call System has significantly reduced response times and improved patient satisfaction scores.',
    rating: 5
  },
  {
    name: 'Dr. Malathi Arshanapalai',
    role: 'Chief Quality Officer',
    hospital: 'Aster DM Healthcare',
    content: 'Their Queue Management System has revolutionized our OPD operations. Patient wait times are down by 40% and staff efficiency has improved dramatically.',
    rating: 5
  },
  {
    name: 'Dr. Anil Verma',
    role: 'Director',
    hospital: 'Sunrise Medical Institute',
    content: 'Excellent support services and maintenance. Their team is always available when we need them. The fire alarm system gives us complete peace of mind.',
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <div className={styles.badge}>
            Client Testimonials
          </div>
          <h2 className={styles.title}>
            Trusted by Leading Healthcare Facilities
          </h2>
          <p className={styles.subtitle}>
            Hear from healthcare professionals who have experienced the difference our solutions make.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className={styles.grid}>
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={styles.card}
            >
              {/* Quote Icon */}
              <div className={styles.quoteIcon}>
                <Quote size={64} />
              </div>

              {/* Rating */}
              <div className={styles.rating}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className={styles.star} />
                ))}
              </div>

              {/* Content */}
              <p className={styles.content}>
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className={styles.author}>
                <h4 className={styles.authorName}>
                  {testimonial.name}
                </h4>
                <p className={styles.authorRole}>
                  {testimonial.role}
                </p>
                <p className={styles.authorHospital}>
                  {testimonial.hospital}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

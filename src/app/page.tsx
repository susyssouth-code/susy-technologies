import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Features } from '@/components/Features';
import { About } from '@/components/About';
import { Testimonials } from '@/components/Testimonials';
import { CTA } from '@/components/CTA';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Features />
        <About />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}


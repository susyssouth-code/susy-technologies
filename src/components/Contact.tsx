'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import styles from './Contact.module.scss';
import classnames from 'classnames';

interface FormData {
  name: string;
  email: string;
  phone: string;
  hospital: string;
  service: string;
  message: string;
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    hospital: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  // const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log('Form submitted:', formData);
  //   setSubmitted(true);
  //   setTimeout(() => {
  //     setSubmitted(false);
  //     setFormData({
  //       name: '',
  //       email: '',
  //       phone: '',
  //       hospital: '',
  //       service: '',
  //       message: ''
  //     });
  //   }, 3000);
  // };

const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  debugger;

  try {
    await fetch('/api/send-mail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        hospital: '',
        service: '',
        message: '',
      });
    }, 3000);
  } catch (error) {
    alert('Unable to send message');
  }
};


  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <div className={styles.badge}>
            Get In Touch
          </div>
          <h2 className={styles.title}>
            Ready to Transform Your Hospital?
          </h2>
          <p className={styles.subtitle}>
            Contact us today for a consultation and discover how our solutions can benefit your healthcare facility.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Contact Information */}
          <div className={styles.contactInfo}>
            <div className={styles.infoSection}>
              <h3>Contact Information</h3>
              
              <div className={styles.infoList}>
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className={styles.infoTitle}>Email Us</h4>
                    <p className={styles.infoText}>
                      susyssouth@gmail.com<br />
                      sales@susytechnologies.com<br />
                      support@susytechnologies.com
                    </p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className={styles.infoTitle}>Call Us</h4>
                    <p className={styles.infoText}>
                      +91 89713 30226<br />
                      +91 73822 34758
                    </p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className={styles.infoTitle}>Visit Us</h4>
                    <p className={styles.infoText}>
                      Susy Solutions<br />
                      No.23 Anasuya Nilayam 7th Cross 3rd Block Ayyappa Nagar, KR Puram,<br />
                      Bangalore - 560036
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.supportCard}>
              <h4 className={styles.supportTitle}>24/7 Support Available</h4>
              <p className={styles.supportText}>
                Our technical support team is available round the clock to assist you with any urgent requirements.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="Dr. John Doe"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="john@hospital.com"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.label}>
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="+91 98765 43210"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="hospital" className={styles.label}>
                  Hospital/Facility Name *
                </label>
                <input
                  type="text"
                  id="hospital"
                  name="hospital"
                  required
                  value={formData.hospital}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="City General Hospital"
                />
              </div>
            </div>

            <div className={styles.formGroup} style={{ marginBottom: 'var(--spacing-6)' }}>
              <label htmlFor="service" className={styles.label}>
                Service Interested In *
              </label>
              <select
                id="service"
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className={styles.select}
              >
                <option value="">Select a service</option>
                <option value="nurse-call">Nurse Call System</option>
                <option value="token">Token System</option>
                <option value="qms">Queue Management System</option>
                <option value="fire-alarm">Fire Alarm System</option>
                <option value="amc">AMC & Support Services</option>
                <option value="automation">Automation Solutions for Hotels and Hospital</option>
                <option value="elv">ELV Systems</option>
                <option value="multiple">Multiple Services</option>
              </select>
            </div>

            <div className={classnames(styles.formGroup, styles.marginadjust)}>
              <label htmlFor="message" className={styles.label}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className={styles.textarea}
                placeholder="Tell us about your requirements..."
              />
            </div>

            <button
              type="submit"
              disabled={submitted}
              className={styles.submitButton}
            >
              {submitted ? (
                <span>Message Sent!</span>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send size={20} />
                </>
              )}
            </button>

            {submitted && (
              <p className={styles.successMessage}>
                Thank you for your inquiry! We&apos;ll get back to you shortly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

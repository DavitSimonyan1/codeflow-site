import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiMail, HiPhone, HiLocationMarker, HiPaperAirplane } from 'react-icons/hi';
import { FaTelegram, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import './Contact.css';

const Contact = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  const contactInfo = [
    { icon: HiMail, text: 'hello@codeflow.dev', label: 'Email' },
    { icon: HiPhone, text: '+1 (555) 123-4567', label: 'Phone' },
    { icon: HiLocationMarker, text: 'Worldwide', label: 'Location' },
  ];

  const socialLinks = [
    { icon: FaTelegram, href: '#', label: 'Telegram' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaWhatsapp, href: '#', label: 'WhatsApp' },
  ];

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="contact-bg">
        <div className="contact-glow"></div>
      </div>

      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            {t.contact.title.split(' ')[0]}{' '}
            <span className="gold-text">{t.contact.title.split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="section-subtitle">{t.contact.subtitle}</p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="info-items">
              {contactInfo.map((item, index) => (
                <div key={index} className="info-item">
                  <div className="info-icon">
                    <item.icon />
                  </div>
                  <div className="info-text">
                    <span className="info-label">{item.label}</span>
                    <span className="info-value">{item.text}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="social-links">
              <h4>Follow Us</h4>
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="social-icon"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder={t.contact.form.name}
                value={formData.name}
                onChange={handleChange}
                required
              />
              <div className="input-line"></div>
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder={t.contact.form.email}
                value={formData.email}
                onChange={handleChange}
                required
              />
              <div className="input-line"></div>
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder={t.contact.form.message}
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              ></textarea>
              <div className="input-line"></div>
            </div>

            <motion.button
              type="submit"
              className="btn-primary submit-btn"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {t.contact.form.submit}
              <HiPaperAirplane />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

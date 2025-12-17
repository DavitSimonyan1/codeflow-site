import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { HiMail, HiPhone, HiPaperAirplane, HiCheck, HiX } from 'react-icons/hi';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import './Contact.css';

const Contact = () => {
  const { t } = useLanguage();
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      await emailjs.sendForm(
        'service_n9p0y61',
        'template_b1fzfaj',
        formRef.current,
        'nunU2L_4PRTGGdoQC'
      );

      setStatus({
        type: 'success',
        message: t.contact.form.success || 'Message sent successfully!'
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: t.contact.form.error || 'Failed to send message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus({ type: '', message: '' }), 5000);
    }
  };

  const contactInfo = [
    {
      icon: HiMail,
      text: 'hello.codeflow@gmail.com',
      label: 'Email',
      href: 'mailto:hello.codeflow@gmail.com'
    },
    {
      icon: HiPhone,
      text: '+374 99 28 28 99',
      label: 'Phone',
      flag: '🇦🇲',
      href: 'tel:+37499282899'
    },
  ];

  const socialLinks = [
    { icon: FaInstagram, href: 'https://www.instagram.com/codeflow___/', label: 'Instagram' },
    { icon: FaWhatsapp, href: 'https://wa.me/37499282899', label: 'WhatsApp' },
  ];

  return (
    <section id="contact" className="contact">
      <div className="contact-bg">
        <div className="contact-glow"></div>
      </div>

      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            {t.contact.title.split(' ')[0]}{' '}
            <span className="gold-text">{t.contact.title.split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="section-subtitle">{t.contact.subtitle}</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-items">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="info-item"
                >
                  <div className="info-icon">
                    <item.icon />
                  </div>
                  <div className="info-text">
                    <span className="info-label">{item.label}</span>
                    <span className="info-value">
                      {item.flag && <span className="phone-flag">{item.flag}</span>}
                      {item.text}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            <div className="social-links">
              <h4>Follow Us</h4>
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    aria-label={social.label}
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form
            ref={formRef}
            className="contact-form"
            onSubmit={handleSubmit}
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

            {status.message && (
              <motion.div
                className={`form-status ${status.type}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {status.type === 'success' ? <HiCheck /> : <HiX />}
                {status.message}
              </motion.div>
            )}

            <button
              type="submit"
              className="btn-primary submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="loading-spinner"></span>
              ) : (
                <>
                  {t.contact.form.submit}
                  <HiPaperAirplane />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

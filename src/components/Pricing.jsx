import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiCheck, HiStar } from 'react-icons/hi';
import { useLanguage } from '../context/LanguageContext';
import './Pricing.css';

const Pricing = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="pricing" className="pricing" ref={ref}>
      <div className="pricing-bg">
        <div className="pricing-glow"></div>
      </div>

      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            {t.pricing.title.split(' ')[0]}{' '}
            <span className="gold-text">{t.pricing.title.split(' ').slice(1).join(' ') || t.pricing.title}</span>
          </h2>
          <p className="section-subtitle">{t.pricing.subtitle}</p>
        </motion.div>

        <motion.div
          className="pricing-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {t.pricing.plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`pricing-card ${index === 1 ? 'featured' : ''}`}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              {index === 1 && (
                <div className="featured-badge">
                  <HiStar /> {t.pricing.popular}
                </div>
              )}

              <div className="pricing-header">
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-description">{plan.description}</p>
                <div className="plan-price">
                  <span className="currency">{t.pricing.currency}</span>
                  <span className="amount">{plan.price}</span>
                </div>
              </div>

              <div className="pricing-features">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="feature-item">
                    <div className="feature-icon">
                      <HiCheck />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`pricing-btn ${index === 1 ? 'btn-primary' : 'btn-secondary'}`}>
                {t.pricing.cta}
              </button>

              <div className="card-decoration">
                <div className="decoration-circle"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;

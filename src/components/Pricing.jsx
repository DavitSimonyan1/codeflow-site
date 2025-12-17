import { HiCheck, HiStar } from 'react-icons/hi';
import { useLanguage } from '../context/LanguageContext';
import './Pricing.css';

const Pricing = () => {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="pricing">
      <div className="pricing-bg">
        <div className="pricing-glow"></div>
      </div>

      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            {t.pricing.title.split(' ')[0]}{' '}
            <span className="gold-text">{t.pricing.title.split(' ').slice(1).join(' ') || t.pricing.title}</span>
          </h2>
          <p className="section-subtitle">{t.pricing.subtitle}</p>
        </div>

        <div className="pricing-grid">
          {t.pricing.plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card ${index === 1 ? 'featured' : ''}`}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

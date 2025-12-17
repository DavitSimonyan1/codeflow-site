import { HiCode, HiDesktopComputer, HiCube, HiDeviceMobile, HiSparkles, HiLightningBolt } from 'react-icons/hi';
import { useLanguage } from '../context/LanguageContext';
import './Services.css';

const Services = () => {
  const { t } = useLanguage();

  const icons = [
    HiCode,
    HiDesktopComputer,
    HiCube,
    HiDeviceMobile,
    HiSparkles,
    HiLightningBolt,
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            {t.services.title.split(' ')[0]}{' '}
            <span className="gold-text">{t.services.title.split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="section-subtitle">{t.services.subtitle}</p>
        </div>

        <div className="services-grid">
          {t.services.items.map((service, index) => {
            const Icon = icons[index];
            return (
              <div key={index} className="service-card">
                <div className="service-icon">
                  <Icon />
                  <div className="icon-glow"></div>
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-line"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { HiArrowRight, HiPlay } from 'react-icons/hi';
import { useLanguage } from '../context/LanguageContext';
import './Hero.css';

const Hero = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="hero-gradient"></div>
        <div className="hero-grid"></div>
        <div className="floating-shapes">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className={`shape shape-${i + 1}`}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      </div>

      <motion.div
        className="hero-content container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-badge" variants={itemVariants}>
          <span className="badge-dot"></span>
          Frontend Development Agency
        </motion.div>

        <motion.h1 className="hero-title" variants={itemVariants}>
          {t.hero.title}{' '}
          <span className="gold-text">{t.hero.titleHighlight}</span>
        </motion.h1>

        <motion.p className="hero-subtitle" variants={itemVariants}>
          {t.hero.subtitle}
        </motion.p>

        <motion.div className="hero-buttons" variants={itemVariants}>
          <Link to="pricing" smooth={true} duration={500} offset={-80}>
            <button className="btn-primary">
              {t.hero.cta}
              <HiArrowRight />
            </button>
          </Link>
          <Link to="portfolio" smooth={true} duration={500} offset={-80}>
            <button className="btn-secondary">
              <HiPlay />
              {t.hero.ctaSecondary}
            </button>
          </Link>
        </motion.div>

        <motion.div className="hero-stats" variants={itemVariants}>
          <div className="stat">
            <span className="stat-number">50+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-number">100%</span>
            <span className="stat-label">Satisfaction</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-number">24/7</span>
            <span className="stat-label">Support</span>
          </div>
        </motion.div>
      </motion.div>

      <div className="hero-scroll-indicator">
        <motion.div
          className="scroll-mouse"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="scroll-wheel"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiExternalLink } from 'react-icons/hi';
import { useLanguage } from '../context/LanguageContext';
import './Portfolio.css';

const Portfolio = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web Application',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      color: '#f5d87a',
    },
    {
      id: 2,
      title: 'Corporate Website',
      category: 'Business Site',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      color: '#d4af37',
    },
    {
      id: 3,
      title: 'SaaS Dashboard',
      category: 'Web Application',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      color: '#b8960c',
    },
    {
      id: 4,
      title: 'Restaurant Landing',
      category: 'Landing Page',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop',
      color: '#f5d87a',
    },
    {
      id: 5,
      title: 'Fitness App UI',
      category: 'Mobile Design',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop',
      color: '#d4af37',
    },
    {
      id: 6,
      title: 'Real Estate Portal',
      category: 'Web Application',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
      color: '#b8960c',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="portfolio" className="portfolio" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            {t.portfolio.title.split(' ')[0]}{' '}
            <span className="gold-text">{t.portfolio.title.split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="section-subtitle">{t.portfolio.subtitle}</p>
        </motion.div>

        <motion.div
          className="portfolio-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="portfolio-item"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="portfolio-image">
                <img src={project.image} alt={project.title} />
                <div className="portfolio-overlay">
                  <motion.button
                    className="view-btn"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <HiExternalLink />
                  </motion.button>
                </div>
              </div>
              <div className="portfolio-info">
                <span className="portfolio-category">{project.category}</span>
                <h3 className="portfolio-title">{project.title}</h3>
              </div>
              <div
                className="portfolio-accent"
                style={{ background: project.color }}
              ></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;

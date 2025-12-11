import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { HiX, HiExternalLink, HiCode } from 'react-icons/hi';
import { useLanguage } from '../context/LanguageContext';
import './Portfolio.css';

const Portfolio = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Pizza House',
      category: 'restaurant',
      categoryLabel: 'Restaurant',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop',
      color: '#f5d87a',
      description: 'Modern website for an Italian restaurant with online menu, table reservations, and delivery ordering system.',
      technologies: ['React', 'Framer Motion', 'Styled Components'],
      features: ['Online Menu', 'Table Booking', 'Delivery System', 'Mobile Responsive'],
      type: 'Concept Project',
    },
    {
      id: 2,
      title: 'FitLife Gym',
      category: 'fitness',
      categoryLabel: 'Fitness',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop',
      color: '#d4af37',
      description: 'Dynamic fitness club website with class schedules, trainer profiles, membership plans and online registration.',
      technologies: ['React', 'GSAP', 'Tailwind CSS'],
      features: ['Class Schedule', 'Trainer Profiles', 'Membership Plans', 'Online Registration'],
      type: 'Concept Project',
    },
    {
      id: 3,
      title: 'TechStore',
      category: 'ecommerce',
      categoryLabel: 'E-Commerce',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      color: '#b8960c',
      description: 'Full-featured e-commerce frontend with product catalog, shopping cart, wishlist and checkout flow.',
      technologies: ['React', 'Redux', 'Material UI'],
      features: ['Product Catalog', 'Shopping Cart', 'Wishlist', 'Checkout Flow'],
      type: 'Concept Project',
    },
    {
      id: 4,
      title: 'Luxe Hotel',
      category: 'hotel',
      categoryLabel: 'Hospitality',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop',
      color: '#f5d87a',
      description: 'Elegant hotel website with room showcase, booking system, gallery and virtual tours.',
      technologies: ['React', 'Three.js', 'Framer Motion'],
      features: ['Room Booking', 'Virtual Tour', 'Photo Gallery', 'Reviews'],
      type: 'Concept Project',
    },
    {
      id: 5,
      title: 'CodeFlow Agency',
      category: 'agency',
      categoryLabel: 'Agency',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      color: '#d4af37',
      description: 'Our own agency website showcasing our services, pricing and portfolio with modern animations.',
      technologies: ['React', 'Framer Motion', 'CSS3'],
      features: ['Animated Sections', 'Multi-language', 'Custom Cursor', 'Responsive'],
      type: 'Live Project',
    },
    {
      id: 6,
      title: 'CryptoWatch',
      category: 'dashboard',
      categoryLabel: 'Dashboard',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      color: '#b8960c',
      description: 'Cryptocurrency tracking dashboard with real-time prices, portfolio management and market analytics.',
      technologies: ['React', 'Chart.js', 'WebSocket'],
      features: ['Live Prices', 'Portfolio Tracker', 'Market Charts', 'Alerts'],
      type: 'Concept Project',
    },
  ];

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'restaurant', label: 'Restaurant' },
    { id: 'fitness', label: 'Fitness' },
    { id: 'ecommerce', label: 'E-Commerce' },
    { id: 'agency', label: 'Agency' },
    { id: 'dashboard', label: 'Dashboard' },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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

        {/* Filter Buttons */}
        <motion.div
          className="portfolio-filters"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
              onClick={() => setFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="portfolio-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="portfolio-item"
                variants={itemVariants}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="portfolio-image" id={`img-container-${project.id}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    onLoad={(e) => {
                      e.target.classList.add('loaded');
                      e.target.parentElement.classList.add('loaded');
                    }}
                  />
                  <div className="portfolio-overlay">
                    <span className="project-type">{project.type}</span>
                    <motion.div
                      className="view-btn"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <HiExternalLink />
                    </motion.div>
                  </div>
                </div>
                <div className="portfolio-info">
                  <span className="portfolio-category">{project.categoryLabel}</span>
                  <h3 className="portfolio-title">{project.title}</h3>
                </div>
                <div
                  className="portfolio-accent"
                  style={{ background: project.color }}
                ></div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setSelectedProject(null)}
              >
                <HiX />
              </button>

              <div className="modal-image">
                <img src={selectedProject.image} alt={selectedProject.title} />
                <span className="modal-type">{selectedProject.type}</span>
              </div>

              <div className="modal-body">
                <span className="modal-category">{selectedProject.categoryLabel}</span>
                <h2 className="modal-title">{selectedProject.title}</h2>
                <p className="modal-description">{selectedProject.description}</p>

                <div className="modal-section">
                  <h4><HiCode /> Technologies</h4>
                  <div className="tech-tags">
                    {selectedProject.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="modal-section">
                  <h4>Features</h4>
                  <ul className="feature-list">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;

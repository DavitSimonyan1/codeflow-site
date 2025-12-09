import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaTelegram, FaInstagram, FaWhatsapp, FaGithub } from 'react-icons/fa';
import { HiHeart } from 'react-icons/hi';
import { useLanguage } from '../context/LanguageContext';
import './Footer.css';

const Footer = () => {
  const { t } = useLanguage();

  const navLinks = [
    { id: 'home', label: t.nav.home },
    { id: 'services', label: t.nav.services },
    { id: 'pricing', label: t.nav.pricing },
    { id: 'portfolio', label: t.nav.portfolio },
    { id: 'contact', label: t.nav.contact },
  ];

  const socialLinks = [
    { icon: FaTelegram, href: '#', label: 'Telegram' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaWhatsapp, href: '#', label: 'WhatsApp' },
    { icon: FaGithub, href: '#', label: 'GitHub' },
  ];

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <Link to="home" smooth={true} duration={500} className="footer-logo">
                <img src="/logo.png" alt="CodeFlow" />
              </Link>
              <p className="footer-tagline">{t.footer.tagline}</p>
            </div>

            <nav className="footer-nav">
              <h4>Navigation</h4>
              <ul>
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <Link
                      to={link.id}
                      smooth={true}
                      duration={500}
                      offset={-80}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="footer-social">
              <h4>Connect</h4>
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>
            &copy; {new Date().getFullYear()} CodeFlow. {t.footer.rights}
          </p>
          <p className="made-with">
            Made with <HiHeart className="heart" /> by CodeFlow
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

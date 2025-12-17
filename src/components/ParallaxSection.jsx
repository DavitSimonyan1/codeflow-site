import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import './ParallaxSection.css';

const ParallaxSection = () => {
  const { language } = useLanguage();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  const content = {
    en: {
      title: 'Turning',
      highlight: 'Vision',
      titleEnd: 'Into Reality',
      subtitle: 'Every pixel matters. Every line of code counts.'
    },
    am: {
      title: '\u054C\u056B\u0580\u0561\u056F\u0561\u0576\u0578\u0582\u0569\u0575\u0578\u0582\u0576',
      highlight: '\u0564\u0561\u0580\u0571\u0576\u0578\u0582\u0574',
      titleEnd: '\u056B\u0580\u0561\u056F\u0561\u0576\u0578\u0582\u0569\u0575\u0578\u0582\u0576',
      subtitle: '\u0535\u0580\u0562 \u0583\u056B\u0584\u057D\u0565\u056C\u0568 \u056F\u0561\u0580\u0587\u0578\u0580 \u0567\u0589 \u0535\u0580\u0562 \u056F\u0578\u0564\u056B \u057F\u0578\u0572\u0568 \u0570\u0561\u0577\u057E\u0578\u0582\u0574 \u0567\u0589'
    }
  };

  const t = content[language] || content.en;

  return (
    <section className="parallax-section" ref={ref}>
      <div className="parallax-bg">
        <motion.div className="parallax-layer layer-1" style={{ y: y1 }}>
          <div className="parallax-shape shape-circle"></div>
          <div className="parallax-shape shape-ring"></div>
        </motion.div>

        <motion.div className="parallax-layer layer-2" style={{ y: y2 }}>
          <div className="parallax-shape shape-square"></div>
          <div className="parallax-shape shape-dots"></div>
        </motion.div>

        <motion.div className="parallax-layer layer-3" style={{ y: y3 }}>
          <div className="parallax-shape shape-line"></div>
          <div className="parallax-shape shape-triangle"></div>
        </motion.div>
      </div>

      <motion.div className="parallax-content" style={{ opacity }}>
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {t.title} <span className="gold-text">{t.highlight}</span> {t.titleEnd}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t.subtitle}
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default ParallaxSection;

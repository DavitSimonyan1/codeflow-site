import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './ParallaxSection.css';

const ParallaxSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

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
            Turning <span className="gold-text">Vision</span> Into Reality
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Every pixel matters. Every line of code counts.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default ParallaxSection;

// components/LoadingDots.js
"use client";

import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const LoadingDots = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: false });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const dotVariants = {
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.3,
        repeat: Infinity,
        repeatType: 'reverse',
        duration: 0.6,
      },
    }),
    hidden: { opacity: 0 },
  };

  return (
    <div ref={ref} style={{ display: 'flex', gap: '0.5rem' }}>
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          custom={i}
          animate={controls}
          variants={dotVariants}
          initial="hidden"
          style={{
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            backgroundColor: '#000',
          }}
        />
      ))}
    </div>
  );
};

export default LoadingDots;

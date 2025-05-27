import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  const generateAnimatedElements = () => {
    const elements = [];
    for (let i = 0; i < 6; i++) {
      elements.push(
        <motion.div
          key={i}
          className={`absolute animate-float opacity-${Math.floor(Math.random() * 10) + 5}`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 50 + 10}px`,
            height: `${Math.random() * 50 + 10}px`,
            borderRadius: Math.random() > 0.5 ? '50%' : '0%',
            border: '1px solid rgba(255,255,255,0.1)',
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 10 + 10}s`,
            zIndex: -1
          }}
        />
      );
    }
    return elements;
  };

  return (
    <>
      <div className="animated-bg"></div>
      {generateAnimatedElements()}
    </>
  );
};

export default AnimatedBackground;

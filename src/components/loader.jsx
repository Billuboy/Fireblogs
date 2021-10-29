import React from 'react';
import { motion } from 'framer-motion';

export default function loader() {
  const transition = {
    loop: Infinity,
    duration: 1,
    ease: 'easeInOut',
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <motion.div
        className="spinner_container"
        animate={{ rotate: -360 }}
        transition={transition}>
        <div className="spinner_dot"></div>
        <div className="spinner"></div>
      </motion.div>
    </div>
  );
}

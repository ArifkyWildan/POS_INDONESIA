"use client";

import React, { ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';

// Component for scroll-triggered fade-up/slide-in animation
interface AnimateInViewProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  amount?: number | 'some' | 'all';
}

/**
 * A wrapper component that applies a fade-up animation when the element scrolls into view.
 * Uses a ref to detect when the element is visible.
 */
export const AnimateInView: React.FC<AnimateInViewProps> = ({
  children,
  delay = 0,
  duration = 0.6,
  className = '',
  amount = 0.2,
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
};
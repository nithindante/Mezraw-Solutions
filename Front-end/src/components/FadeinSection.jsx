import React from 'react'
import { motion, useReducedMotion } from "framer-motion";

function FadeinSection({ children, delay = 0, className }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, transform: reduceMotion ? 'none' : 'translateY(16px)' }}
      whileInView={{ opacity: 1, transform: 'translateY(0px)' }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1], delay }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  )
}

export default FadeinSection

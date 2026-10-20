import React from 'react'
import { Link } from 'react-router-dom'
import FadeinSection from './FadeinSection'
import { buttonStyles } from './Button'

// Placeholder page: replace the intro below with the real brand list when it is available.
const Brands = () => (
  <div className="flex min-h-screen w-full flex-col items-center bg-paper px-5 pb-20 sm:px-8">
    <h1 className="mx-auto max-w-4xl py-14 text-center text-hero font-extrabold sm:py-20">Brands</h1>
    <FadeinSection>
      <div className="flex max-w-xl flex-col items-center gap-6 rounded-2xl bg-tint px-6 py-12 text-center sm:px-12">
        <p className="text-lg leading-relaxed">The brands we work with and supply to will be listed here.</p>
        <p className="text-base leading-relaxed text-muted">In the meantime, get in touch to ask about our range or to discuss a partnership.</p>
        <Link to="/contact" className={buttonStyles}>Contact us</Link>
      </div>
    </FadeinSection>
  </div>
);

export default Brands;

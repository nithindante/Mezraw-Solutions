import React from 'react';
import FadeInSection from './FadeinSection';
import { Link } from 'react-router-dom';
import { buttonStyles } from './Button';
function AboutUs() {
  return (
    <section className='flex flex-col items-center gap-6 px-5 py-16 text-center sm:px-8 sm:py-24'>
      <FadeInSection><h2 className='text-section font-bold'>About Us</h2></FadeInSection>
      <FadeInSection delay={0.06}>
        <p className='max-w-[60ch] text-lg leading-relaxed'>Ever feel like you're searching for that crucial element, the one that ties everything together and elevates your operations to the next level? At PV VENTURES, we understand that feeling. We've built our foundation on being precisely that the <strong className='font-extrabold'>missing puzzle piece your business needs to thrive.</strong></p>
      </FadeInSection>
      <FadeInSection delay={0.12}>
        <Link to='/about' className={buttonStyles}>Know More</Link>
      </FadeInSection>
    </section>
  )
}

export default AboutUs

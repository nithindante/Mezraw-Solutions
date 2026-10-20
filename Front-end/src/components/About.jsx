import React from 'react'
import { Link } from 'react-router-dom'
import FadeinSection from './FadeinSection'
import { buttonStyles } from './Button'
import MezrawIcon from '../assets/mezrawsolutions.jpeg'

const About = () => (
  <div className="flex min-h-screen w-full flex-col items-center bg-paper px-5 pb-20 sm:px-8">
    <h1 className="mx-auto max-w-4xl py-14 text-center text-hero font-extrabold sm:py-20">About Us</h1>
    <div className="grid w-full max-w-5xl items-center gap-10 md:grid-cols-[1fr_auto] md:gap-16">
      <FadeinSection>
        <div className="flex flex-col items-start gap-6">
          <p className="max-w-[60ch] text-lg leading-relaxed">Ever feel like you're searching for that crucial element, the one that ties everything together and elevates your operations to the next level? At PV VENTURES, we understand that feeling. We've built our foundation on being precisely that the <strong className="font-extrabold">missing puzzle piece your business needs to thrive.</strong></p>
          <Link to="/contact" className={buttonStyles}>Contact us</Link>
        </div>
      </FadeinSection>
      <FadeinSection delay={0.08}>
        <img src={MezrawIcon} alt="Mezraw Solutions logo" className="size-40 object-contain [clip-path:inset(0_0_6%_0)] sm:size-52" />
      </FadeinSection>
    </div>
  </div>
);

export default About;

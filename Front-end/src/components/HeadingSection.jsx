import React from 'react'
import { Link } from 'react-router-dom'
import FadeinSection from './FadeinSection';
import Specimen from './Specimen';
import { buttonStyles } from './Button';
import cardamomImg from '../assets/elachi.avif'
import pepperImg from '../assets/pepper.avif'
import capsicumImg from '../assets/capsicum.jpg'
import cloveImg from '../assets/clove.avif'
import gingerDryImg from '../assets/dryginger.avif'
import mintImg from '../assets/drymint.avif'
import kudampuliImg from '../assets/puli.avif'
import gingerPowderImg from '../assets/gingerpowder.avif'

const specimens = [
  { src: cardamomImg, alt: 'Green cardamom' },
  { src: pepperImg, alt: 'Black pepper' },
  { src: capsicumImg, alt: 'Bell peppers' },
  { src: cloveImg, alt: 'Cloves' },
  { src: gingerDryImg, alt: 'Dehydrated ginger' },
  { src: mintImg, alt: 'Dehydrated mint leaves' },
  { src: kudampuliImg, alt: 'Kudampuli' },
  { src: gingerPowderImg, alt: 'Ginger powder' },
];

function HeadingSection() {
  return (
    <section className='bg-paper px-5 pb-12 pt-14 sm:px-8 sm:pb-16 sm:pt-20 lg:pt-24'>
      <div className='mx-auto max-w-7xl'>
        <div className='flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between'>
          <FadeinSection>
            <h1 className='max-w-4xl text-hero font-extrabold text-ink'>Pioneering Progress Powered by Trust</h1>
          </FadeinSection>
          <FadeinSection delay={0.08}>
            <Link to='/fresh' className={`${buttonStyles} shrink-0`}>Explore products</Link>
          </FadeinSection>
        </div>
        <div className='mt-12 grid grid-cols-4 gap-2.5 sm:gap-3 md:grid-cols-8 lg:mt-16'>
          {specimens.map((item, index) => (
            <FadeinSection key={item.alt} delay={index * 0.05}>
              <Specimen src={item.src} alt={item.alt} index={index} className='aspect-square' />
            </FadeinSection>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeadingSection

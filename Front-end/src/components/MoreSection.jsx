import React from 'react'
import { Link } from 'react-router-dom'
import FadeInSection from './FadeinSection'
import Specimen from './Specimen'
import capsicumImg from '../assets/capsicum.jpg'
import mintImg from '../assets/drymint.avif'
import cardamomImg from '../assets/elachi.avif'

const verticals = [
    { name: 'Fresh', to: '/fresh', src: capsicumImg, alt: 'Bell peppers' },
    { name: 'Dehydrated Vegetables', to: '/dehydrated-vegetables', src: mintImg, alt: 'Dehydrated mint leaves' },
    { name: 'Spices', to: '/spices', src: cardamomImg, alt: 'Green cardamom' },
];

function MoreSection() {
    return (
        <section className='px-5 py-16 sm:px-8 sm:py-24'>
            <FadeInSection>
                <h2 className='text-center text-section font-bold uppercase'>Versatile Verticals</h2>
            </FadeInSection>

            <div className='mx-auto mt-12 grid max-w-7xl gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3'>
                {verticals.map((item, index) => (
                    <FadeInSection key={item.name} delay={index * 0.07}>
                        <Link to={item.to} className='group block no-underline'>
                            <Specimen src={item.src} alt={item.alt} index={index} className='aspect-[4/3] w-full' />
                            <div className='mt-4 flex items-baseline justify-between gap-4'>
                                <span className='text-xl font-medium text-ink'>{item.name}</span>
                                <span className='text-base text-muted transition-colors duration-150 ease-out [@media(hover:hover)]:group-hover:text-brand'>Know More →</span>
                            </div>
                        </Link>
                    </FadeInSection>
                ))}
            </div>
        </section>
    )
}

export default MoreSection

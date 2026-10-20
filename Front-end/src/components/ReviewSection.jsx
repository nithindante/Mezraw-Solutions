import React from 'react'
import manIcon from '../assets/man.jpg'
import girlIcon from '../assets/girl.jpg'
import wallpaper from '../assets/wallpaper.avif'
import FadeinSection from './FadeinSection'

// Each slip has its own tilt and overlap so the pair reads as freshly printed paper.
const reviews = [
  {
    text: 'We have been their customer for over 2 years now. PV Ventures has changed our quality benchmark for vendors.',
    img: manIcon,
    name: 'Samson',
    slip: '-rotate-3 self-start md:mt-4',
  },
  {
    text: 'Trust and Consistency are the first two words that come to mind when I talk about PVV. They have been helping us with consistent quality and pricing.',
    img: girlIcon,
    name: 'Lavanya',
    slip: 'rotate-2 -mt-6 self-end md:mt-0 md:-ml-3',
  },
];

function Stars() {
  return (
    <div role="img" aria-label="5 out of 5 stars" className="flex gap-1 text-brand">
      {[...Array(5)].map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-5">
          <path d="M12 2.5l2.94 6.18 6.81.88-4.98 4.7 1.25 6.74L12 17.77 5.98 20.99l1.25-6.74-4.98-4.7 6.81-.88L12 2.5z" />
        </svg>
      ))}
    </div>
  )
}

function ReviewSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${wallpaper})` }} />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col px-5 py-20 sm:px-8 md:flex-row md:items-start md:justify-center md:py-28">
        {reviews.map((review, index) => (
          <FadeinSection key={review.name} delay={index * 0.1} className={`w-[86%] max-w-sm md:w-80 ${review.slip}`}>
            <figure className="slip flex h-full flex-col items-center gap-4 bg-paper px-7 py-10 text-center text-ink">
              <img src={review.img} alt="" className="size-24 object-cover grayscale" />
              <figcaption className="text-lg font-bold">{review.name}</figcaption>
              <Stars />
              <blockquote className="text-base leading-relaxed">{review.text}</blockquote>
            </figure>
          </FadeinSection>
        ))}
      </div>
    </section>
  )
}

export default ReviewSection

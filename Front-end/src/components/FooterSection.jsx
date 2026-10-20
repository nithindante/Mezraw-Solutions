import React from 'react'
import { Link } from 'react-router-dom'

const links = [
  { name: 'Fresh', path: '/fresh' },
  { name: 'Dehydrated Vegetables', path: '/dehydrated-vegetables' },
  { name: 'Spices', path: '/spices' },
  { name: 'Processed', path: '/processed' },
  { name: 'Brands', path: '/brands' },
  { name: 'About us', path: '/about' },
  { name: 'Contact us', path: '/contact' },
];

const linkStyles = 'text-white/90 no-underline transition-colors duration-150 ease-out [@media(hover:hover)]:hover:text-brand-light';

function FooterSection() {
  return (
    <footer className='bg-header px-5 pb-8 pt-14 text-white sm:px-8'>
      <div className='mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_1fr_1fr]'>
        <div className='flex flex-col gap-3'>
          <span className='font-display text-xl font-bold'>Mezraw Solutions</span>
          <p className='max-w-xs text-sm leading-relaxed text-white/80'>7/1627, Crasent House, Pereppadam Road, Vennala, Kochi, Ernakulam, Kerala, 682028</p>
        </div>
        <nav aria-label='Footer' className='flex flex-col gap-2 text-sm'>
          {links.map((item) => (
            <Link key={item.path} to={item.path} className={linkStyles}>{item.name}</Link>
          ))}
        </nav>
        <div className='flex flex-col gap-2 text-sm'>
          <a href='mailto:info@pvventures.in' className={linkStyles}>info@pvventures.in</a>
          <a href='tel:+919080906366' className={linkStyles}>+91 9080906366</a>
          <a href='tel:+917012013993' className={linkStyles}>+91 7012013993</a>
          <p className='mt-2 text-white/80'>Mon-Fri 9:00-18:00, Sat 9:00-16:00</p>
        </div>
      </div>
      <p className='mx-auto mt-12 max-w-7xl text-sm leading-relaxed text-white/80'>Copyright © 2025 PV VENTURES. All Rights Reserved. Reproduction of any materials from the site is strictly forbidden without permission.</p>
    </footer>
  )
}

export default FooterSection

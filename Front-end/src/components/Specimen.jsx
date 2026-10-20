import React from 'react'

const tones = ['bg-tile-1', 'bg-tile-2', 'bg-tile-3', 'bg-tile-4'];

// One product photograph on a flat colour tile. `index` rotates the tile colour.
function Specimen({ src, alt, index = 0, className = '' }) {
  return (
    <div className={`overflow-hidden rounded-xl ${tones[index % tones.length]} ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="size-full object-cover mix-blend-multiply transition-transform duration-500 ease-out-strong [@media(hover:hover)]:group-hover:scale-105"
      />
    </div>
  )
}

export default Specimen

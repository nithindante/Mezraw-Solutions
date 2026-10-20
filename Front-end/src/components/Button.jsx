import React from 'react'

export const buttonStyles = `
  inline-flex items-center justify-center min-h-11 rounded-full bg-ink px-8 py-2.5
  text-sm font-semibold uppercase text-white cursor-pointer
  transition-[transform,background-color] duration-150 ease-out-strong
  active:scale-[0.97] [@media(hover:hover)]:hover:bg-brand
`;

function Button({ children, className = '', ...props }) {
  return (
    <button type="button" className={`${buttonStyles} ${className}`} {...props}>
      {children}
    </button>
  )
}

export default Button

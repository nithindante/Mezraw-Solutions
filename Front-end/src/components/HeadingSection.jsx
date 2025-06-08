import React from 'react'
import '../styles/HeadingSection.css' 
import CompanyIcon from '../assets/company.svg'
import FadeinSection from './FadeinSection';
function HeadingSection() {
  return (
    <div className='main-heading flex p-[5rem] items-center justify-center gap-x-16 flex-col lg:flex-row'>
        <FadeinSection><h1 className='text-[64px] text-white font-sans !font-black
'>Pioneering Progress Powered by Trust</h1></FadeinSection>
  <FadeinSection><img src={CompanyIcon} alt='Atlassian Logo' className='w-[148px] h-[148px] mt-4 mb-4' /></FadeinSection>
        
    </div>
  )
}

export default HeadingSection
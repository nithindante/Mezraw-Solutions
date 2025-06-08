import React from 'react'
import DogApi from '../assets/apidog.svg'
import PerplexityIcon from '../assets/perplexity.svg'
import SliDevIcon from '../assets/slidev.svg'
import '../styles/MoreSection.css'
import FadeInSection from './FadeinSection'
function MoreSection() {
    return (
        <div>
            <FadeInSection>            <h2 className='text-center !text-[58px] !font-bold' style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif' }}>VERSATILE VERTICALS
            </h2></FadeInSection>

            <div className='flex-col lg:flex-row justify-center items-center gap-4 flex p-10'>
                <FadeInSection>
                <div className='flex flex-col items-center justify-center gap-10 items-div'>
                    <img src={DogApi} alt='Placeholder' className='w-[150px] h-[150px]' />
                    <button className='
        bg-black
        text-white
  uppercase 
  py-2 px-6 
  !rounded-lg
  transition-all 
  duration-300 
  hover:!bg-white 
  hover:!text-black
  focus:outline-none
  '>Know More</button>
                </div>
                </FadeInSection>
                <FadeInSection>
                                <div className='flex flex-col items-center justify-center gap-10 items-div'>
                                    <img src={SliDevIcon} alt='Placeholder' className='w-[150px] h-[150px]' />
                    
                    <button className='
        bg-black
        text-white
  uppercase 
  py-2 px-6 
  !rounded-lg
  transition-all 
  duration-300 
  hover:!bg-white 
  hover:!text-black
  focus:outline-none
  '>Know More</button>
                </div>
                </FadeInSection>
                <FadeInSection>
                              <div className='flex flex-col items-center justify-center gap-10 items-div'>
                    <img src={DogApi} alt='Placeholder' className='w-[150px] h-[150px]' />
                    <button className='
        bg-black
        text-white
  uppercase 
  py-2 px-6 
  !rounded-lg
  transition-all 
  duration-300 
  hover:!bg-white 
  hover:!text-black
  focus:outline-none
  '>Know More</button>
                </div>
                </FadeInSection>
            </div>
        </div>
    )
}

export default MoreSection
import React from 'react'
import '../styles/AboutUs.css'; 
import { Fade } from 'react-bootstrap';
import FadeInSection from './FadeinSection';
function AboutUs() {
  return (
    <div className='flex flex-col items-center justify-center gap-4 p-10 flex-a'>
      <FadeInSection><h2 className='!text-[48px] !font-black' style={{fontFamily:'monospace'}}>About Us</h2></FadeInSection>
         <FadeInSection>
        <p className='max-w-[500px] font-[550]text-lg tracking-wide' style={{fontFamily:'monospace'}}>Ever feel like you're searching for that crucial element, the one that ties everything together and elevates your operations to the next level? At PV VENTURES, we understand that feeling. We've built our foundation on being precisely that the <strong className='!font-extrabold'>missing puzzle piece your business needs to thrive.</strong></p>
      </FadeInSection>
      <FadeInSection>
<button type="button" className="        bg-black
        text-white
  uppercase 
  py-3 px-10 
  !rounded-3xl
  transition-all 
  duration-300 
  hover:!bg-white 
  hover:!text-black
  focus:outline-none">Know More</button>
</FadeInSection>
    </div>
  )
}

export default AboutUs



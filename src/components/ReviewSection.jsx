import React from 'react'
import '../styles/ReviewSection.css'
import manIcon from '../assets/man.jpg'
import girlIcon from '../assets/girl.jpg'
import FadeinSection from './FadeinSection'
function ReviewSection() {
  return (
<div className="relative review-section">
  {/* Background with image */}
  <div className="absolute inset-0 bg-[url('../assets/wallpaper.avif')] bg-cover bg-center"></div>

  {/* Dark overlay on top of background */}
  <div className="absolute inset-0 bg-black/70"></div>

  {/* Your content on top of overlay */}
  <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8 px-4 py-16">
    <FadeinSection>
    <div className="flex flex-col items-center text-center gap-4 max-w-md mx-auto text-white">
      <h6 className="text-2xl">★★★★★</h6>
      <p>We have been their customer for over 2 years now. PV Ventures has changed our quality benchmark for vendors.</p>
      <img src={manIcon} className="w-12 h-12 rounded-full" />
      <p className="font-medium">Samson</p>
    </div>
</FadeinSection>
<FadeinSection>
    <div className="flex flex-col items-center text-center gap-4 max-w-md mx-auto text-white">
      <h6 className="text-2xl">★★★★★</h6>
      <p>Trust and Consistency are the first two words that come to mind when I talk about PVV. They have been helping us with consistent quality and pricing.</p>
      <img src={girlIcon} className="w-12 h-12 rounded-full" />
      <p className="font-medium">Lavanya</p>
    </div>
    </FadeinSection>
  </div>
</div>
  )
}

export default ReviewSection
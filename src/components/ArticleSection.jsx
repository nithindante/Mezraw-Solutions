import React from 'react'
import munnarIcon from '../assets/munnar.jpg'
import '../styles/ArticleSection.css'
import { Fade } from 'react-bootstrap'
import FadeinSection from './FadeinSection'
function ArticleSection() {
  return (
    <div className='flex flex-col lg:flex-row px-48 py-16 gap-8'>
        <div className='flex flex-col items-start justify-center gap-8'>
            <FadeinSection>
            <img src={munnarIcon}></img>
            </FadeinSection>
            <FadeinSection>
            <h3 className='text-2xl'>The future of Organic farming in India, A Decadal outlook</h3>
            </FadeinSection>
            <FadeinSection>
            <div className='flex gap-2'>
                <p>5/31/2025-</p>
                <p>2 min Read</p>
            </div>
            </FadeinSection>
        </div>
        <div className='flex flex-col items-start justify-center gap-8'>
            <FadeinSection>
            <img src={munnarIcon}></img>
            </FadeinSection>
            <FadeinSection>
            <h3 className='text-2xl'>The future of Organic farming in India, A Decadal outlook</h3>
            </FadeinSection>
            <FadeinSection>
            <div className='flex gap-2'>
                <p>5/31/2025-</p>
                <p>2 min Read</p>
            </div>
            </FadeinSection>
        </div>
        <div className='flex flex-col items-start justify-center gap-8'>
            <FadeinSection>
            <img src={munnarIcon}></img>
            </FadeinSection>
            <FadeinSection>
            <h3 className='text-2xl'>The future of Organic farming in India, A Decadal outlook</h3>
            </FadeinSection>
            <FadeinSection>
            <div className='flex gap-2'>
                <p>5/31/2025-</p>
                <p>2 min Read</p>
            </div>
            </FadeinSection></div>
        <div className='flex flex-col items-start justify-center gap-8'>
            <FadeinSection>
            <img src={munnarIcon}></img>
            </FadeinSection>
            <FadeinSection>
            <h3 className='text-2xl'>The future of Organic farming in India, A Decadal outlook</h3>
            </FadeinSection>
            <FadeinSection>
            <div className='flex gap-2'>
                <p>5/31/2025-</p>
                <p>2 min Read</p>
            </div>
            </FadeinSection>
        </div>
    </div>
  )
}

export default ArticleSection
import React from 'react'
import HeadingSection from './HeadingSection'
import AboutUs from './AboutUs'
import MoreSection from './MoreSection'
import ReviewSection from './ReviewSection'
import ArticleSection from './ArticleSection'
import FooterSection from './FooterSection'
function MainSection() {
  return (
    <div >
        <HeadingSection></HeadingSection>
        <AboutUs></AboutUs>
        <MoreSection></MoreSection>
        <ReviewSection></ReviewSection>
        <ArticleSection></ArticleSection>
    </div>
  )
}

export default MainSection
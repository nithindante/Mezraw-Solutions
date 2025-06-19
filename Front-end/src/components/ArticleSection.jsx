import React from 'react';
import munnarIcon from '../assets/munnar.jpg';
import '../styles/ArticleSection.css';
import FadeinSection from './FadeinSection';

function ArticleSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-8 lg:px-24 py-8 sm:py-12 lg:py-16">
      {[...Array(4)].map((_, index) => (
        <div key={index} className="flex flex-col items-start justify-center gap-4 sm:gap-6 lg:gap-8">
          <FadeinSection>
            <img src={munnarIcon} alt="Article thumbnail" className="w-full h-auto object-cover rounded-md" />
          </FadeinSection>
          <FadeinSection>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold">
              The Future of Organic Farming in India: A Decadal Outlook
            </h3>
          </FadeinSection>
          <FadeinSection>
            <div className="flex gap-2 text-sm sm:text-base">
              <p>5/31/2025 -</p>
              <p>2 min Read</p>
            </div>
          </FadeinSection>
        </div>
      ))}
    </div>
  );
}

export default ArticleSection;
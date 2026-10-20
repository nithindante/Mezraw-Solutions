import React from 'react';
import munnarIcon from '../assets/munnar.jpg';
import FadeinSection from './FadeinSection';

function ArticleSection() {
  return (
    <section className="mx-auto grid max-w-7xl gap-x-6 gap-y-10 px-5 py-16 sm:grid-cols-2 sm:px-8 sm:py-20 lg:grid-cols-4">
      {[...Array(4)].map((_, index) => (
        <FadeinSection key={index} delay={index * 0.06}>
          <article className="flex flex-col gap-4">
            <img src={munnarIcon} alt="Article thumbnail" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover" />
            <h3 className="text-lg font-bold leading-snug lg:text-xl">
              The Future of Organic Farming in India: A Decadal Outlook
            </h3>
            <div className="flex gap-2 text-sm text-muted sm:text-base">
              <p>5/31/2025 -</p>
              <p>2 min Read</p>
            </div>
          </article>
        </FadeinSection>
      ))}
    </section>
  );
}

export default ArticleSection;

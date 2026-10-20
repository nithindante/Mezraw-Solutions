import React from "react";
import FadeinSection from "./FadeinSection";
import curryLeavesImg from "../assets/curryleaves.avif";
import gingerPowderImg from "../assets/gingerpowder.avif";

// Placeholder page: reuses the two powder products already listed under Dehydrated Vegetables.
const processedItems = [
  {
    img: curryLeavesImg,
    title: "Curry Leaves Powder",
    desc: "Our dehydrated curry leaves powder is crafted from the finest hand-picked curry leaves. Through a precise dehydration and grinding process, we ensure the preservation of its natural, vibrant green color and distinctive aromatic flavor."
  },
  {
    img: gingerPowderImg,
    title: "Ginger Powder",
    desc: "Our dry ginger powder is crafted from carefully selected, high-quality ginger roots, meticulously processed to ensure its fine texture and potent aroma. It is an essential pantry staple, perfect for adding depth to baking, beverages, and traditional remedies."
  }
];

const Processed = () => (
  <div className="flex min-h-screen w-full flex-col items-center bg-paper px-5 pb-20 sm:px-8">
    <h1 className="mx-auto max-w-4xl py-14 text-center text-hero font-extrabold sm:py-20">Processed</h1>
    <div className="grid w-full max-w-4xl gap-x-8 gap-y-14 sm:grid-cols-2">
      {processedItems.map((item, idx) => (
        <FadeinSection key={idx} delay={idx * 0.06}>
          <div className="flex flex-col gap-2">
            <img src={item.img} alt={item.title} loading="lazy" className="mb-4 aspect-[4/3] w-full rounded-xl object-cover" />
            <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
            <p className="text-base leading-relaxed text-muted">{item.desc}</p>
          </div>
        </FadeinSection>
      ))}
    </div>
  </div>
);

export default Processed;

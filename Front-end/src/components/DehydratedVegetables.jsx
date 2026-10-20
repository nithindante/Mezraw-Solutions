import React from "react";
import FadeinSection from "./FadeinSection";
import gingerDryImg from "../assets/dryginger.avif";
import curryLeavesImg from "../assets/curryleaves.avif";
import spinachFlakesImg from "../assets/dryspinach.avif";
import curryPowderImg from "../assets/curryleaves.avif";
import mintLeavesImg from "../assets/drymint.avif";
import gingerPowderImg from "../assets/gingerpowder.avif";

const dehydratedItems = [
  {
    img: gingerDryImg,
    title: "Dehydrated Ginger-Rigodi/Himachal",
    desc: "We specialize in sourcing premium dry dehydrated ginger to meet the diverse needs of our clients. Whether you require specific varieties, particular processing forms (powdered, or cut), or adherence to unique budget considerations, we leverage our extensive network and expertise to deliver precisely what you need."
  },
  {
    img: curryLeavesImg,
    title: "Dehydrated Curry Leaves",
    desc: "Our dehydrated curry leaves are carefully selected to maintain their vibrant green color and rich, authentic aroma. Through a meticulous dehydration process, we lock in their distinct flavor, ensuring that every leaf delivers the same high quality and freshness as a freshly picked one. Perfect for adding an exotic touch to curries, stews, and savory dishes, our dehydrated curry leaves are a convenient and essential addition to any kitchen."
  },
  {
    img: spinachFlakesImg,
    title: "Dehydrated Spinach Flakes",
    desc: "Our spinach flakes are produced from the finest, freshest spinach, meticulously dried to preserve their natural, vibrant green color and inherent nutrients. We ensure a high quality product that retains the authentic, earthy flavor of fresh spinach, making it a convenient and wholesome addition to soups, stews, smoothies, and baked goods. Enjoy the goodness of spinach year-round with our premium flakes."
  },
  {
    img: curryPowderImg,
    title: "Curry Leaves Powder",
    desc: "Our dehydrated curry leaves powder is a testament to exceptional quality, crafted from the finest hand-picked curry leaves. Through a precise dehydration and grinding process, we ensure the preservation of its natural, vibrant green color and distinctive aromatic flavor. This powder delivers the authentic, slightly citrusy and nutty notes of fresh curry leaves, offering unparalleled convenience and a consistent, rich taste to your curries, seasonings, and dishes."
  },
  {
    img: mintLeavesImg,
    title: "Dehydrated Mint Leaves",
    desc: "Our dry mint leaves are carefully selected and gently dried to preserve their refreshing aroma and subtle, yet vibrant green color. We prioritize quality in every batch, ensuring that the characteristic cool, slightly peppery notes of fresh mint are retained. Perfect for invigorating teas, savory dishes, and sauces, our dry mint leaves offer authentic flavor and appearance."
  },
  {
    img: gingerPowderImg,
    title: "Ginger Powder",
    desc: "Our dry ginger powder is crafted from carefully selected, high-quality ginger roots, meticulously processed to ensure its fine texture and potent aroma. Retaining its characteristic pale yellow color, this powder offers a warm, spicy, and slightly sweet flavor that speaks to its superior quality. Its an essential pantry staple, perfect for adding depth to baking, beverages, and traditional remedies."
  }
];

const DehydratedVegetables = () => (
    <div className="flex min-h-screen w-full flex-col items-center bg-paper px-5 pb-20 sm:px-8">
    <h1 className="mx-auto max-w-4xl py-14 text-center text-hero font-extrabold sm:py-20">Naturally Fresh, Always</h1>
    <div className="grid w-full max-w-6xl gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
      {dehydratedItems.map((item, idx) => (
        <FadeinSection key={idx} delay={(idx % 3) * 0.06}>
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

export default DehydratedVegetables; 
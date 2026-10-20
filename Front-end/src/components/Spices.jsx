import React from "react";
import FadeinSection from "./FadeinSection";
import cardamomImg from "../assets/elachi.avif";
import cloveImg from "../assets/clove.avif";
import pepperImg from "../assets/pepper.avif";
import kudampuliImg from "../assets/puli.avif";

const spices = [
  {
    img: cardamomImg,
    title: "Green Cardamom/ Elaichi",
    desc: "Renowned for its vibrant aroma and distinctively warm, sweet, and slightly citrusy flavor, green cardamom is one of the highest quality spices among our specialized offerings. Perfect for enriching both sweet and savory dishes, this aromatic spice is the traditional element across the Indian and even modern culinary customs, adding a touch of exotic elegance to every bite."
  },
  {
    img: cloveImg,
    title: "Clove/ Laung",
    desc: "Our cloves are carefully selected for their high oil content, which culminates their intense, sweet peppery spice. Ideal for both culinary and aromatic applications, they are a staple in spice packets for enhancing savory dishes, imparting depth to baked goods, and for sweetly complementing beverages, adding a unique and inviting essence to every creation."
  },
  {
    img: pepperImg,
    title: "Black Pepper",
    desc: "Our black pepper is celebrated for its versatility, offering a sharp, woody and slightly spicy kick that elevates a wide range of dishes. From aromatic curry meals and hand-crafted street-side curry blends to fresh and crisp salads, you can expect quality seasoning, a nuanced and delightful multi-sensory experience, making it an indispensable staple in any kitchen."
  },
  {
    img: kudampuliImg,
    title: "Kudampuli",
    desc: "Kudampuli (also known as Malabar Tamarind) to our valued customers. Sourced from the black rounds shown in stores, our Kudampuli is naturally processed and dried to preserve its distinctive tartness and the flavor profile. This unique seasoning agent is an indispensable ingredient in South Indian cuisine, especially renowned for enhancing the taste of authentic fish curries and seafood preparations."
  }
];

const Spices = () => (
  <div className="flex min-h-screen w-full flex-col items-center bg-paper px-5 pb-20 sm:px-8">
    <h1 className="mx-auto max-w-4xl py-14 text-center text-hero font-extrabold sm:py-20">The Kerala Spice Boat</h1>
    <div className="flex w-full max-w-4xl flex-col gap-14">
      {spices.map((item, idx) => (
        <FadeinSection key={idx}>
          <div className="flex flex-col items-start gap-6 md:flex-row md:gap-8">
            <img src={item.img} alt={item.title} loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover md:aspect-auto md:h-56 md:w-72 md:shrink-0" />
            <div className="flex-1">
              <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
              <p className="text-base leading-relaxed text-muted">{item.desc}</p>
            </div>
          </div>
        </FadeinSection>
      ))}
    </div>
  </div>
);

export default Spices; 
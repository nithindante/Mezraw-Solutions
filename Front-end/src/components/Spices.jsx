import React from "react";
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
  <div className="w-full min-h-screen flex flex-col items-center bg-white pb-20">
    <h1 className="!text-[58px] text-9xl md:text-9xl font-extrabold text-center mt-16 mb-16 py-20">The Kerala Spice Boat</h1>
    <div className="w-full max-w-4xl flex flex-col gap-16 px-4 md:px-0">
      {spices.map((item, idx) => (
        <div key={idx} className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <img src={item.img} alt={item.title} className="w-full md:w-72 h-56 object-cover mb-4 md:mb-0" />
          <div className="flex-1">
            <h3 className="font-extrabold text-lg md:text-xl mb-2 text-left">{item.title}</h3>
            <div className="text-base text-black leading-snug text-left">{item.desc}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Spices; 
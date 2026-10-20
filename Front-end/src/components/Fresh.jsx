import React from 'react';
import FadeinSection from './FadeinSection';
import gingerImg from '../assets/ginger.jpg';
import bellPepperImg from '../assets/capsicum.jpg';
import basilImg from '../assets/basilleaves.jpg';
import celeryImg from '../assets/calary.jpg';
import sweetPotatoImg from '../assets/sweet.jpg';
import spinachImg from '../assets/spinach.jpg';

const freshItems = [
  {
    img: gingerImg,
    title: "Fresh Ginger/ Adrakk/ Shunti",
    desc: 'Our commitment is to provide you with high-quality ginger, sourced responsibly and efficiently, to perfectly match your specifications. Partner with us for a reliable and tailored supply of this extraordinary spice.'
  },
  {
    img: bellPepperImg,
    title: "Bell Peppers/ Capsicums",
    desc: "Who can resist the vibrant allure of bell peppers (or capsicum, as they're known in many parts of the world)? These crunchy, sweet, and wonderfully versatile fruits bring a delightful pop of color and a mild, refreshing flavor to countless dishes."
  },
  {
    img: basilImg,
    title: "Italian Basil Leaves",
    desc: "Ah, Italian Basil! Just a whiff of its sweet, peppery, and slightly minty aroma transports you straight to sun-drenched Mediterranean gardens. These iconic vibrant green leaves are more than just a herb; it's an indispensable finishing touch for countless Italian dishes, from pizzas to pasta."
  },
  {
    img: celeryImg,
    title: "Celery",
    desc: "Craving that satisfying snap and refreshing, subtly savory flavor? That's the wonderful world of celery! More than just a healthy snack, this versatile vegetable is the unsung hero of so many dishes. It adds essential crunch to salads, builds a flavorful base for soups and stews."
  },
  {
    img: sweetPotatoImg,
    title: "Sweet Potatoes",
    desc: "Get ready to fall in love with the humble, yet incredibly versatile, sweet potato! These vibrant tubers are a true culinary delight, offering a natural sweetness and creamy texture that makes them perfect for everything from savory roasted dishes and comforting casseroles to delicious fries and even baked goods. Packed with goodness and bursting with flavor, they're a superstar on any plate!"
  },
  {
    img: spinachImg,
    title: "Spinach/ Palak",
    desc: "Spinach is a true superstar in the kitchen and for your well-being! From vibrant salads and creamy purees to hearty stir-fries and smoothies, its mild, earthy flavor and tender leaves make it incredibly versatile. Plus, it's famous for being a nutrient-packed champion!"
  }
];

const Fresh = () => (
  <div className="flex min-h-screen w-full flex-col items-center bg-paper px-5 pb-20 sm:px-8">
    <h1 className="mx-auto max-w-4xl py-14 text-center text-hero font-extrabold sm:py-20">Naturally Fresh, Always</h1>
    <div className="grid w-full max-w-6xl gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
      {freshItems.map((item, idx) => (
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

export default Fresh;
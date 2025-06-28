import React from 'react';
import '../styles/AboutUs.css';
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
  <div className="w-full min-h-screen flex flex-col items-center bg-white pb-20">
    <h1 className="!text-[58px] text-9xl md:text-9xl font-extrabold text-center mt-16 mb-16 py-20">Naturally Fresh, Always</h1>
    <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-12 px-4 md:px-0">
      {freshItems.map((item, idx) => (
        <div key={idx} className="flex flex-col gap-2">
          <img src={item.img} alt={item.title} className="w-full h-64 object-cover mb-4" />
          <h3 className="!text-[20px] font-extrabold mb-2 text-left" style={{ fontWeight: '900' }}>
            {item.title}
          </h3>
          <div className="text-base text-black leading-snug text-left">{item.desc}</div>
        </div>
      ))}
    </div>
  </div>
);

export default Fresh;
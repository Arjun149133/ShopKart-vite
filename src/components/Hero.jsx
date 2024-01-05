import React from "react";
import { Link } from "react-router-dom";

import hero1 from "../assets2/hero1.webp";
import hero2 from "../assets2/hero2.webp";
import hero3 from "../assets2/hero3.webp";
import hero4 from "../assets2/hero4.webp";

const carouselImages = [hero1, hero2, hero3, hero4];

const Hero = () => {
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className=" max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
          ShopKart! A brand new way of Shopping
        </h1>
        <p className=" mt-8 max-w-xl text-lg leading-8">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem nulla
          sequi, facere perspiciatis aut molestias omnis debitis, quis
          consequuntur dicta ad exercitationem sit! Labore commodi voluptatem,
          totam minima dolores officia.
        </p>
        <div className=" mt-10">
          <Link to="products" className=" btn btn-primary">
            Our Products
          </Link>
        </div>
      </div>
      <div className=" hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box">
        {carouselImages.map((image, index) => {
          return (
            <div key={index} className=" carousel-item">
              <img
                src={image}
                alt=""
                className=" rounded-box h-full w-80 object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;

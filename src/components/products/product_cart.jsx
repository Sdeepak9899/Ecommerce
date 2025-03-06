/** @format */

'use client';

import { Key } from 'lucide-react';
import React from 'react';
import Slider from 'react-slick';
import { ArrowRight } from 'lucide-react';
import { Search } from 'lucide-react';
import { Heart, ArrowRightLeft } from 'lucide-react';

function MltipleItems() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  const Seller = [
    {
      imag1:
        'https://bemins.wpbingosite.com/wp-content/uploads/2020/12/products-1-1-600x820.jpg',
      imag2:
        'https://bemins.wpbingosite.com/wp-content/uploads/2020/12/products-2-1-600x820.jpg',
      name: '90s Chino Pant',
      price: '$50.00-$60.00',
      Key: 1,
    },
    {
      imag1:
        'https://bemins.wpbingosite.com/wp-content/uploads/2020/12/products-7-600x820.jpg',
      imag2:
        'https://bemins.wpbingosite.com/wp-content/uploads/2020/12/products-8-600x820.jpg',
      name: 'Angie Skirt',
      price: '$100.00-$120.00',
      Key: 2,
    },
    {
      imag1:
        'https://bemins.wpbingosite.com/wp-content/uploads/2019/04/products-11-1-600x820.jpg',
      imag2:
        'https://bemins.wpbingosite.com/wp-content/uploads/2019/04/products-12-1-600x820.jpg',
      name: 'Audience Satin Dress',
      price: '$148.00-$150.00',
      Key: 3,
    },
    {
      imag1:
        'https://bemins.wpbingosite.com/wp-content/uploads/2023/12/products-15-1-600x820.jpg',
      imag2:
        'https://bemins.wpbingosite.com/wp-content/uploads/2023/12/products-16-1-600x820.jpg',
      name: 'Band Straw Hat',
      price: '$$15.99-$20.00',
      Key: 4,
    },
    {
      imag1:
        'https://bemins.wpbingosite.com/wp-content/uploads/2020/12/products-19-600x820.jpg',
      imag2:
        'https://bemins.wpbingosite.com/wp-content/uploads/2020/12/products-20-600x820.jpg',
      name: 'Black Gold',
      price: '$116.00-$200.00',
      Key: 5,
    },
  ];

  return (
    <div className="slider-container max-w-full mx-auto ">
      <Slider {...settings}>
        {Seller.map((item) => (
          <div key={item.Key} className="">
            <div className="h-[600px] bg-gray-1s00 shadow-lg relative group">
              <img
                src={item.imag1}
                alt={item.name}
                className="w-full object-cover h-full absolute top-0 group-hover:opacity-0 rounded-2xl"
              />
              <img
                src={item.imag2}
                alt={item.name}
                className="w-full h-full object-cover group-hover:opacity-100 rounded-2xl"
              />
              <div className="flex absolute bottom-3 w-full justify-center gap-8 px-4">
                <ArrowRight className="w-8 h-8 bg-white rounded-full border p-1 opacity-0 group-hover:opacity-100 transform translate-y-3 group-hover:translate-y-0 transition-all duration-300 ease-in-out hover:bg-cyan-400 hover:text-white" />
                <Search className="w-8 h-8 bg-white rounded-full border p-1 opacity-0 group-hover:opacity-100 transform translate-y-3 group-hover:translate-y-0 transition-all duration-300 ease-in-out delay-100 hover:bg-cyan-400 hover:text-white" />
                <Heart className="w-8 h-8 bg-white rounded-full border p-1 opacity-0 group-hover:opacity-100 transform translate-y-3 group-hover:translate-y-0 transition-all duration-300 ease-in-out delay-150 hover:bg-cyan-400 hover:text-white" />
                <ArrowRightLeft className="w-8 h-8 bg-white rounded-full border p-1 opacity-0 group-hover:opacity-100 transform translate-y-3 group-hover:translate-y-0 transition-all duration-300 ease-in-out delay-200 hover:bg-cyan-400 hover:text-white" />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MltipleItems;

/** @format */
'use client';

import React from 'react';
import Slider from 'react-slick';

function SimpleSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const testimonials = [
    {
      key: '1',
      img: 'https://bemins.wpbingosite.com/wp-content/uploads/2022/08/tes-3-720x484-1.jpg',
      name: 'Linda Maria',
      profession: 'Designer',
      about:
        'Your commitment to quality and customer satisfaction has been evident in every interaction. I value our partnership and look forward to continuing our successful...',
    },
    {
      key: '2',
      img: 'https://bemins.wpbingosite.com/wp-content/uploads/2020/06/tes-2.jpg',
      name: 'Ann Smith',
      profession: 'CEO & Founder',
      about:
        '“A great company to buy from. Excellent quality products at good value. Delivery is efficient and quick.”',
    },
    {
      key: '3',
      img: 'https://bemins.wpbingosite.com/wp-content/uploads/2019/12/Rectangle-1006.jpg',
      name: 'Anana',
      profession: 'Photographer',
      about:
        '5-star rating 100%. So amazing and helpful. Stress-free and fun.Eileen was amazing. So wonderful.',
    },
    {
      key: '4',
      img: 'https://bemins.wpbingosite.com/wp-content/uploads/2019/02/tes-3.jpg',
      name: 'Linda',
      profession: 'Photographer',
      about:
        '“I look forward to future transactions with your company and will gladly recommend your services to others.”',
    },
  ];
  return (
    <div className="slider-container w-full mt-12 flex flex-col gap-7 ">
      <h1 className="text-center text-5xl font-semibold">Testimonials</h1>
      <Slider {...settings} className="flex  h-full">
        {testimonials.map((item) => (
          <div key={item.key} className="slider-item gap-20  h-[500px]">
            <div className="ml-20  -rotate-45 rounded-[50%] overflow-hidden ">
              <img
                src={item.img}
                alt={item.name}
                className="object-cover rotate-45 rounded scale-150 w-full h-full "
              />
            </div>
            <div className="flex flex-col gap-4 text-xl font-semibold ">
              <p>{item.about}</p>
              <p>{item.name}</p>
              <p className="text-gray-300">{item.profession}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SimpleSlider;

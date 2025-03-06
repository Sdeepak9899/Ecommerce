/** @format */

'use client';

import { Key } from 'lucide-react';
import Image from 'next/image';
import Slider from 'react-slick';
import styles from './slider.module.css';

function VerticalMode() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToScroll: 1,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    // beforeChange: function (currentSlide, nextSlide) {
    //   console.log('before change', currentSlide, nextSlide);
    // },
    // afterChange: function (currentSlide) {
    //   console.log('after change', currentSlide);
    // },
  };

  const sliderData = [
    {
      title: ['Unveiling', "This Season's", 'Fashion'],
      description: 'Shop now',
      imageSrc:
        "bg-[url('https://bemins.wpbingosite.com/wp-content/uploads/2024/02/slider-1.jpg')]",
      alt: 'Fashion Model',
      Key: 1,
    },
    {
      title: ['This is A', 'Long Open', 'Robe'],
      description: 'Shop now',
      imageSrc:
        "bg-[url('https://bemins.wpbingosite.com/wp-content/uploads/2024/02/slider-2.jpg')]",
      alt: 'Fashion Model 1',
      Key: 2,
    },
    {
      title: ['Epitome', " Of The Big's 2", 'Sweater'],
      description: 'Shop now',
      imageSrc:
        "bg-[url('//bemins.wpbingosite.com/wp-content/uploads/2024/02/slider-3.jpg')]",
      alt: 'Fashion Model 2',
      Key: 3,
    },
  ];

  return (
    <div
      className={[
        'slider-container flex w-full overflow-hidden bg-gray-100',
        styles.slider_container,
      ].join(' ')}
    >
      <Slider {...settings} className="flex w-full">
        {sliderData?.map((item) => (
          <div
            key={item.Key}
            className={[
              `slider-item max-w-7xl mx-auto bg-contain bg-no-repeat bg-right`,
              styles.slider_container,
              item.imageSrc,
            ].join(' ')}
          >
            <div className="flex flex-col">
              {item.title.map((line, idx) => (
                <h2
                  key={idx}
                  className={[
                    'plus-jakarta-sans font-bold text-7xl',
                    'last-of-type:text-white',
                    styles.slider_title,
                  ].join(' ')}
                >
                  {line}
                </h2>
              ))}
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default VerticalMode;

/** @format */
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

const sliderData = [
  {
    aimag1:
      'https://bemins.wpbingosite.com/wp-content/uploads/2020/12/products-19-600x820.jpg',
    bimag2:
      'https://bemins.wpbingosite.com/wp-content/uploads/2020/12/products-20-600x820.jpg',
    name: 'VEJA Venturi Trainers',
    price: '$250.00',
    price2: '',
    order: '',
    hot: 'Hot',
    discount: '',
    pages: '',
  },
  {
    aimag1:
      'https://bemins.wpbingosite.com/wp-content/uploads/2019/04/products-11-1-600x820.jpg',
    bimag2:
      'https://bemins.wpbingosite.com/wp-content/uploads/2019/04/products-12-1-600x820.jpg',
    name: 'Audience Satin Dress',
    price: '$148.00',
    price2: '$150.00',
    order: '',
    hot: 'Hot',
    discount: '-26%',
    pages: '',
  },
  {
    aimag1:
      'https://bemins.wpbingosite.com/wp-content/uploads/2018/10/360-600x820.jpg',
    bimag2:
      'https://bemins.wpbingosite.com/wp-content/uploads/2018/10/360-1-600x820.jpg',
    name: 'Black Glod',
    price: '$116.00',
    price2: '$200.00',
    order: 'Pre Order',
    hot: 'Hot',
    discount: '-42%',
    pages: '',
  },
  {
    aimag1:
      'https://bemins.wpbingosite.com/wp-content/uploads/2022/08/products-67-1-600x820.jpg',
    bimag2:
      'https://bemins.wpbingosite.com/wp-content/uploads/2022/08/products-68-1-600x820.jpg',
    name: 'Phoebe Mini Bag',
    price: '$48.00',
    price2: '',
    order: '',
    hot: '',
    discount: '',
    pages: '',
  },
  {
    aimag1:
      'https://bemins.wpbingosite.com/wp-content/uploads/2020/12/products-21-600x820.jpg',
    bimag2:
      'https://bemins.wpbingosite.com/wp-content/uploads/2020/12/products-22-600x820.jpg',
    name: 'Caramel Midbight',
    price: '$50.00',
    price2: '',
    order: '',
    hot: '',
    discount: '',
    pages: '',
  },
];

const ResponsiveSlider = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {sliderData.map((item, index) => (
          <div key={index} className="slider-item">
            <div className="image-container">
              <Image
                src={item.aimag1}
                alt={item.name}
                width={300}
                height={400}
                className="primary-image"
              />
              <Image
                src={item.bimag2}
                alt={`${item.name} alternate`}
                width={300}
                height={400}
                className="secondary-image"
              />
            </div>
            <div className="product-details">
              <h3>{item.name}</h3>
              <p className="price">
                {item.price}
                {item.price2 && (
                  <span className="original-price">{item.price2}</span>
                )}
              </p>
              {item.discount && (
                <span className="discount">{item.discount}</span>
              )}
              {item.hot && <span className="hot">{item.hot}</span>}
              {item.order && <span className="order-status">{item.order}</span>}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ResponsiveSlider;

/** @format */

'use client';

import { useState } from 'react';
import Link from 'next/link';

// Main component
const Product_img_sildbar = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  const arr = [
    {
      image:
        'https://bemins.wpbingosite.com/wp-content/uploads/2022/08/products-74.jpg',
    },
    {
      image:
        'https://bemins.wpbingosite.com/wp-content/uploads/2022/08/products-75-1.jpg',
    },
    {
      image:
        'https://bemins.wpbingosite.com/wp-content/uploads/2022/08/products-76-1.jpg',
    },
    {
      image:
        'https://bemins.wpbingosite.com/wp-content/uploads/2022/08/products-77-1.jpg',
    },
  ];

  // Size options
  const sizes = ['S', 'M', 'L', 'XL', '2XL'];

  const handleImageClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const handleSizeSelect = (index) => {
    setSelectedSize(index);
  };

  return (
    <div className="flex w-full h-[120vh] justify-between m-2 ">
      {/* Image Selection Section */}
      <div className="overflow-hidden">
        {/* Image Selection Section */}
        <div className="flex w-2/4 h-[10vh] max-xl:h-[60vh] justify-between">
          <div className="block w-1/4 relative">
            <div className="flex flex-col gap-2  max-h-[100vh] w-28">
              {arr.map((item, index) => (
                <div key={index} className="">
                  <Link
                    href=""
                    className="relative w-20 h-20 rounded-md overflow-hidden" // Image size maintained
                    onClick={() => handleImageClick(index)}
                  >
                    <img
                      src={item.image}
                      alt={`Image ${index}`}
                      className={`w-28 h-40 rounded-md object-cover  ${
                        activeIndex === index
                          ? 'border-2 border-black'
                          : 'border-2 border-transparent'
                      }`}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Image Display */}
          {activeIndex !== null && (
            <div className="absolute  left-[14%] max-xl:left-[20%] max-lg:left-[13%] top-32 transform  max-w-[60vw] h-[800px] overflow-hidden bg-slate-100 rounded-md shadow-lg">
              <img
                src={arr[activeIndex].image}
                alt={`Selected Image `}
                className="w-full h-full  object-cover rounded-md"
              />
            </div>
          )}
        </div>
      </div>

      {/* Product Details Section */}
      <div className="w-2/5 p-4 flex flex-col gap-4">
        <p className="text-lg font-bold">SoWhat</p>
        <p className="text-4xl font-semibold">
          ALLYOUCANFIT X CAMILLE SPORTS BRA
        </p>
        <p className="text-xl ">€54,00</p>
        <div className="mt-4 flex gap-4 items-center">
          <p className="font-semibold text-2xl">Size</p>
          <p className="text-sm  text-red-500">
            Click here to view the size guide
          </p>
        </div>

        {/* Size Selection */}
        <div className="flex flex-col gap-4">
          <p className="font-semibold text-lg">Select Size</p>
          <div className="flex gap-4">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => handleSizeSelect(size)}
                className={`px-4 py-2 border rounded-md transition-all ${
                  selectedSize === size
                    ? ' border-blue-500'
                    : 'bg-white text-black border-gray-400'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex gap-4 items-center border-b-8 border-yellow-300">
            <div className="font-semibold text-2xl">Stock</div>
            <div className=" text-md">In stock, ready to be shipped</div>
          </div>
          <div className="flex flex-col gap-4 font-semibold text-xl ">
            <p>BUY 2 FOR 10% OFF. </p>
            <p>BUY 3 FOR 20% OFF.</p>
          </div>
        </div>
        <div className="flex items-center justify-center border py-2 px-2 rounded-3xl hover:bg-black hover:text-white ">
          <button>ADD TO CART</button>
        </div>
        <div>
          <p className="leading-6 font-semibold">
            The Allyoucanfit x Camille Sports Bra is an easy and feminine way to
            stay active. Its luxe velvet straps and striped neon waistband keep
            you feeling comfy and looking fashionably chic. It's sustainable and
            extra stretchable, making it perfect for yoga, pilates and other low
            to medium intensity workouts. Get ready to look good and feel great!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product_img_sildbar;

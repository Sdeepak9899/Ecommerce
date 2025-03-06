/** @format */

import exp from 'constants';
import Link from 'next/link';
import { it } from 'node:test';

const Cart = () => {
  const photos = [
    {
      name: 'Spring Collection',
      photo:
        'https://bemins.wpbingosite.com/wp-content/uploads/2023/11/banner.jpg',
    },
    {
      name: '30% off all order',
      photo:
        'https://bemins.wpbingosite.com/wp-content/uploads/2023/11/banner-1.jpg',
    },
    {
      name: 'Must - Have Style',
      photo:
        'https://bemins.wpbingosite.com/wp-content/uploads/2023/11/banner-2.jpg',
    },
  ];
  return (
    <div className="m-5">
      <ul className="flex justify-center ">
        {photos.map((item, index) => (
          <li key={index} className="relative overflow-hidden group">
            <div className=" m-4 w-[420px] h-[500px] shadow-lg rounded-3xl overflow-hidden  ">
              <img
                src={item.photo}
                alt={item.name}
                className="w-full h-full rounded-3xl object-cover   shadow-lg group-hover:scale-110 ease-in-out duration-1000"
              />
            </div>
            <div
              className="items-center absolute translate(-50%, -50%)  left-[30%]
            top-[65%] "
            >
              <p className="text-2xl text-white font-semibold">{item.name}</p>
              <Link href="/">
                <button className=" m-4 bg-white  rounded-xl hover:bg-cyan-400 hover:text-white text-lg w-32 h-12">
                  Shop Now
                </button>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;

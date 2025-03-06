/** @format */

import Link from 'next/link';

const Product_detais = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-8 justify-center ">
        <Link
          href="/"
          className="text-xl py-2 px-2 bg-cyan-400 text-white rounded-2xl"
        >
          <span>Description</span>
        </Link>
        <Link
          href="/"
          className="text-xl py-2 px-2 bg-gray-100 hover:bg-cyan-400 hover:text-white rounded-2xl"
        >
          <span> Additional information </span>
        </Link>
        <Link
          href="/"
          className="text-xl py-2 px-2 bg-gray-100 hover:bg-cyan-400 hover:text-white  rounded-2xl"
        >
          <span> Reviews (0) </span>
        </Link>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
};

export default Product_detais;

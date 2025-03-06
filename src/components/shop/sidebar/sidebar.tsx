/** @format */
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronUp } from 'lucide-react';
import Colour from './color';
import Size from './size';
import Brands from './brand';
import Products from './feature';

const Categories = [
  {
    name: 'Bag',
    number: '(3)',
    path: '/',
    Childrens: [],
  },
  {
    name: 'Furniture',
    number: '(9)',
    path: '/',
    Childrens: [
      {
        titl: 'Chair',
        no: '(3)',
        to: '/',
      },
      {
        titl: 'Decor',
        no: '(6)',
        to: '/',
      },
    ],
  },
  {
    name: 'Glasses',
    number: '(3)',
    path: '/',
    Childrens: [],
  },
  {
    name: 'Jewelry',
    number: '(8)',
    path: '/',
    Childrens: [
      {
        titl: 'Earrings',
        no: '(3)',
        to: '/',
      },
      {
        titl: 'Rings',
        no: '(2)',
        to: '/',
      },
    ],
  },
  {
    name: 'Sandals',
    number: '(3)',
    path: '/',
    Childrens: [
      {
        titl: 'Gladiator Sandals',
        no: '(0)',
        to: '/',
      },
      {
        titl: 'Slide Sandals',
        no: '(0)',
        to: '/',
      },
    ],
  },
  {
    name: 'Shirts',
    number: '(15)',
    path: '/',
    Childrens: [
      {
        titl: 'Dress Shirt',
        no: '(2)',
        to: '/',
      },
      {
        titl: 'Polo Shirt',
        no: '(0)',
        to: '/',
      },
    ],
  },
  {
    name: 'Shoes',
    number: '(5)',
    path: '/',
    Childrens: [],
  },
  {
    name: 'Top',
    number: '(4)',
    path: '/',
    Childrens: [],
  },
];

const SidebarNav = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className="   w-[350] p-6 ">
      <div className=" ">
        <h1 className="text-xl font-bold items-center">Categories</h1>
        <div className="flex mt-4">
          <nav className=" w-[2300px] block">
            <ul className="text-black">
              {Categories.map((category, index) => (
                <li key={index} className="flex flex-col ">
                  <div
                    onClick={() => toggleDropdown(index)}
                    className="flex items-center justify-between cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <Link href={category.path}>
                        <span className="text-[18px]">{category.name}</span>
                      </Link>
                      <span className="text-black">{category.number}</span>
                    </div>
                    {category.Childrens.length > 0 && (
                      <ChevronUp
                        className={`cursor-pointer transform duration-300 transition-transform ${
                          openDropdown === index ? '-rotate-180' : ''
                        }`}
                      />
                    )}
                  </div>

                  {category.Childrens.length > 0 && (
                    <ul
                      className={` w-full p-1 rounded-lg  transition-all duration-500 ease-in-out overflow-hidden ${
                        openDropdown === index
                          ? 'max-h-screen opacity-100'
                          : 'max-h-0 opacity-0'
                      }`}
                    >
                      {category.Childrens.map((child, childIndex) => (
                        <li key={childIndex} className="text-[14px] mb-2">
                          <Link href={child.to}>
                            <div className="flex items-center gap-2">
                              <span className="text-[18px]">{child.titl}</span>
                              <span className="text-black">{child.no}</span>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Price</h2>
        <div className="flex flex-col mt-4">
          <Link href="/Rest">Rest</Link>
          <input type="range" name="range" className="mx-2" />
          <p>
            Range :<span className="text-cyan-300"> $15.00 - $229.00</span>
          </p>
        </div>
      </div>
      <Colour />
      <Size />
      <Brands />
      <Products />
    </div>
  );
};

export default SidebarNav;

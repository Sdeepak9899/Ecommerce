/** @format */

import Link from 'next/link';
import { Search } from 'lucide-react';
import { User } from 'lucide-react';
import { Heart } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';

const homeline = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Shop',
    path: '/home',
  },
  {
    name: 'Products',
    path: '/produt',
  },
  {
    name: 'Blog',
    path: '/blog',
  },
  {
    name: 'About Us',
    path: '/aboutus',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
];

const Navigation = () => {
  return (
    <div className="flex justify-between top-0  shadow-md h-24 p-8 items-center">
      <div className="w-36">
        <img
          src="https://bemins.wpbingosite.com/wp-content/uploads/2020/06/logo.png"
          alt="logo"
          className="w-full"
        />
      </div>
      <nav>
        <ul className="flex gap-6 text-lg">
          {homeline.map((item) => (
            <li
              key={item.name}
              className="hover:underline duration-1000 hover:ease-in-out "
            >
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex gap-4">
        <Search className="hover:text-cyan-400" />
        <User className="hover:text-cyan-400" />
        <Heart className="hover:text-cyan-400" />
        <ShoppingCart className="hover:text-cyan-400" />
      </div>
    </div>
  );
};

export default Navigation;

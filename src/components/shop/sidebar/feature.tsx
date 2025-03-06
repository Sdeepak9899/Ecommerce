/** @format */

import Link from 'next/link';
import Photos from '../ShopIndex';
import path from 'path';
import Image from 'next/image';

const Featurarr = [
  {
    Photos:
      'https://bemins.wpbingosite.com/wp-content/uploads/2024/03/pro-53.jpg',
    name: 'XDiamonds And GLod Letter A Necklace',
    price: '$50.00',
    path: '/',
  },
  {
    Photos:
      'https://bemins.wpbingosite.com/wp-content/uploads/2024/03/pro-45.jpg',
    name: 'XGreen Aventurine Moon Ring',
    price: '$105.00',
    path: '/',
  },
  {
    Photos:
      'https://bemins.wpbingosite.com/wp-content/uploads/2024/03/pro-41.jpg',
    name: 'ZCoral Hoops',
    price: '$120.00',
    path: '/',
  },
];

const Products = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold mt-4">Feature Product</h2>
      {Featurarr.map((item, index) => (
        <div key={index} className="mt-2 flex gap-4 border">
          <div className="h-full">
            <Image
              src={item.Photos}
              alt={item.name}
              className="max-w-24 object-cover"
              width={400}
              height={500}
            />
          </div>
          <div className="mt-4">
            <Link href={item.path} className="hover:text-cyan-500">
              {item.name}
            </Link>
            <p className="mt-2">{item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;

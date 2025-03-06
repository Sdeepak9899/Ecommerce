/** @format */

import { Link } from 'lucide-react';
const Shop = [
  {
    photo:
      'https://bemins.wpbingosite.com/wp-content/uploads/2023/11/category.jpg',
    name: 'Tops',
  },
  {
    photo:
      'https://bemins.wpbingosite.com/wp-content/uploads/2023/11/category-4.jpg',
    name: 'Shirts',
  },
  {
    photo:
      'https://bemins.wpbingosite.com/wp-content/uploads/2023/11/category-2.jpg',
    name: 'Glasses',
  },
  {
    photo:
      'https://bemins.wpbingosite.com/wp-content/uploads/2023/11/category-5.jpg',
    name: 'Sandals',
  },
  {
    photo:
      'https://bemins.wpbingosite.com/wp-content/uploads/2023/11/category-3.jpg',
    name: 'Bag',
  },
  {
    photo:
      'https://bemins.wpbingosite.com/wp-content/uploads/2023/11/category-1.jpg',
    name: 'Shoes',
  },
];

const Categories = () => {
  return (
    <div>
      <h1 className="flex justify-center text-3xl ">Shop by categories</h1>
      <div>
        <ul className="flex  justify-between m-4 rounded">
          {Shop.map((item) => (
            <li className="flex flex-col items-center m-8">
              <div className="w-44 h-44 relative rounded-full overflow-hidden  shadow-lg hover:scale-90 duration-200 ">
                <img
                  src={item.photo}
                  alt={item.name}
                  className="object-cover w-full h-full "
                />
              </div>
              <div className="mt-4 text-center">
                <p className="text-lg font-semibold">{item.name}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Categories;

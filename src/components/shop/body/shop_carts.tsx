/** @format */
import { ArrowRight } from 'lucide-react';
import { Search } from 'lucide-react';
import { Heart } from 'lucide-react';
import { ArrowRightLeft } from 'lucide-react';

const Shop_carts = () => {
  const Cartsdetails = [
    {
      imag1:
        'https://bemins.wpbingosite.com/wp-content/uploads/2020/12/products-1-1-600x820.jpg',
      imag2:
        'https://bemins.wpbingosite.com/wp-content/uploads/2020/12/products-2-1-600x820.jpg',
      name: '90s Chino Pant',
      price: '$50.00-$60.00',
    },
    {
      imag1:
        'https://bemins.wpbingosite.com/wp-content/uploads/2020/12/products-7-600x820.jpg',
      imag2:
        'https://bemins.wpbingosite.com/wp-content/uploads/2020/12/products-8-600x820.jpg',
      name: 'Angie Skirt',
      price: '$100.00-$120.00',
    },
    {
      imag1:
        'https://bemins.wpbingosite.com/wp-content/uploads/2019/04/products-11-1-600x820.jpg',
      imag2:
        'https://bemins.wpbingosite.com/wp-content/uploads/2019/04/products-12-1-600x820.jpg',
      name: 'Audience Satin Dress',
      price: '$148.00-$150.00',
    },
    {
      imag1:
        'https://bemins.wpbingosite.com/wp-content/uploads/2023/12/products-15-1-600x820.jpg',
      imag2:
        'https://bemins.wpbingosite.com/wp-content/uploads/2023/12/products-16-1-600x820.jpg',
      name: 'Band Straw Hat',
      price: '$$15.99-$20.00',
    },
    {
      imag1:
        'https://bemins.wpbingosite.com/wp-content/uploads/2020/12/products-19-600x820.jpg',
      imag2:
        'https://bemins.wpbingosite.com/wp-content/uploads/2020/12/products-20-600x820.jpg',
      name: 'Black Gold',
      price: '$116.00-$200.00',
    },
    {
      imag1:
        'https://bemins.wpbingosite.com/wp-content/uploads/2020/12/products-21-600x820.jpg',
      imag2:
        'https://bemins.wpbingosite.com/wp-content/uploads/2020/12/products-22-600x820.jpg',
      name: 'Caramel Midnight',
      price: '$50.00',
    },
    {
      imag1:
        'https://bemins.wpbingosite.com/wp-content/uploads/2020/12/products-23-600x820.jpg',
      imag2:
        'https://bemins.wpbingosite.com/wp-content/uploads/2020/12/products-24-600x820.jpg',
      name: 'Cloud 5 Ready',
      price: '$100.00-$120.00',
    },
    {
      imag1:
        'https://bemins.wpbingosite.com/wp-content/uploads/2020/12/products-25-600x820.jpg',
      imag2:
        'https://bemins.wpbingosite.com/wp-content/uploads/2020/12/products-26-600x820.jpg',
      name: 'Cloud X Shify',
      price: '$50.00',
    },
    {
      imag1:
        'https://bemins.wpbingosite.com/wp-content/uploads/2020/12/products-27-600x820.jpg',
      imag2:
        'https://bemins.wpbingosite.com/wp-content/uploads/2020/12/products-28-1-600x820.jpg',
      name: 'Cloudboom Echo',
      price: '$50.00-$120.00',
    },
    // {same}
    {
      imag1:
        'https://bemins.wpbingosite.com/wp-content/uploads/2020/12/products-1-1-600x820.jpg',
      imag2:
        'https://bemins.wpbingosite.com/wp-content/uploads/2020/12/products-2-1-600x820.jpg',
      name: '90s Chino Pant',
      price: '$50.00-$60.00',
    },
    {
      imag1:
        'https://bemins.wpbingosite.com/wp-content/uploads/2020/12/products-7-600x820.jpg',
      imag2:
        'https://bemins.wpbingosite.com/wp-content/uploads/2020/12/products-8-600x820.jpg',
      name: 'Angie Skirt',
      price: '$100.00-$120.00',
    },
    {
      imag1:
        'https://bemins.wpbingosite.com/wp-content/uploads/2019/04/products-11-1-600x820.jpg',
      imag2:
        'https://bemins.wpbingosite.com/wp-content/uploads/2019/04/products-12-1-600x820.jpg',
      name: 'Audience Satin Dress',
      price: '$148.00-$150.00',
    },
    {
      imag1:
        'https://bemins.wpbingosite.com/wp-content/uploads/2023/12/products-15-1-600x820.jpg',
      imag2:
        'https://bemins.wpbingosite.com/wp-content/uploads/2023/12/products-16-1-600x820.jpg',
      name: 'Band Straw Hat',
      price: '$$15.99-$20.00',
    },
    {
      imag1:
        'https://bemins.wpbingosite.com/wp-content/uploads/2020/12/products-19-600x820.jpg',
      imag2:
        'https://bemins.wpbingosite.com/wp-content/uploads/2020/12/products-20-600x820.jpg',
      name: 'Black Gold',
      price: '$116.00-$200.00',
    },
    {
      imag1:
        'https://bemins.wpbingosite.com/wp-content/uploads/2020/12/products-21-600x820.jpg',
      imag2:
        'https://bemins.wpbingosite.com/wp-content/uploads/2020/12/products-22-600x820.jpg',
      name: 'Caramel Midnight',
      price: '$50.00',
    },
    {
      imag1:
        'https://bemins.wpbingosite.com/wp-content/uploads/2020/12/products-23-600x820.jpg',
      imag2:
        'https://bemins.wpbingosite.com/wp-content/uploads/2020/12/products-24-600x820.jpg',
      name: 'Cloud 5 Ready',
      price: '$100.00-$120.00',
    },
    {
      imag1:
        'https://bemins.wpbingosite.com/wp-content/uploads/2020/12/products-25-600x820.jpg',
      imag2:
        'https://bemins.wpbingosite.com/wp-content/uploads/2020/12/products-26-600x820.jpg',
      name: 'Cloud X Shify',
      price: '$50.00',
    },
    {
      imag1:
        'https://bemins.wpbingosite.com/wp-content/uploads/2020/12/products-27-600x820.jpg',
      imag2:
        'https://bemins.wpbingosite.com/wp-content/uploads/2020/12/products-28-1-600x820.jpg',
      name: 'Cloudboom Echo',
      price: '$50.00-$120.00',
    },
  ];

  return (
    <div className="p-8 overflow-hidden flex flex-col justify-center items-center gap-8">
      <div>
        <ul className="flex gap-8 flex-wrap line-clamp-2">
          {Cartsdetails.map((item, index) => (
            <li key={index} className="w-80">
              <div className="h-[400px] bg-gray-1s00 shadow-lg relative group rounded-2xl">
                <img
                  src={item.imag1}
                  alt={item.name}
                  className="w-full object-cover h-full absolute top-0 group-hover:opacity-0 rounded-2xl"
                ></img>

                <img
                  src={item.imag2}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:opacity-100 rounded-2xl"
                ></img>

                <div className="flex absolute bottom-0 w-full  justify-center gap-8 px-4">
                  <ArrowRight className="w-8 h-8 bg-white rounded-full border p-1 opacity-0 group-hover:opacity-100 transform translate-y-3 group-hover:translate-y-0 transition-all duration-300 ease-in-out hover:bg-cyan-400 hover:text-white" />
                  <Search className="w-8 h-8 bg-white rounded-full border p-1 opacity-0 group-hover:opacity-100 transform translate-y-3 group-hover:translate-y-0 transition-all duration-300 ease-in-out delay-100 hover:bg-cyan-400 hover:text-white" />
                  <Heart className="w-8 h-8 bg-white rounded-full border p-1 opacity-0 group-hover:opacity-100 transform translate-y-3 group-hover:translate-y-0 transition-all duration-300 ease-in-out delay-150 hover:bg-cyan-400 hover:text-white" />
                  <ArrowRightLeft className="w-8 h-8 bg-white rounded-full border p-1 opacity-0 group-hover:opacity-100 transform translate-y-3 group-hover:translate-y-0 transition-all duration-300 ease-in-out delay-200 hover:bg-cyan-400 hover:text-white" />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 m-2">
                <a
                  href="/"
                  className="text-lg font-semibold hover:text-cyan-400"
                >
                  {item.name}
                </a>
                <p className="">{item.price}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <button className="text-white  bg-black w-40 h-12 text-lg rounded-lg hover:bg-cyan-400 ">
        Load More
      </button>
    </div>
  );
};

export default Shop_carts;

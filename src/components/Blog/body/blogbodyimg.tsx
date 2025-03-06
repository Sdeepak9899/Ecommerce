/** @format */

import exp from 'constants';
import Link from 'next/link';

const Blogbody_img = () => {
  const bodyimg = [
    {
      imgs: 'https://bemins.wpbingosite.com/wp-content/uploads/2023/01/blog-500x500.jpg',
      name: 'Unleash Your Inner Style Icon',
      date: 'January 23, 2024',
      about:
        'Our goal has always been to motivate, encourage and release our fellow creatives to do their thing Sed a...',
      collec: 'Beauty',
      style: 'Collection',
    },

    {
      imgs: 'https://bemins.wpbingosite.com/wp-content/uploads/2023/01/blog-1-1-500x500.jpg',
      name: 'Her Style Choice',
      date: 'January 23, 2024',
      about:
        'Our goal has always been to motivate, encourage and release our fellow creatives to do their thing Sed a....',
      collec: 'Accessories',
      style: 'Collection',
    },
    {
      imgs: 'https://bemins.wpbingosite.com/wp-content/uploads/2023/01/blog-3.jpg',
      name: 'Luxury Made Affordable',
      date: 'January 23, 2024',
      about:
        'Our goal has always been to motivate, encourage and release our fellow creatives to do their thing Sed a...',
      collec: 'Fashion Tips',
      style: ``,
    },
    {
      imgs: 'https://bemins.wpbingosite.com/wp-content/uploads/2023/01/blog-4.jpg',
      name: 'Post format video blogs',
      date: 'January 23, 2024',
      about:
        'Nunc aliquet, justo non commodo congue, velit sem pulvinar enim, ac bibendum mi mi eget libero. Maecenas...',
      collec: 'Beauty',
      style: ``,
    },
    {
      imgs: 'https://bemins.wpbingosite.com/wp-content/uploads/2023/01/blog-5.jpg',
      name: 'Post format audio blogs',
      date: 'January 23, 2024',
      about:
        'Nunc aliquet, justo non commodo congue, velit sem pulvinar enim, ac bibendum mi mi eget libero. Maecenas...',
      collec: 'Life Style',
      style: 'Uncategorizes',
    },
  ];
  return (
    <div>
      <ul>
        {bodyimg.map((item) => (
          <li key={item} className="">
            <div className="m-2 w-3xl h-[600px] relative">
              <img
                src={item.imgs}
                alt={item.name}
                className="w-full h-full object-cover"
              />

              <div
                className="flex gap-4 items-center absolute translate(-50%, -50%)  left-[5%]
            bottom-[5%] "
              >
                <button className="bg-white w-28 hover:bg-cyan-400 hover:text-white p-2">
                  {item.collec}
                </button>
                {item.style && (
                  <button className="bg-white w-28 p-2 hover:text-white hover:bg-cyan-400">
                    {item.style}
                  </button>
                )}
              </div>
            </div>
            <div className="m-4 flex flex-col gap-2">
              <Link href="/" className="hover:text-cyan-400">
                {item.date}
              </Link>
              <Link
                href="/"
                className="text-2xl font-semibold hover:text-cyan-400"
              >
                {item.name}
              </Link>
              <div>{item.about}</div>
            </div>
            <div>
              <button className="text-white  bg-cyan-400 w-40 h-12 text-lg rounded-lg m-4 hover:bg-black">
                Read More
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blogbody_img;

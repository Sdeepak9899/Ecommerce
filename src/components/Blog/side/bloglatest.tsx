/** @format */

import Link from 'next/link';

const Blog_latest = () => {
  const Latest = [
    {
      imag: 'https://bemins.wpbingosite.com/wp-content/uploads/2023/01/blog-500x500.jpg',
      name: 'The Latest Trends in Fashion',
      date: 'January 12, 2024',
      path: '/',
    },
    {
      imag: 'https://bemins.wpbingosite.com/wp-content/uploads/2023/01/blog-1-1-500x500.jpg',
      name: 'Unleash Your Inner Style Icon',
      date: 'January 11, 2024',
      path: '/',
    },
    {
      imag: 'https://bemins.wpbingosite.com/wp-content/uploads/2023/01/blog-2-500x500.jpg',
      name: 'Her Style Choice',
      date: 'January 10, 2024',
      path: '/',
    },
  ];
  return (
    <div className="mt-4">
      <div className="border-b-2 ">
        <h2 className="text-xl font-semibold pb-8">Latest Post</h2>
      </div>
      <div className="mt-4">
        {Latest.map((item, index) => (
          <div key={index} className="mt-2 flex border gap-4">
            <div className="h-full">
              <img
                src={item.imag}
                alt={item.name}
                className="max-w-24 object-cover"
                width={400}
                height={500}
              />
            </div>
            <Link href={item.name} className="mt-4">
              <p>{item.date}</p>
              <p className="mt-2 hover:text-cyan-400">{item.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog_latest;

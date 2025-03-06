/** @format */

import Link from 'next/link';

const Blog_tages = () => {
  const Tag = [
    { name: 'Baber' },
    { name: 'Baby Needs' },
    { name: 'Beauty' },
    { name: 'Cosmetic' },
    { name: 'Ear Care' },
    { name: 'Electric' },
    { name: 'Fashion' },
    { name: 'Jwerly' },
    { name: 'Medical' },
    { name: 'Mimimal' },
    { name: 'Organic' },
    { name: 'Simple' },
    { name: 'Sport' },
  ];

  return (
    <div className="mt-4 flex flex-wrap">
      <div className="border-b-2">
        <h2 className="text-xl font-semibold pb-8">Tag</h2>
      </div>
      <ul className="flex flex-wrap">
        {Tag.map((item, index) => (
          <li
            key={index}
            className="w-36 h-12 flex items-center justify-center text-lg p-2 border m-1 rounded-lg"
          >
            <Link href="/" className="text-sm">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog_tages;

/** @format */

import Link from 'next/link';
import { Music2 } from 'lucide-react';
import { X } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Facebook } from 'lucide-react';

const Blog_social = () => {
  const socialmedia = [
    {
      icon: <Music2 />,
    },
    {
      icon: <X />,
    },
    {
      icon: <Instagram />,
    },
    {
      icon: <Facebook />,
    },
  ];
  return (
    <div>
      <div className="border-b-2 mt-4">
        <h2 className="text-xl font-semibold pb-8">Social</h2>
      </div>
      <ul className="flex  gap-6 mt-4">
        {socialmedia.map((item, index) => (
          <li
            key={index}
            className=" shadow-lg w-14 h-10 items-center rounded-lg"
          >
            <div className="p-2">{item.icon}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog_social;

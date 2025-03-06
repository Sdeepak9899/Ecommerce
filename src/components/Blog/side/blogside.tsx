/** @format */

import Link from 'next/link';
import path from 'path';
import Blog_latest from './bloglatest';
import Blog_social from './socialmedia';
import Blog_tages from './blog_tags';

const Blog_sidebar = () => {
  const Categories = [
    {
      name: 'Accessories',
    },
    {
      name: 'Beauty',
    },
    {
      name: 'Collection',
    },
    {
      name: 'Fashion Tips',
    },
    {
      name: 'Life Style',
    },
    {
      name: 'Uncategorized',
    },
  ];

  return (
    <div className="m-8 w-[450px] ">
      <div className="p-4 h-20">
        <input
          placeholder="search.... "
          className="outline-none  w-52 h-full border-b-2  border-black"
        />
        <button className="w-20 hover:bg-cyan-400 rounded-md text-lg bg-black text-white h-full">
          Search
        </button>
      </div>
      <div className="flex flex-col gap-6">
        <div className="border-b-2 ">
          <h2 className="text-xl font-semibold pb-8">Categories</h2>
        </div>
        <ul>
          {Categories.map((item) => (
            <li>
              <div className="hover:text-cyan-400">{item.name}</div>
            </li>
          ))}
        </ul>
      </div>
      <Blog_latest />
      <Blog_social />
      <Blog_tages />
    </div>
  );
};

export default Blog_sidebar;

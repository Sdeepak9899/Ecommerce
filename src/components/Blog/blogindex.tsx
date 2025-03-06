/** @format */

import Blogbody_link from './body/blogbody';
import Blog_hero from './hero';
import Blog_sidebar from './side/blogside';

export default function Blog_index() {
  return (
    <div>
      <Blog_hero />
      <div className="flex m-8">
        <Blog_sidebar />
        <Blogbody_link />
      </div>
    </div>
  );
}

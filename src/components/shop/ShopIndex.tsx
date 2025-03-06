/** @format */

import Hero from './hero';
import SlidebarNav from './sidebar/sidebar';
import Shopbody from './body';

export default function Photos() {
  return (
    <div>
      <Hero />
      <div className="flex">
        <SlidebarNav />
        <Shopbody />
      </div>
    </div>
  );
}

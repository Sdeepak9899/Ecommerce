/** @format */

import Cart from './carts';
import Categories from './categories';
import ResponsiveSlider from './slidercart';
import VerticalMode from './slider';
import MultipleItems from './slider_best_seller';
import Video from './vide';
import SimpleSlider from './Testimonials';

const Contact = () => {
  return (
    <div>
      <VerticalMode />
      <Cart />
      <Categories />
      <Video />
      <MultipleItems />
      <SimpleSlider />
      {/* <ResponsiveSlider /> */}
    </div>
  );
};

export default Contact;

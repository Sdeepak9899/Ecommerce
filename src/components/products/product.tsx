/** @format */
import Products_top from './top';
import Product_img_sildbar from './product_images';
import Product_detais from './product_detais';
import MltipleItems from './product_cart';
// import ToggleDiv from './weast';
// import SimpleSlider from './product_slider';

export default function Products_index() {
  return (
    <div className="overflow-hidden">
      <Products_top />
      <Product_img_sildbar />
      <Product_detais />
      <MltipleItems />
      {/* <ToggleDiv /> */}
      {/* <SimpleSlider /> */}
    </div>
  );
}

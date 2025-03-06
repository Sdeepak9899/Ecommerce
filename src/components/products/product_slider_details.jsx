/** @format */

const Product_slider_details = () => {
  const Pname = [{ name: 'Audience Satin Dress' }];
  return (
    <div>
      {Pname.map((i) => (
        <div key={i.i}>{i.name}</div>
      ))}
    </div>
  );
};

export default Product_slider_details;

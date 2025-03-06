/** @format */

const SimpleSlider = () => {
  const Product_cart = [
    {
      imag1:
        'https://bemins.wpbingosite.com/wp-content/uploads/2022/08/products-74.jpg',
      imag2:
        'https://bemins.wpbingosite.com/wp-content/uploads/2022/08/products-75-1.jpg',
      imag3:
        'https://bemins.wpbingosite.com/wp-content/uploads/2022/08/products-76-1.jpg',
      imag4:
        'https://bemins.wpbingosite.com/wp-content/uploads/2022/08/products-77-1.jpg',
    },
  ];
  return (
    <div className="m-4">
      <div>
        {Product_cart.map((item, index) => (
          <div key={index}>
            <div className="w-3/5">
              <img src={item.imag1} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimpleSlider;

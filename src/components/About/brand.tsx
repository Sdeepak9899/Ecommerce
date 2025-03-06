/** @format */

const Brand = () => {
  const Brandname = [
    {
      bri: 'https://bemins.wpbingosite.com/wp-content/uploads/2023/11/brand-1.png',
    },
    {
      bri: 'https://bemins.wpbingosite.com/wp-content/uploads/2023/11/brand-4.png',
    },
    {
      bri: 'https://bemins.wpbingosite.com/wp-content/uploads/2023/11/brand.png',
    },
    {
      bri: 'https://bemins.wpbingosite.com/wp-content/uploads/2023/11/brand-3.png',
    },
    {
      bri: 'https://bemins.wpbingosite.com/wp-content/uploads/2023/11/brand-2.png',
    },
  ];

  return (
    <div>
      <ul className="flex justify-between m-12 ">
        {Brandname.map((item, index) => (
          <li key={index}>
            <div>
              <img
                src={item.bri}
                alt="brand"
                className="hover:opacity-100 opacity-20 ease-in-out duration-500 "
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Brand;

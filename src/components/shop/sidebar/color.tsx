/** @format */

const arry = [
  {
    name: 'Beiger',
    number: '(6)',
    cname: '#e6d4b4',
  },
  {
    name: 'Black',
    number: '(9)',
    cname: '#000000',
  },
  {
    name: 'Blue',
    number: '(4)',
    cname: '#5173a6',
  },
  {
    name: 'Brick',
    number: '(2)',
    cname: '#6b302c',
  },
  {
    name: 'Gray',
    number: '(3)',
    cname: '#8d9098',
  },
  {
    name: 'Green',
    number: '(4)',
    cname: '#20b2aa',
  },
  {
    name: 'Lilac',
    number: '(1)',
    cname: '#a5afc5',
  },
  {
    name: 'Pink',
    number: '(3)',
    cname: '#ffc0cb',
  },
  {
    name: 'Red',
    number: '(1)',
    cname: '#ef5050',
  },
  {
    name: 'White',
    number: '(12)',
    cname: '#ffffff',
  },
  {
    name: 'Yellow',
    number: '(4)',
    cname: '#c69a02',
  },
];

const Colour = () => {
  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold mb-4">Colors</h2>
      <div className="flex flex-wrap gap-6">
        {arry.map((color, index) => (
          <div
            key={index}
            className="group relative flex flex-col items-center gap-2 text-center"
          >
            <div
              className="w-8 h-8 relative rounded-full overflow-hidden  shadow-mg border-2 hover:scale-90 duration-200 "
              style={{ backgroundColor: color.cname }}
              title={color.name}
            ></div>
            <div className="absolute -top-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm bg-gray-800 text-white px-2 py-1 rounded-md shadow-lg ">
              {color.name}
              {color.number}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Colour;

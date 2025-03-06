/** @format */
import Link from 'next/link';

const sizearr = [
  {
    name: '  L',
    no: 11,
    path: '/',
  },
  {
    name: '  L',
    no: 11,
    path: '/',
  },
  {
    name: ' M',
    no: 11,
    path: '/',
  },
  {
    name: ' S',
    no: 11,
    path: '/',
  },
  {
    name: 'XL',
    no: 7,
    path: '/',
  },
  {
    name: ' 34',
    no: 1,
    path: '/',
  },
  {
    name: '  35',
    no: 1,
    path: '/',
  },
  {
    name: ' 36',
    no: 1,
    path: '/',
  },
  {
    name: '37',
    no: 1,
    path: '/',
  },
  {
    name: ' 38',
    no: 1,
    path: '/',
  },
  {
    name: '  39',
    no: 1,
    path: '/',
  },
];

const Size = () => {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold">Size</h2>
      <div className="flex flex-wrap mt-2">
        {sizearr.map((item, index) => (
          <span key={index} className="m-1">
            <Link
              href={item.path}
              className="flex w-14 h-8 justify-center hover:bg-cyan-300 hover:text-white border "
            >
              <p>{item.name}</p>
              <p>({item.no})</p>
            </Link>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Size;

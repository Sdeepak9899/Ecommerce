/** @format */

import Link from 'next/link';

export default function Brands() {
  return (
    <div className="mt-4 ">
      <h2 className="text-xl font-semibold">Brands</h2>
      <div className="flex gap-1 flex-wrap">
        <Link
          href="/"
          className="flex w-16 h-8 justify-center hover:text-cyan-400"
        >
          <p>Dior</p>
          <p>(3)</p>
        </Link>
        <Link
          href="/"
          className="flex w-16 h-8 justify-center hover:text-cyan-400"
        >
          <p>Frade</p>
          <p>(6)</p>
        </Link>
        <Link
          href="/"
          className="flex w-16 h-8 justify-center hover:text-cyan-400"
        >
          <p>Gucci</p>
          <p>(6)</p>
        </Link>{' '}
        <Link
          href="/"
          className="flex w-16 h-8 justify-center hover:text-cyan-400"
        >
          <p>Mango</p>
          <p>(5)</p>
        </Link>
        <Link
          href="/"
          className="flex w-16 h-8 justify-center hover:text-cyan-400"
        >
          <p>Vogue</p>
          <p>(3)</p>
        </Link>
      </div>
    </div>
  );
}

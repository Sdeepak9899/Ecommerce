/** @format */
import Link from 'next/link';
import { Music2 } from 'lucide-react';
import { X } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <div className=" px-12    h-[350] flex-col bg-gray-100 justify-center border-t ">
      <div className="flex justify-between">
        {/* 1 */}
        <div className="gap-2 mt-12 ">
          <div className="w-28">
            <img
              src="https://bemins.wpbingosite.com/wp-content/uploads/2020/06/logo.png"
              alt="logo"
              className="w-full mb-4"
            />
          </div>
          <Link href="" className="hover:text-cyan-400">
            <p className="text-sm">Contact our custer happiness team</p>
          </Link>

          <Link href="" className="hover:text-cyan-400">
            <p className="text-sm">Monday-Friday 9am-5pm</p>
          </Link>

          <Link href="" className="hover:text-cyan-400">
            <p className="text-sm">9625626268</p>
          </Link>

          <div className="mt-6 gap-6">
            <p>Our social</p>
            <div className="flex mt-4 gap-2">
              <Music2 className="w-8 h-8 p-2 rounded-full shadow-lg hover:bg-cyan-500 hover:text-white" />
              <X className="w-8 h-8 p-2 rounded-full shadow-lg hover:bg-cyan-500 hover:text-white" />
              <Instagram className="w-8 h-8 p-2 rounded-full shadow-lg hover:bg-cyan-500 hover:text-white" />
              <Facebook className="w-8 h-8 p-2 rounded-full shadow-lg hover:bg-cyan-500 hover:text-white" />
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="flex flex-col gap-1 mt-12 ">
          <p className="mb-2 font-semibold text-lg">Shop</p>
          <Link href="/" className="hover:text-cyan-400 text-sm">
            Shop dog
          </Link>
          <Link href="/" className="hover:text-cyan-400  text-sm">
            Shop cat
          </Link>
          <Link href="/" className="hover:text-cyan-400  text-sm">
            Shop brands
          </Link>
          <Link href="/" className="hover:text-cyan-400  text-sm">
            On sale
          </Link>
          <Link href="/" className="hover:text-cyan-400  text-sm">
            Auto-Delivery
          </Link>
          <Link href="/" className="hover:text-cyan-400  text-sm">
            Aussiel Hazard Cover
          </Link>
        </div>
        <div className="flex flex-col gap-1 mt-12 ">
          <p className="mb-2 font-semibold text-lg">Customer Services</p>

          <Link href="/" className="hover:text-cyan-400  text-sm">
            Track Order
          </Link>
          <Link href="/" className=" text-sm hover:text-cyan-400">
            Returns
          </Link>
          <Link href="/" className="hover:text-cyan-400  text-sm">
            Shipping Info
          </Link>
          <Link href="/" className="hover:text-cyan-400  text-sm">
            Recalls & Advisories
          </Link>
          <Link href="/" className="hover:text-cyan-400  text-sm">
            Pet Store Locator
          </Link>
          <Link href="/" className="hover:text-cyan-400  text-sm">
            Help
          </Link>
        </div>
        <div className="w-80 gap-1 mt-12 ">
          <p className="mb-2 font-semibold text-lg">Stay in touch....</p>
          <p className="flex-wrap mb-4  text-base">
            Subscribe and be the first to know about exclusive offers, products,
            promotions & more
          </p>
          <input
            placeholder="Enter your email...."
            className="h-10 px-2 outline-none"
          />
          <button className="w-28 text-white hover:bg-black h-10 bg-cyan-400">
            Submit
          </button>
        </div>
      </div>
      <div className="mt-12">© 2024 – bemins. All Rights Reserved.</div>
    </div>
  );
}

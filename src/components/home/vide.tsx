/** @format */

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Play } from 'lucide-react';

export default function Video() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="relative">
      <div className="flex justify-center items-center h-screen">
        <div
          className="w-11/12 h-5/6 flex justify-center items-center bg-cover bg-center border rounded-xl"
          style={{
            backgroundImage:
              "url('https://bemins.wpbingosite.com/wp-content/uploads/2024/02/video.jpg')",
          }}
        >
          <div className="flex flex-col justify-center items-center gap-4 text-center">
            <div
              className="bg-white text-black hover:text-white hover:bg-cyan-400 w-20 h-20 rounded-full flex justify-center items-center cursor-pointer"
              onClick={() => setShowVideo(true)}
            >
              <Play size={40} />
            </div>

            <h1 className="text-5xl font-semibold">
              Step into Fashion Excellence
            </h1>
            <p className="text-xl">
              Unveiling the Latest Trends and Must-Have Looks
            </p>
            <Link href="/home">
              <button className="border-2 rounded-lg bg-gray-100 text-lg w-40 py-2 text-center hover:bg-cyan-400 hover:text-white">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </div>

      {showVideo && (
        <div
          className="flex justify-center items-center w-full h-screen fixed top-0 left-0 bg-black bg-opacity-80"
          onClick={() => setShowVideo(false)}
        >
          <div className="w-11/12 h-3/4 flex justify-center items-center relative">
            <button
              className="absolute top-4 right-4 text-white text-3xl  px-3 py-1 rounded-full cursor-pointer"
              onClick={() => setShowVideo(false)}
            ></button>
            <iframe
              width="90%"
              height="500"
              src="https://www.youtube.com/embed/I10XB1-IIbA?si=LI8UeV6a1paavPOZ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}

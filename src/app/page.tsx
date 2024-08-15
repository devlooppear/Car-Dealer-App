"use client";

import React, { Suspense } from 'react';
import { useRouter } from 'next/navigation';
import Loader from './common/loader';

const HomeContent: React.FC = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push('/vehicles');
  };

  return (
    <div className="flex justify-center">
      <div className="bg-neutral-100 w-full max-w-[90vw] mt-5 rounded-md shadow-sm px-2 pt-1 pb-2 min-h-[60vh] flex flex-col gap-5 justify-center align-middle items-center">
        <div className="my-6 flex flex-col justify-center align-middle items-center gap-5">
          <h2 className="font-semibold text-neutral-700 text-lg">
            This is the Car Dealer App
          </h2>
          <div className="max-w-[90%] w-full flex justify-center align-middle items-center">
            <img
              src="android-chrome-512x512.png"
              alt="logo-image"
              className="rounded-md shadow-md"
            />
          </div>
          <button
            className="px-2 py-1 bg-neutral-50 border-2 border-neutral-300 rounded-md shadow-md text-orange-600 font-semibold hover:font-bold hover:bg-orange-50"
            onClick={handleRedirect}
          >
            Check About The Vehicles
          </button>
        </div>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <HomeContent />
    </Suspense>
  );
};

export default Home;

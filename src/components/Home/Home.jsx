import React, { useEffect, useState } from 'react';
import homepng1 from '../../assets/homePhoto1.jpg';
import HSpecialOffers from './HSpecialOffers';

function Home() {
  const images = [homepng1]
  const [currentImageIndex, setCurrentImageIndex] = useState(0)


  useEffect(() => {
    const intervel = setInterval(() => {
      setCurrentImageIndex(currentImageIndex => (currentImageIndex + 1) % images.length)
    }, 4500);

    return () => clearInterval(intervel)
  }, [])
  return (
    <>
      <div className="relative h-[90vh] w-full">
        <img className='h-[90vh] w-full object-cover' src={images[currentImageIndex]} alt="Home" />
        <div className="absolute top-72 p-2 right-0  pc:top-40 pc:right-44  flex flex-col justify-center content-center   w-[15rem]  h-52 " >
          <div className="text-center p-5 bg-gray-100 bg-opacity-40 rounded-md">
            <h1 className="text-3xl font-bold mb-4 text-black ">Start a new journey</h1>
         
          </div>

        </div>
      </div>
      <div className="flex flex-col items-center h-auto ">

        <div className="w-full mt-8 flex flex-col justify-center items-center">
          <h2 className="text-5xl font-semibold text-center my-4">Trending Books</h2>
          <div className=' w-[100%]'>
            <HSpecialOffers />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

import React, { useEffect } from 'react'

import JourneyToCenterOfEarthPhoto from '../../assets/Adventure/JourneyToCenterOfEarth/JourneyToCenterOfEarth.jpg'
import JourneyToCenterOfEarthPdf from '../../assets/Adventure/JourneyToCenterOfEarth/JourneyToCenterOfEarth.pdf'
import LeaguesUndertheSeaPhoto from '../../assets/Adventure/LeaguesUndertheSea/LeaguesUndertheSea.jpeg'
import LeaguesUndertheSeahPdf from '../../assets/Adventure/LeaguesUndertheSea/LeaguesUndertheSea.pdf'
import PrincessOfMarsPhoto from '../../assets/Adventure/PrincessOfMars/PrincessOfMars.jpg'
import PrincessOfMarsPdf from '../../assets/Adventure/PrincessOfMars/PrincessOfMars.pdf'
import TheCountOfMonteCristoPhoto from '../../assets/Adventure/TheCountOfMonteCristo/TheCountOfMonteCristo.webp'
import TheCountOfMonteCristoPdf from '../../assets/Adventure/TheCountOfMonteCristo/TheCountOfMonteCristo.pdf'
import TheMesteriousIslandPhoto from '../../assets/Adventure/TheMesteriousIsland/TheMesteriousIsland.webp'
import TheMesteriousIslandPdf from '../../assets/Adventure/TheMesteriousIsland/TheMesteriousIsland.pdf'
import { useNavigate } from 'react-router'

const products = [
  {
    id: 'A1',
    title: 'Journey to the Center of the Earth',
    author: 'Jules Verne',
    price: 12,
    description: 'An adventure novel about a journey to the Earth\'s core.',
    imagesrc: JourneyToCenterOfEarthPhoto,
    pdfsrc: JourneyToCenterOfEarthPdf, // Added PDF address
    addedToCart: false, 
  },
  {
    id: 'A2',
    title: 'Twenty Thousand Leagues Under the Sea',
    author: 'Jules Verne',
    price: 12,
    description: 'A classic science fiction novel about underwater exploration.',
    imagesrc: LeaguesUndertheSeaPhoto,
    pdfsrc: LeaguesUndertheSeahPdf, // Added PDF address
    addedToCart: false, 
  },
  {
    id: 'A3',
    title: 'A Princess of Mars',
    author: 'Edgar Rice Burroughs',
    price: 12,
    description: 'The first book in the Barsoom series, featuring John Carter on Mars.',
    imagesrc: PrincessOfMarsPhoto,
    pdfsrc: PrincessOfMarsPdf, // Added PDF address
    addedToCart: false,
  },
  {
    id: 'A4',
    title: 'The Count of Monte Cristo',
    author: 'Alexandre Dumas',
    price: 12,
    description: 'A tale of adventure and revenge set in post-Napoleonic France.',
    imagesrc: TheCountOfMonteCristoPhoto,
    pdfsrc: TheCountOfMonteCristoPdf, // Added PDF address
    addedToCart: false,
  },
  {
    id: 'A5',
    title: 'The Mysterious Island',
    author: 'Jules Verne',
    price: 12,
    description: 'A novel about castaways on an uncharted island with many secrets.',
    imagesrc: TheMesteriousIslandPhoto,
    pdfsrc: TheMesteriousIslandPdf, // Added PDF address
    addedToCart: false, 
  },
];

  



function AdventureBooks() {
    const navigate =  useNavigate()
    const handleClick = (product) => {
        navigate('/productDetail', { state: { product } });
    }
    return (
      <div className="h-auto flex flex-wrap justify-center">
          
  

          {products.map((product) => (
              <div
                  key={product.id}
                  className="w-[45%] h-auto m-2 bg-white shadow-lg rounded-lg overflow-hidden pc:w-[20%]"
                  onClick={() => handleClick(product)}
              >
                  <img
                      className="w-full h-60 object-cover transition-transform duration-500 hover:scale-110  "
                      src={product.imagesrc}
                      alt={product.title}
                  />
                  <div className="p-2">
                      <h1 className="text-xl font-semibold mb-2">{product.title} by {product.author}</h1>
                      <h1 className="text-xl font-semibold">Price: <span className="text-lg font-normal">${product.price}</span></h1>
                  </div>
              </div>
          ))}
          </div>
  );
}

export default AdventureBooks

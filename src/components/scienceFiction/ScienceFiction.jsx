import React from 'react'



import AfterTheCurePhoto from '../../assets/ScienceFiction/AfterTheCure/AfterTheCure.jpg'
import AfterTheCurePdf from '../../assets/ScienceFiction/AfterTheCure/AfterTheCure.pdf'

import AlmuricPhoto from '../../assets/ScienceFiction/Almuric/Almuric.jpg'
import AlmuricdPdf from '../../assets/ScienceFiction/Almuric/Almuric.pdf'

import AtTheEarthcorePhoto from '../../assets/ScienceFiction/AtTheEarthcore/AtTheEarthcore.jpg'
import AtTheEarthcorePdf from '../../assets/ScienceFiction/AtTheEarthcore/AtTheEarthcore.pdf'

import TheAliensPhoto from '../../assets/ScienceFiction/TheAliens/TheAliens.jpg'
import TheAliensPdf from '../../assets/ScienceFiction/TheAliens/TheAliens.pdf'

import TheInvisibleManPhoto from '../../assets/ScienceFiction/TheInvisibleMan/TheInvisibleMan.jpg'
import TheInvisibleMandPdf from '../../assets/ScienceFiction/TheInvisibleMan/TheInvisibleMan.pdf'
import { useNavigate } from 'react-router'

const products = [
  {
    id: 'S1',
    title: 'After the Cure',
    author: 'Deirdre Gould',
    price: 12,
    description: 'A post-apocalyptic novel exploring life after a pandemic cure.',
    imagesrc: AfterTheCurePhoto,
    pdfsrc: AfterTheCurePdf,
    addedToCart: false,
  },
  {
    id: 'S2',
    title: 'Almuric',
    author: 'Robert E. Howard',
    price: 12,
    description: 'A science fiction novel about a man transported to a barbaric planet.',
    imagesrc: AlmuricPhoto,
    pdfsrc: AlmuricdPdf,
    addedToCart: false,
  },
  {
    id: 'S3',
    title: 'At the Earth\'s Core',
    author: 'Edgar Rice Burroughs',
    price: 12,
    description: 'An adventure novel about a journey to a prehistoric world at the center of the Earth.',
    imagesrc: AtTheEarthcorePhoto,
    pdfsrc: AtTheEarthcorePdf,
    addedToCart: false,
  },
  {
    id: 'S4',
    title: 'The Aliens',
    author: 'Murray Leinster',
    price: 12,
    description: 'A science fiction novel exploring first contact with alien species.',
    imagesrc: TheAliensPhoto,
    pdfsrc: TheAliensPdf,
    addedToCart: false,
  },
  {
    id: 'S5',
    title: 'The Invisible Man',
    author: 'H.G. Wells',
    price: 12,
    description: 'A novel about a scientist who discovers how to become invisible.',
    imagesrc: TheInvisibleManPhoto,
    pdfsrc: TheInvisibleMandPdf,
    addedToCart: false,
  },
];

  


function ScienceFiction() {
    const navigate = useNavigate()
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

export default ScienceFiction

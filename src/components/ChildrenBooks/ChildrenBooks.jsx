import React from 'react';
import { useNavigate } from 'react-router-dom';

import AlibiPhoto from '../../assets/Childrens/Alibi/Alibi.jpg';
import AlibiPdf from '../../assets/Childrens/Alibi/Alibi.pdf';

import ChessAndCheckerPhoto from '../../assets/Childrens/ChessAndChecker/ChessAndChecker.jpg';
import ChessAndCheckerPdf from '../../assets/Childrens/ChessAndChecker/ChessAndChecker.pdf';

import JackWinterPhoto from '../../assets/Childrens/JackWinter/JackWinter.jpg';
import JackWinterPdf from '../../assets/Childrens/JackWinter/JackWinter.pdf';

import ThingsToMakePhoto from '../../assets/Childrens/ThingsToMake/ThingsToMake.jpg';
import ThingsToMakePdf from '../../assets/Childrens/ThingsToMake/ThingsToMake.pdf';

import WhatShallWeDoNowPhoto from '../../assets/Childrens/WhatShallWeDoNow/WhatShallWeDoNow.jpg';
import WhatShallWeDoNowPdf from '../../assets/Childrens/WhatShallWeDoNow/WhatShallWeDoNow.pdf';

const products = [
  {
    id: 'Ch1',
    title: 'Alibi',
    author: 'Deirdre Gould',
    price: 12,
    description: 'A post-apocalyptic novel exploring life after a pandemic cure.',
    imagesrc: AlibiPhoto,
    pdfsrc: AlibiPdf,
    addedToCart: false,
  },
  {
    id: 'Ch2',
    title: 'Chess And Checker',
    author: 'Robert E. Howard',
    price: 12,
    description: 'A science fiction novel about a man transported to a barbaric planet.',
    imagesrc: ChessAndCheckerPhoto,
    pdfsrc: ChessAndCheckerPdf, 
    addedToCart: false,
  },
  {
    id: 'Ch3',
    title: 'Jack Winter',
    author: 'Edgar Rice Burroughs',
    price: 12,
    description: 'An adventure novel about a journey to a prehistoric world at the center of the Earth.',
    imagesrc: JackWinterPhoto,
    pdfsrc: JackWinterPdf,
    addedToCart: false,
  },
  {
    id: 'Ch4',
    title: 'Things To Make',
    author: 'Murray Leinster',
    price: 12,
    description: 'A science fiction novel exploring first contact with alien species.',
    imagesrc: ThingsToMakePhoto,
    pdfsrc: ThingsToMakePdf, 
    addedToCart: false,
  },
  {
    id: 'Ch5',
    title: 'What Shall We Do Now',
    author: 'H.G. Wells',
    price: 12,
    description: 'A novel about a scientist who discovers how to become invisible.',
    imagesrc: WhatShallWeDoNowPhoto,
    pdfsrc: WhatShallWeDoNowPdf,
    addedToCart: false,
  },
];

function ChildrenBooks() {
  const navigate = useNavigate();

  const handleClick = (product) => {
    navigate('/productDetail', { state: { product } });
  };

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

export default ChildrenBooks;

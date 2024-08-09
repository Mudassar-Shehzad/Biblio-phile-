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
        id: 'S2',
        title: 'Almuric',
        author: 'Robert E. Howard',
        price: 12,
        description: 'A science fiction novel about a man transported to a barbaric planet.',
        imagesrc: AlmuricPhoto,
        addedToCart: false,
    },
    {
        id: 'S3',
        title: 'At the Earth\'s Core',
        author: 'Edgar Rice Burroughs',
        price: 12,
        description: 'An adventure novel about a journey to a prehistoric world at the center of the Earth.',
        imagesrc: AtTheEarthcorePhoto,
        addedToCart: false,
    },
    {
        id: 'S4',
        title: 'The Aliens',
        author: 'Murray Leinster',
        price: 12,
        description: 'A science fiction novel exploring first contact with alien species.',
        imagesrc: TheAliensPhoto,
        addedToCart: false,
    },
    {
        id: 'S5',
        title: 'The Invisible Man',
        author: 'H.G. Wells',
        price: 12,
        description: 'A novel about a scientist who discovers how to become invisible.',
        imagesrc: TheInvisibleManPhoto,
        addedToCart: false,
    },
];
function HSpecialOffers() {
    const navigate = useNavigate();

    const handleClick = (product) => {
        navigate('/productDetail', { state: { product } });
    };
    return (
        <div className="w-auto h-auto flex flex-wrap justify-center ">
            {products.map((product) => (
                <div
                    key={product.id}
                    className="w-[44%] pc:w-[20%] mx-1 my-3 bg-white shadow-lg rounded-lg overflow-hidden"
                    onClick={() => handleClick(product)}
                >
                    <img
                        className="w-full h-52 pc:h-72 object-cover transition-transform duration-500 hover:scale-110"
                        src={product.imagesrc}
                        alt={product.title}
                    />
                    <div className="p-2">
                        <h1 className="text-lg font-semibold mb-2">{product.title} by {product.author}</h1>
                        <h1 className="text-lg font-semibold">Price: <span className="text-lg font-normal">${product.price}</span></h1>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default HSpecialOffers

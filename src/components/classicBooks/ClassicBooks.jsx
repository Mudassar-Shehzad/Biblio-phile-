
import React from 'react';
import { useNavigate } from 'react-router-dom';
import frankenstienPhoto from '../../assets/classicBooks/frankenstien/frenkenstien.png'
import frankenstienPdf from '../../assets/classicBooks/frankenstien/frenkenstien.pdf'
import prideAndPrejudicePhoto from '../../assets/classicBooks/prideandprejudice/prideAndPrejudice.jpg'
import prideAndPrejudicePdf from '../../assets/classicBooks/prideandprejudice/prideandprejudice.pdf'
import thusSpakePhoto from '../../assets/classicBooks/thusSpake/thusSpake.png'
import thusSpakePdf from '../../assets/classicBooks/thusSpake/thusSpake.pdf'
import JaneEyrePhoto from '../../assets/classicBooks/JaneEyre/JaneEyre.jpg'
import JaneEyrePdf from '../../assets/classicBooks/JaneEyre/JaneEyre.pdf'
import TheApocryphalPhoto from '../../assets/classicBooks/TheApocryphal/TheApocryphal.jpg'
import TheApocryphalPdf from '../../assets/classicBooks/TheApocryphal/TheApocryphal.pdf'
import WarandPeacePhoto from '../../assets/classicBooks/WarandPeace/warAndPeace.jpg'
import WarandPeacePdf from '../../assets/classicBooks/WarandPeace/warAndPeace.pdf'
const products = [
    {
        id: 'C1',
        title: 'The Apocryphal',
        author: 'F. Scott Fitzgerald',
        price: 12,
        description: 'A classic novel about love and society.',
        imagesrc: TheApocryphalPhoto,
        pdfsrc: TheApocryphalPdf, // Added PDF address
        addedToCart: false,
    },
    {
        id: 'C2',
        title: 'Jane Eyre',
        author: 'Charlotte Brontë',
        price: 12,
        description: 'A classic novel about love and society.',
        imagesrc: JaneEyrePhoto,
        pdfsrc: JaneEyrePdf, // Added PDF address
        addedToCart: false,
    },
    {
        id: 'C3',
        title: 'War and Peace',
        author: 'Leo Tolstoy',
        price: 12,
        description: 'A classic novel about love and society.',
        imagesrc: WarandPeacePhoto,
        pdfsrc: WarandPeacePdf, // Added PDF address
        addedToCart: false,
    },
    {
        id: 'C4',
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        price: 12,
        description: 'A classic novel about love and society.',
        imagesrc: prideAndPrejudicePhoto,
        pdfsrc: prideAndPrejudicePdf, // Added PDF address
        addedToCart: false,
    },
    {
        id: 'C5',
        title: 'Frankenstein',
        author: 'Mary Shelley',
        price: 12,
        description: 'A classic novel about love and society.',
        imagesrc: frankenstienPhoto,
        pdfsrc: frankenstienPdf, // Added PDF address
        addedToCart: false,
    },
    {
        id: 'C6',
        title: 'Thus Spake Zarathustra',
        author: 'Friedrich Nietzsche',
        price: 12,
        description: 'A philosophical work on the idea of eternal recurrence.',
        imagesrc: thusSpakePhoto,
        pdfsrc: thusSpakePdf, // Added PDF address
        addedToCart: false,
    },
];




function ClassicBooks() {

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

export default ClassicBooks;

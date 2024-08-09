
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useBook } from '../context/BooksContext';

function ProductDetail() {
  const { addToCart, isProductInCart } = useBook();
  const location = useLocation();
  const { product } = location.state || {};

  if (!product) {
    return <p>No product details available.</p>;
  }



  const handleAddToCart = () => {
    addToCart(product.id, product.imagesrc, product.title, product.author, product.price, product.pdfsrc);

    console.log(product.id)
  };



  return (
    <div className="flex w-auto  mx-auto p-4 flex-col  pc:flex-row">
      <img
        className="w-[95%] h-[85vmin] pc:w-[30%] pc:h-[25rem] object-cover mr-8"
        src={product.imagesrc}
        alt={product.title}
      />
      <div>
        <h1 className="text-2xl font-bold mb-1 pc:text-4xl pc:mb-4">{product.title}</h1>
        <h2 className="text-lg mb-1 pc:mb-2"><span className='font-bold'>Written by: </span>{product.author}</h2>
        <p className="text-lg mb-1 pc:mb-2"><span className='font-bold'>Description: </span>{product.description}</p>
        <p className="text-md mb-1 pc:mb-2"><span className='font-bold'>Language: </span> {product.language}</p>
        <p className="text-md mb-1 pc:mb-2"><span className='font-bold'>Length: </span> {product.length} pages</p>
        <p className="text-xl font-semibold mb-4 pc:mb-2">Price: <span className=''>${product.price}</span></p>
        <button
          disabled={isProductInCart(product.id)}
          className={`text-black border-[1.5px] border-gray-700 hover:${!isProductInCart(product.id) ? 'bg-gray-600' : ''} hover:${isProductInCart(product.id) ? 'text-white' : ''} p-2 mb-4 mx-2 pc:my-7`} onClick={handleAddToCart}
        >
          {isProductInCart(product.id) ? 'Added to Cart' : 'Add to Cart'}
        </button>
        <button
          className="bg-gray-600 text-white hover:text-black hover:bg-white hover:border-gray-700 hover:border-[1.5px] p-2 mx-2"
          onClick={() => { } }
        >
          Purchase
        </button>
        {/* <h2>{product.pdfsrc}</h2> */}
      </div>
    </div>
  );
}

export default ProductDetail;

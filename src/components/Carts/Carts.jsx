import React, { useState } from 'react';
import { useBook } from '../../context/BooksContext';
import './Carts.css';
import { useLocation } from 'react-router';

function Carts() {
    const { carts, removeCart } = useBook();
    const location = useLocation();
    const { product } = location.state || {};

    const [isCheckoutVisible, setIsCheckoutVisible] = useState(false);

    const handleRemoveCart = (cart) => {
        removeCart(cart.id);
        if (product) {
            product.addedToCart = false;
        }
    };

    const handleCheckoutClick = () => {
        setIsCheckoutVisible(true);
    };

    const handleCloseCheckout = () => {
        setIsCheckoutVisible(false);
    };

    return (
        <div className='w-full h-[80%] pc:h-[100%] flex justify-around p-3  '>
            <div className='w-[60%] pc:h-[80vmin] overflow-y-scroll scrollbar-hidden border-r-2  '>
                {carts.length === 0 ? (
                    <h1 className='text-center text-xl font-semibold'>No items in the cart</h1>
                ) : (
                    <>
                        {carts.map((cart) => (
                            <div key={cart.id} className='flex border-b-[1.5px] p-5 border-gray-500 mb-4 flex-col pc:flex-row  w-auto pc:space-x-4'>
                                <img
                                    className='h-60 w-[100%] pc:w-auto object-cover'
                                    src={cart.image}
                                    alt={cart.title}
                                />
                                <div className='flex-1 flex flex-col justify-between'>
                                    <div>
                                        <h1 className='text-xl font-bold'>Title: {cart.title}</h1>
                                        <h2 className='text-lg'>Author: {cart.author}</h2>
                                        <p className='text-md mb-2'>Language: English</p>
                                        <p className='text-md mb-2'>Description: {cart.description}</p>
                                        <div>
                                            <h1 className='text-2xl'>${cart.price}</h1>
                                        </div>
                                    </div>
                                    <div>
                                        <h1
                                            onClick={() => handleRemoveCart(cart)}
                                            className='underline hover:cursor-pointer text-[1rem] hover:text-red-700'
                                        >
                                            Remove
                                        </h1>
                                        <a
                                            href={cart.pdfsrc}
                                            download={`${cart.title}_Catalog.pdf`}
                                            className='bg-green-500 text-white p-2 rounded mt-4 inline-block text-center hover:bg-green-600 cursor-pointer'
                                            onClick={() => console.log(`Downloading PDF from: ${cart.pdfsrc} and ${cart.title}`)}
                                        >
                                            Download PDF
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </>
                )}
            </div>
        

                <div className='bg-white p-6 rounded border-2 hidden pc:block'>

                    <h2 className='text-xl font-bold mb-4'>Payment</h2>
                    <form>
                        <div className='mb-4'>
                            <label htmlFor='cardNumber' className='block text-sm font-semibold mb-2'>Card Number</label>
                            <input
                                type='text'
                                id='cardNumber'
                                placeholder='1234 5678 9012 3456'
                                className='w-full p-2 border border-gray-400 rounded'
                                required
                            />
                        </div>
                        <div className='mb-4'>
                            <label htmlFor='expiryDate' className='block text-sm font-semibold mb-2'>Expiry Date</label>
                            <input
                                type='text'
                                id='expiryDate'
                                placeholder='MM/YY'
                                className='w-full p-2 border border-gray-400 rounded'
                                required
                            />
                        </div>
                        <div className='mb-4'>
                            <label htmlFor='cvv' className='block text-sm font-semibold mb-2'>CVV</label>
                            <input
                                type='text'
                                id='cvv'
                                placeholder='123'
                                className='w-full p-2 border border-gray-400 rounded'
                                required
                            />
                        </div>
                        <button
                            type='submit'
                            className='w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600'
                        >
                            Pay Now
                        </button>
                    </form>
                </div>
            <div className='text-center  w-[40%] pc:hidden'>
                <button onClick={handleCheckoutClick} className='bg-gray-500 text-white p-2 rounded hover:bg-blue-600'>
                    CheckOut
                </button>
            </div>

            {isCheckoutVisible && (
                <div className='fixed inset-0 bg-gray-800 bg-opacity-90 flex items-center justify-center'>
                    <div className='bg-white p-6 rounded w-[90%] max-w-md relative'>
                        <button
                            onClick={handleCloseCheckout}
                            className='absolute top-2 right-2 text-red-500'
                        >
                            &times;
                        </button>
                        <h2 className='text-xl font-bold mb-4'>Payment</h2>
                        <form>
                            <div className='mb-4'>
                                <label htmlFor='cardNumber' className='block text-sm font-semibold mb-2'>Card Number</label>
                                <input
                                    type='text'
                                    id='cardNumber'
                                    placeholder='1234 5678 9012 3456'
                                    className='w-full p-2 border border-gray-400 rounded'
                                    required
                                />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor='expiryDate' className='block text-sm font-semibold mb-2'>Expiry Date</label>
                                <input
                                    type='text'
                                    id='expiryDate'
                                    placeholder='MM/YY'
                                    className='w-full p-2 border border-gray-400 rounded'
                                    required
                                />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor='cvv' className='block text-sm font-semibold mb-2'>CVV</label>
                                <input
                                    type='text'
                                    id='cvv'
                                    placeholder='123'
                                    className='w-full p-2 border border-gray-400 rounded'
                                    required
                                />
                            </div>
                            <button
                                type='submit'
                                className='w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600'
                            >
                                Pay Now
                            </button>
                        </form>
                    </div>
                </div>
            )}


        </div>
    );
}

export default Carts;

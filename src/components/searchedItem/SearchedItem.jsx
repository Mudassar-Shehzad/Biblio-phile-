import React from 'react';
import { useLocation, useNavigate } from 'react-router';

function SearchedItem() {
    const location = useLocation();
    const { filteredItems = [] } = location.state || {};
    console.log("Filtered Items in SearchedItem:", filteredItems); // Debugging

    const navigate = useNavigate()
    const handleClick = (product) => {
        navigate('/productDetail', { state: { product } });
    }
    return (
        <div className="h-auto flex flex-wrap px-8 py-10">
            {filteredItems.length === 0 ?
            
                (<div className='h-[50vmin]'>

                <h1 className='text-center text-xl font-semibold'>We are sorry! This book is not availabe yet. Coming soon...</h1>
                </div>
                ) :
                (filteredItems.map((product) => (
                    <div
                        key={product.id}
                        className="w-60 h-auto m-2 bg-white shadow-lg rounded-lg overflow-hidden"
                    onClick={() => handleClick(product)}
                    >
                        <img
                            className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                            src={product.imagesrc}
                            alt={product.title}
                        />
                        <div className="p-2">
                            <h1 className="text-xl font-semibold mb-2">{product.title} by {product.author}</h1>
                            <h1 className="text-xl font-semibold">Price: <span className="text-lg font-normal">${product.price}</span></h1>
                        </div>
                    </div>
                )))
            }
        </div>
    );
}

export default SearchedItem;

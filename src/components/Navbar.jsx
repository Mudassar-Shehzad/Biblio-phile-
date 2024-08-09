
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import { useBook } from '../context/BooksContext';
import logo from '../assets/logo.png';

function Navbar() {
  const { allItems = [] } = useBook();
  console.log("All Items:", allItems);

  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchedValue = searchValue.toLowerCase().replace(/\s+/g, '');
    const filteredItems = allItems.filter(item =>
      item.title.toLowerCase().replace(/\s+/g, '').includes(searchedValue) ||
      item.author.toLowerCase().replace(/\s+/g, '').includes(searchedValue)
    );
    setIsSearchOpen(false)

    console.log("Filtered Items:", filteredItems);
    navigate('/searchedItem', { state: { filteredItems } });
  };

  return (
    <div className="w-full flex justify-between items-center px-4 py-3 border-b-[0.5px] border-gray-300 relative">
      <div className="flex items-center pc:hidden">
        <button onClick={() => setIsNavOpen(!isNavOpen)} className="text-gray-500 text-lg focus:outline-none">
          <FaBars size={24} />
        </button>
      </div>

      <div className="flex items-center">
        <Link to=''>
          <img className='h-[6.5rem] w-[8rem]' src={logo} alt="Bibliophile Logo" />
        </Link>
      </div>

      <div className={`fixed top-0 left-0 w-full h-32 bg-white transition-all duration-300 z-50 ${isNavOpen ? 'block' : 'hidden'} pc:hidden`}>
        <div className="absolute top-4 right-4">
          <button onClick={() => setIsNavOpen(false)} className="text-gray-500 text-lg focus:outline-none">
            <FaTimes size={28} />
          </button>
        </div>
        <div className="flex flex-col items-left p-3 justify-center space-y-3 shadow-lg h-32">
          <Link to='/' className="text-[#333] hover:text-[#000] transition-all duration-300 text-xl">Home</Link>
          <Link to='about' className="text-[#333] hover:text-[#000] transition-all duration-300 text-xl">About</Link>
          <Link to='contact' className="text-[#333] hover:text-[#000] transition-all duration-300 text-xl">Contact</Link>
        </div>
      </div>

      <div className='hidden pc:block'>
        <ul className='space-x-5 text-xl flex'>
          <li><Link to='' className='hover:underline'>Home</Link></li>
          <li><Link to='about' className='hover:underline'>About</Link></li>
          <li><Link to='contact' className='hover:underline'>Contact</Link></li>
        </ul>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative  justify-center content-center pt-1 hidden pc:flex">
          {isSearchOpen ? (
            <form className="flex items-center w-52" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Search"
                className="w-full border border-gray-300 rounded-full py-2 px-4 focus:outline-none"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <button type="submit" className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <FaSearch className="text-gray-500" />
              </button>
              <button
                type="button"
                onClick={() => setIsSearchOpen(false)}
                className="absolute right-10 top-1/2 transform -translate-y-1/2"
              >
                <FaTimes className="text-gray-500" />
              </button>
            </form>
          ) : (
            <button
              onClick={() => setIsSearchOpen(true)}
              className="focus:outline-none pc:mr-5 pc:hover:text-gray-700 transition-all duration-300"
            >
              <FaSearch size={23} className="text-gray-500 hover:text-gray-700" />
            </button>
          )}
        </div>

        <div className="flex pc:hidden">
          <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="focus:outline-none">
            <FaSearch className="text-gray-500" />
          </button>
          {isSearchOpen && (
            <div className={`fixed top-0 left-0 w-full h-32 shadow-lg bg-white transition-all duration-300 z-50 ${isSearchOpen ? 'block' : 'hidden'}`}>
              <div className="absolute top-4 right-4">
                <button onClick={() => setIsSearchOpen(false)} className="text-gray-500 text-lg focus:outline-none">
                  <FaTimes size={28} />
                </button>
              </div>
              <form className="flex items-center justify-center h-full" onSubmit={handleSubmit}>
                <div className="relative w-52">
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full border border-gray-300 rounded-full py-2 px-4 focus:outline-none"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                  />
                  <button type="submit" className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <FaSearch className="text-gray-500" />
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>

        {!isSearchOpen && (
          <>
            <Link to='signup' className="flex items-center text-[#333] hover:text-[#000] transition-all duration-300 transform text-lg hover:scale-105">
              <FaUser size={20} className="mr-1" />
            </Link>
            <Link to='/carts'>
              <FaShoppingCart size={20} className="flex items-center text-[#333] hover:text-[#000] transition-all duration-300 transform text-lg hover:scale-105" />
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;


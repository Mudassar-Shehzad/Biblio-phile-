import React, { useRef, useState } from 'react';
import { FaPaperPlane, FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaSkype } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
    const [joiningMessege, setjoiningMessege] = useState('');
    const inputRef = useRef();
    const handleSubmit = (e) => {
        setjoiningMessege('Thanks! for joining');
        e.preventDefault();
        inputRef.current.value = '';
    };
    return (
        <footer className="bg-gray-100">
            <div className="border-t-[1.5px] border-gray-300 p-3">
                <div className="flex flex-col pc:flex pc:justify-between pc:flex-row items-center">
                    <div className="text-center w-52 mb-5">
                        <h1 className="text-4xl mb-5">About Us</h1>
                        <ul>
                            <li className="my-1">
                                <Link
                                    onClick={() => {
                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                    }}
                                    to="about"
                                    className="text-[1.1rem] duration-300 hover:cursor-pointer hover:underline"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li className="my-1">
                                <Link
                                    onClick={() => {
                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                    }}
                                    to="contact"
                                    className="text-[1.1rem] duration-300 hover:cursor-pointer hover:underline"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="text-center mb-5">
                        <h1 className="my-1 text-lg">help@Bibliophile.com</h1>
                        <h1 className="my-1 text-lg">Pakistan, Panjab, Kahuta, ward:6</h1>
                        <h1 className="my-1 text-lg">+923192192679</h1>
                    </div>
                    <div className="w-96 text-center">
                        <h1 className="text-2xl font-bold">Connect With Us</h1>
                        <div className="flex justify-center py-4">
                            <ul className="flex space-x-4">
                                <li>
                                    <FaFacebook size={22} className="text-blue-600 hover:opacity-75 transition-opacity duration-300 hover:cursor-pointer hover:scale-110" />
                                </li>
                                <li>
                                    <FaTwitter size={22} className="text-blue-400 hover:opacity-75 transition-opacity duration-300 hover:cursor-pointer hover:scale-110" />
                                </li>
                                <li>
                                    <FaInstagram size={22} className="text-pink-500 hover:opacity-75 transition-opacity duration-300 hover:cursor-pointer hover:scale-110" />
                                </li>
                                <li>
                                    <FaYoutube size={22} className="text-red-600 hover:opacity-75 transition-opacity duration-300 hover:cursor-pointer hover:scale-110" />
                                </li>
                                <li>
                                    <FaSkype size={22} className="text-blue-500 hover:opacity-75 transition-opacity duration-300 hover:cursor-pointer hover:scale-110" />
                                </li>
                            </ul>
                        </div>
                        <div className='w-[90%]'>
                            
                        <p className="text-[1rem] w-[100%] text-center">
                            Want 20% off ? SignUp for our newsletter. SignUp for SMS alert and be the first to know
                        </p>
                        </div>
                        <form className="flex items-center space-x-2 justify-center py-1 rounded" onSubmit={handleSubmit}>
                            <div className="relative flex">
                                <FaPaperPlane className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    ref={inputRef}
                                    type="email"
                                    placeholder="Enter your email"
                                    className=" p-2 pl-10 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300 flex items-center"
                            >
                                Submit
                            </button>
                        </form>
                        <h1>{joiningMessege}</h1>
                    </div>
                </div>
                <div className="border-t-[1.5px] border-gray-300 flex justify-between items-center p-3 px-4">
                    <p className="text-gray-600 text-base">&copy; 2024 Your Bibliophile. All rights reserved.</p>
                    <ul className="flex space-x-2">
                        <li className="my-1">
                            <Link className="text-[1rem] duration-300 hover:cursor-pointer hover:underline">Security</Link>
                        </li>
                        <li className="my-1">
                            <Link className="text-[1rem] duration-300 hover:cursor-pointer hover:underline">Privacy</Link>
                        </li>
                        <li className="my-1">
                            <Link className="text-[1rem] duration-300 hover:cursor-pointer hover:underline">Terms</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

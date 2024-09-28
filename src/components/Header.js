import React from 'react';

const Header = () => {
  return (
    <header className="bg-white text-black shadow-md p-6 mt-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">AGROAI</h1>
        <nav className='flex items-center space-x-8'>
          <ul className="flex space-x-4 font-semibold">
            <li>
              <a href="#home" className="hover:text-gray-300">Home</a>
            </li>
            <li>
              <a href="#controls" className="hover:text-gray-300">Control</a>
            </li>
            <li>
              <a href="#aboutus" className="hover:text-gray-300">About Us</a>
            </li>
            <li>
              <a href="#ourproducts" className="hover:text-gray-300">Our Products</a>
            </li>
          </ul>
          <div className='flex space-x-2'>
          <button style={{ backgroundColor: '#204E51' }} className="text-white px-4 py-2 font-semibold rounded hover:bg-gray-100">
                Login

            </button>
            <button style={{ borderColor: '#204E51' }} className="bg-green-800 text-white font-semibold px-4 py-2 rounded border-2 hover:bg-green-700">
                 Sign Up
            </button>

          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;


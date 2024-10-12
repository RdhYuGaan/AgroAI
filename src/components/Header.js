import React from 'react';

const Header = () => {
  return (
    <header className="bg-white text-black shadow-md p-6 mt-4 ">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">AGROAI</h1>
        <nav className='flex items-center space-x-12'>
          <ul className="flex space-x-12 font-semibold">
            <li>
              <a href="#home" className="hover:text-gray-300">Home</a>
            </li>
            <li>
              <a href="#controls" className="hover:text-gray-300">Controll</a>
            </li>
            <li>
              <a href="#aboutus" className="hover:text-gray-300">About Us</a>
            </li>
            <li>
              <a href="#ourproducts" className="hover:text-gray-300">Our Product</a>
            </li>
          </ul>
          <div className='flex space-x-2'>
          <button style={{ backgroundColor: '#204E51' }} className="text-white px-4 py-2 font-semibold rounded hover:bg-gray-100">
                Login

            </button>
            <button style={{ backgroundColor: '#FFFFFF' }} className="text-'#204E51' px-4 py-2 font-semibold rounded  hover:bg-gray-100 border-4 border:#204E51 ">
                sign up

            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;


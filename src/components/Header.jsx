import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useShop from '../ShopContext'
import { MdOutlineClose, MdOutlineMenu } from 'react-icons/md';
import imgLog from "../assets/logo shopping cart.jpeg"


const Header = () => {
  const { products } = useShop();
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div>
      <div className="fixed top-0 left-0 right-0 bg-white shadow z-10">
        <div className=' transtion max-w-6xl mx-auto p-4   
  flex justify-between items-center
  max-[800px]:flex-col max-[800px]:items-start max-[800px]:gap-4'>


          {/* Logo + Menu Icon */}
          <div className="w-full flex justify-between items-center">
            <img className='w-[120px] md:ml-[110px]' src={imgLog} alt=""/>
            {isOpen ? (
              <MdOutlineClose className='menu' onClick={() => setIsOpen(false)} />
            ) : (
            <MdOutlineMenu className='menu' onClick={() => setIsOpen(true)} />
            )}

          </div>

          {/* Navigation Links */}
         <ul className={`flex md:ml-[600px] space-x-8 text-gray-700 list-ul  transition-all duration-300
         max-[800px]:flex-col max-[800px]:space-x-0 max-[800px]:space-y-2 max-[800px]:w-full  *:first-letter:  
         ${isOpen ? 'display-list' : ''}
         
         `  }
  
  >
  
            <Link to="/" className='hover:text-pink-600'>Home</Link>
            <Link to="/products" className='hover:text-pink-600'>Product</Link>
            <Link to="/contact" className='hover:text-pink-600'>Contact</Link>
          </ul>

        <div className={`cart  w-full flex md:ml-5 items-center justify-between 
        max-[800px]:flex-row max-[800px]:gap-4 cart ${isOpen ? 'display-cart' : ''}`}>

            {/* Cart Icon */}
            <Link to="/cart">
              <div className='relative '>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6">
                  <path
                    fillRule="evenodd"
                    d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className='absolute top-1 -right-1 bg-pink-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center'>
                  {products.length}
                </span>
              </div>
            </Link>
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header

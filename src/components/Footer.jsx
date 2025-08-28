import React from 'react'

const Footer = () => {
  let currentYear = new Date().getFullYear()
  return (
    <div>
      <div >
        <div className='max-w-6xl mx-auto mt-8 p-16'>
          <p className=' text-center text-gray-800 mb-2 font-semibold'>Copyright &copy;  {currentYear}. All Rights Reserved</p>
          <p className=' text-center text-gray-600'>Developed By Amiin Khan</p>
        </div>
      </div>
    </div>
  )
}

export default Footer

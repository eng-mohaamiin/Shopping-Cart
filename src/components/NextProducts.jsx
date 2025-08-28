import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const NextProducts = () => {
        const initialPage = {
        one: false,
        two: false,
        three: false,
      };
      let [nextPage,setNextPage] = useState(initialPage)
  return (
    <div>
       <div className='flex items-center mt-[-40px]  justify-center gap-4'>
        <Link  to="/"><button className={`btn ${nextPage.one? "bg-pink-600": "bg-gray-300"}  p-2 rounded-md text-white w-14`}   onClick={() => setNextPage({ ...initialPage, one: true })}>1</button> </Link>
        <Link  to="/products/products-part-two"><button className={`btn ${nextPage.two? "bg-pink-600": "bg-gray-300"}  p-2 rounded-md text-white w-14`}   onClick={() => setNextPage({ ...initialPage, two: true })}>2</button> </Link>
       <Link to="/products/products-part-three"><button className={`btn ${nextPage.three? "bg-pink-600": "bg-gray-300"}  p-2 rounded-md text-white w-14`}   onClick={() => setNextPage({ ...initialPage, three: true })}>3</button></Link>
      </div>
    </div>
  )
}

export default NextProducts

import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import ProductLoadingSkeleton from './ProductLoadingSkeleton'
import { Link } from 'react-router-dom'
import FeaturedSkeleton from './FeaturedSkeleton'
import useShop, { shopContext } from '../ShopContext'

const FeaturesProducts = () => {
      const { addToCart } = useShop();
          let context = useContext(shopContext)
      

      let [products, setProducts] = useState([])
        let [Loading, setLaoading] = useState(false)
      

     useEffect(()=>{
        let fetProduccts = async ()=>{
          try{
            // marka data doonista ay  bilaawato loading true ka dhig dadka waxaa usoo bandhigtaa  loading 
            setLaoading(true)
            let {data} = await axios.get("https://dummyjson.com/products?limit=194")
            const lastTenProducts = data.products.slice(95,101);
          setTimeout(() => {
               setProducts(lastTenProducts);
          setLaoading(false)
          }, 1000);
          }catch(e){
            // markey cilad dhacdo loading aan iska xirno ciladda aan aragno 
            setLaoading(false)
            console.log(e)
          }
        }

        // pageka marka la imaado wac function si data usoo aqriyo  
        fetProduccts()
    },[])



    if(Loading) return <FeaturedSkeleton />




















  return (
   
    <>
    {/*--------------------- start select options ------------------------------- */}


    
    {/*---------------------- start products ------------------------------ */}
     <div>
      <div className='max-w-5xl mx-auto mt-8 p-16'>
        <h1 className='text-center text-4xl font-semibold mb-2'>Our Featured Products</h1>
        <h1 className='text-center text-1xl font-sans text-gray-400 mb-7'>Discover our carefully curated collection of premium products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
		{products.length > 0 &&
            products.map((product,index) => (
			<div key={index} className="border border-lg overscroll-hidden shadow-sm hover:shadow-lg transition-shadow duration-200 ease-in lg:w-full md:w-full object-cover lg:h-[435px] md:h-[435]">
        <Link
          to={`/products/product-details/${product.title.replace(/\s+/g, "-")}`}
        >
          <img
            src={product.thumbnail}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
        </Link>
        <div className="p-4">
          <h2 className="font-bold truncate text-[10px] md:text-[18px] lg:text-[18px]  text-xl mb-2">{product.title}</h2>
          <p className="text-gray-600 lg:text-[14px] lg:text-[14px] text-[11px] mb-4 truncate">{product.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-blue-600 font-semibold">
              $0.01
            </span>
            <div className="text-xs text-gray-500">
              {product.stock > 0 ? `${product.stock} in Stock` : "Out of stock"}
            </div>
          </div>
          <div className="mt-4">
            <span className="text-yellow-500">
              {"★".repeat(Math.round(product.rating))}
            </span>
            <span className="text-gray-300">
              {"★".repeat(Math.round(5 - product.rating))}
            </span>
          </div>
         <button className='text-[18px] bg-pink-600 text-white hover:bg-pink-700 duration-200 mt-5 w-full lg:w-full h-[50px] rounded-[10px] '
         onClick={() => context.addToCart(product)}
         >Add To Cart</button>

        </div>
      </div>
	))}
			</div>
      </div>
    </div>
    </>
   
  )
}

export default FeaturesProducts

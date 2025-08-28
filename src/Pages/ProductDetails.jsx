import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import ProductDetailsSkeleton from '../components/ProductDetailsSkeleton'
import useShop, { shopContext } from '../ShopContext'
import { FaUserLarge } from 'react-icons/fa6'

const ProductDetails = () => {
   const { addToCart } = useShop();
    let context = useContext(shopContext)
  
  let navigate = useNavigate()
  // let {name} = useParams()
  	const [product, setProduct] = useState(null);
    // changing scroll images 
      let [mainImage,  setMain] = useState(null)

  // console.log("this is id",name)

// url ayey kuu haysaa useParams 
let { productSlug } = useParams();

// waxay kusoo celineysa ereyga ugu horeeya ee product name 
let id = productSlug.split("-")[0];
// console.log("the changing id",id)

// console.log("this is mathedproduct",product)
useEffect(() => {
  const getProduct = async () => {
    try {
      const { data } = await axios.get("https://dummyjson.com/products?limit=194");
      
      const matchedProduct = data.products.find(
        (item) => item.title.replace(/\s+/g, '-') === productSlug
      );
      const lastTenProducts = data.products.slice(194);
      // waxay kuu heysaa xogta product lagu soo dhuftay 
      setProduct(matchedProduct);
      setMain(matchedProduct.thumbnail)
      
    } catch (e) {
      console.log(e);
    }
    
  };
  

  getProduct();
}, [productSlug]);


if(!product)  return <ProductDetailsSkeleton />











  return (
    
    product && (
   <div className='bg-[whitesmoke]' >
     <div className=' mt-8 p-5 '>

      <div className='p-4 md:p-8 ' >
        {/* navigate -1 means mesha ka imaaday ku laawo  */}
        <button onClick={()=> navigate(-1)}  className="mb-4 bg-pink-600 text-white px-4 py-2 rounded-lg shadow  hover:bg-pink-700 transition-colors duration-200">
					← Go Back
				</button>
        
        {/* container flex  */}
        <div className='lg:flex gap-10 mb-32  '>
          {/* container one  */}
          <div className='md:w-full lg:w-1/2 h-[535px] w-full  pr-4 mb-6 md:mb-0 rounded-[10px] bg-white p-5 shadow-lg '>
          <img className='w-full lg:h-96  md:h-[580px] h-[200px] mb-6 object-cover rounded-lg ' src={mainImage} alt="fdas"/>
          {/* image  galleries  */}
          <div className="flex mt-4 space-x-2 overflow-x-auto">
							{product?.images?.map((image, index) => (
								<img 
                onClick={() => setMain(image)}
                className={`w-24 object-cover h-24 rounded-lg shadow cursor-pointer 
              ${mainImage === image ? 'border-4 border-pink-500' : 'border'}`}
              key={index}
              src={image}
              />

							))}
						</div>
          </div>

          {/* scroll  */}
          <div className='md-w-1/2 p-l-4'>
          <h1 className="lg:text-3xl lg:text-left font-bold mb-6 text-center md:mt-6">{product.title}</h1>
          <div className='flex justify-between items-center mb-4'>
            {/* <span className='text-pink-600 font-semibold text-2xl'>${product.price.toFixed()}</span> */}
            
          </div>
          <div className="mb-4">
							<span className="text-yellow-500">
								{"★".repeat(Math.round(product.rating))}
							</span>
							<span className="text-gray-300">
								{"★".repeat(Math.round(5 - product.rating))}
							</span>
						</div>
            {/* price  and sctocks  */}
            <div className='bg-pink-200 xl:w-[650px]  lg:p-5 p-2 rounded-[7px] mb-6'>
              <div className='lg:text-4xl md:text-3xl text-[23px] text-pink-600 font-semibold mb-3'>$0.01</div>
            <div  className=' lg:text-[18px] md:text-[14px] text-[12px] text-[#4c75e6]'>{product.stock > 0
									? `${product.stock} in Stock`
									: "Out of stock"}  </div>
            </div>
            <h2 className='mb-4'>This is {product.title}</h2>
          <div>
            <button className="bg-pink-600 w-full text-white px-5 py-2  rounded-lg shadow h-[55px] text-xl hover:bg-pink-900 transition-colors duration-200"
          
         onClick={() => context.addToCart(product)}>
            
            Add To Cart</button>
          </div>
          <div className=' flex items-center gap-3 border mt-5 lg:p-10 p-5  rounded-[7px] mb-6'>
            <FaUserLarge className='bg-pink-300 w-[40px] h-[40px] rounded-full p-2' /> 
            <div>
              <p className='text-[18px] font-semibold'>Amiin@gmail.com</p>
              <p className='text-[16px] text-gray-600'>Joined: 24/8/2025</p>
            </div>
          </div>
          </div>   
             
        </div>
        
        
      </div>
    </div>
   </div>
    )
  )
}

export default ProductDetails

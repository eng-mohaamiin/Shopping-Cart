import React, { useContext } from "react";
import { Link } from "react-router-dom";
import useShop, { shopContext } from '../ShopContext'

const ProductItem = ({ product }) => {
    const { addToCart } = useShop();
    let context = useContext(shopContext)

  return (
   <>
    <div >
      <div className="border border-lg overscroll-hidden shadow-sm hover:shadow-lg transition-shadow duration-200 ease-in lg:w-full md:w-full object-cover lg:h-[435px] md:h-[435]">
        {/* <Link to={`/products/product-details/${product.id}-${product.title}`}> */}

        {/* replace(/\s+/g, '-')} waxaa laga wadaa product.title wax walbo oo  lasoo geliyo
                 space u dhaxeysii tusaale ahaaa 
                 product.titlte waxaan dhahay Apple iPhone 14 marka waxaa loo badalayaa sidaan 
                 Apple-iPhone-14" 
                 
                 
                 */}
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
          <h2 className="font-bold truncate text-[13px] md:text-[18px] lg:text-[18px]  text-xl mb-2">{product.title}</h2>
          <p className="text-gray-600 mb-4 truncate">{product.description}</p>
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
    </div>
   </>
    
  );
};

export default ProductItem;

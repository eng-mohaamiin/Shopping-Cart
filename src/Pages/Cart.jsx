import React, { useContext } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import Payment from "../components/Payment";
import useShop, { shopContext } from "../ShopContext";

const Cart = () => {
  let  {total} =  useShop()
  let { products, updateProductQuantity, removeFromCart } = useShop();

  return (
   <div className="bg-[whitesmoke] pb-[300px]">
     <div className="md:max-w-7xl  md:mx-auto mt-8 md:p-16 p-5  ">
      <h2>{products.length > 0 ? "Your Cart Items": "Your cart is empty right now please go a head and add some items"}</h2>
        
          {/* start cart page  */}
          {/* flex container  */}
        
         <div className="lg:flex gap-20 justify-between items-start">
  <div className="flex flex-col gap-5 lg:w-full">
    {products.map((product, index) => (
      <div key={index} className="bg-white shadow-sm p-7 
 rounded-[10px] w-full">
        {/* start next container flex  */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          {/* container price quantity and product name */}
          <div className="lg:flex items-center gap-5">
            <img
              className="w-24 h-24 object-cover rounded-lg"
              src={product.thumbnail}
              alt={product.title}
            />
            {/* container price quantity and title */}
            <div>
              <h3>{product.title}</h3>
              <span className="text-lg font-semibold text-pink-600">
                ${total}
              </span>
              {/* container quantity */}
              <div>
                <button onClick={() => updateProductQuantity(product, product.quantity - 1)}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >-</button>
                
                <span className="px-4">{product.quantity}</span>
                <button
                  onClick={() => updateProductQuantity(product, product.quantity + 1)}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* delete button */}
          <div className=" md:ml-0 ml-[280px]   mt-7">
            <button
              onClick={() => removeFromCart(product)}
              className="text-red-500 hover:text-red-700 duration-200 ease-in-out"
            >
              <FaRegTrashCan className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>

  <div className="md:w-1/2  w-[500px] max-[1180px]:w-full
  sm:w-full  lg:mt-0 mt-5  bg-white shadow-sm p-5 lg:sticky lg:top-20 h-fit">
   <h1 className="md:text-2xl font-bold md:text-left text-center text-[20px]">Order Summery</h1>
    <div className="flex justify-between items-center pt-4">
      <p>Subtotal</p>
      <h3 className="text-2xl font-sans">${total}</h3>
   </div>
   {/* part two  */}
   <div className="flex justify-between items-center pt-4">
      <p>Shipping</p>
      <h3 className="text-2xl font-sans">0.00</h3>
   </div>
   {/* part threee  */}
   <div className="flex justify-between items-center pt-4">
      <p>Tax</p>
      <h3 className="text-2xl font-sans pb-3 ">$0.00</h3>
   </div>
   {/* part four  */}
   <div className="flex justify-between items-center pt-2 border-t">
      <p>Total</p>
      <h3 className="text-2xl font-sans text-pink-600 font-bold">${total}</h3>
   </div>
   {/* part five  */}
   <Payment />
  </div>
</div>


        
    </div>
   </div>
   
  );
};

export default Cart;

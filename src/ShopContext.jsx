import React, { createContext, useContext, useEffect, useReducer } from 'react'
import shopReducer, { initialState } from './ShopReducer'

export let shopContext = createContext(initialState)
    // waa meesha data aan available aan ugu dhigi laheyn weeye 

export let ShopProvider = ({ children }) => {
    // data la managegareynaayo waa initialState 
        let [state , dispatch] = useReducer(shopReducer,initialState)
        
        // localStorage 
        useEffect(()=>{
        localStorage.setItem("cart_items", JSON.stringify({total: state.total, products: state.products} ))
    },[state])
        // calculateTotal 
         const calculateTotal = (products) => {
		let total = 0;
		products.forEach((product) => {
            total += 0.01 * product.quantity;
		});

		dispatch({
			type: "CALCULATE_TOTAL_PRICE",
			payload: {
				total,
			},
		});
     };
        // function addtocart 
        let addToCart = (product)=>{
            // stateka products ku jiro ku dul wareeg ka dib mid markaas la marooyo 
            // id-giisa haduu la mid yahay productiga hadda aan kusoo darnay cartiga 
            let productIndex = state.products.findIndex((p)=> p.id === product.id)
            

            let updateProduct = [...state.products]

            // hadii -1  la mid aheyn micnaha wuu ku jiraa productiga 
            // productiga sidiisa usoo celi quanit lee +1 dheh 
            if(productIndex !== -1){
                updateProduct[productIndex] = {
                    ...updateProduct[productIndex],
                    // productiga lasoo helay quantity hal ku dar  
                    quantity : updateProduct[productIndex].quantity+1,
                    price: 0.01,
                }
            }
             
            // hadii minus one haduuu la mid yahay add new product 
            else{
                updateProduct = [
                    // products hore sidood usoo qaat wax haka badalin  
                    ...updateProduct,
                    {
                        // kaliya hal product cusub ku  dar  
                        ...product,
                        quantity : 1,
                        price: 0.01,
                    }
                ]
            }
            calculateTotal(updateProduct)

            dispatch({
                type : "ADD_TO_CART",
                payload:{
                    products: updateProduct
                }
            })
         }


    //  update products 
    
    let updateProductQuantity  = (product, newQuantity)=>{
        const productIndex = state.products.findIndex((p) => p.id === product.id);
		let updateProduct = [...state.products];
		// < 0
		if (newQuantity <= 0) {
			updateProduct = updateProduct.filter((pro) => pro.id !== product.id);
		} else {
			updateProduct[productIndex] = {
				...updateProduct[productIndex],
				quantity: newQuantity,
			};
		}  
		calculateTotal(updateProduct);

		dispatch({
			type: "UPDATE_PRODUCT_QUANTITY",
			payload: {
				products: updateProduct,
			},
		});
    }

    // removeFromCart 
    let removeFromCart = (product)=>{

		const updateProduct = state.products.filter((pro) => pro.id !== product.id);

		calculateTotal(updateProduct);

		dispatch({
			type: "REMOVE_FROM_CART",
			payload: {
				products: updateProduct,
			},
		});
    }

    // clearCart 
    const clearCart = () => {
		dispatch({
			type: "CLEAR_CART",
			payload: {},
		});
	};

  const value = {
		products: state.products,
		total: state.total,
		addToCart,
		updateProductQuantity,
		removeFromCart,
		clearCart,
	};
// return  <shopContext.Provider value={value}>{children}</shopContext.Provider>
	return <shopContext.Provider value={value}>{children}</shopContext.Provider>;

       
}


const useShop = () => {
	const context = useContext(shopContext);
	if (context === undefined) {
		throw new Error("context must be inside shop contetx");
	}
	return context;
};

export default useShop



  



 



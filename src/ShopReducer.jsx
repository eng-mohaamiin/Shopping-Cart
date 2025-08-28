import { useEffect } from "react"

export let initialState = JSON.parse(localStorage.getItem('cart_items')) || {
    products : [],
    total : 0
}

let shopReducer = (state, action)=>{

    

    let {type, payload} = action
    switch(type){
        case  "ADD_TO_CART":
            // hadii uu userka uu add to cart soo dhaho 
            return{
                // soo celi data hore 
                ...state,
                // data cusub ku dar
                products : payload.products

            }
            case "UPDATE_PRODUCT_QUANTITY":
                 return{
                ...state,
                products : payload.products

            }
            case "REMOVE_FROM_CART":
                return{
                    ...state,
                    products: payload.products,
            }
            case  "CALCULATE_TOTAL_PRICE":
                return{
                    ...state,
                    total: payload.total
            }
            case "CLEAR_CART":
                return initialState
            default:
                throw new Error("Unknown Reducer Action: ")

    }
}

export default shopReducer
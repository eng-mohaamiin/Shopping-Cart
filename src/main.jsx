import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Aboout from './Pages/Aboout.jsx'
import Contact from './Pages/Contact.jsx'
import Cart from './Pages/Cart.jsx'
import Products from './Pages/Products.jsx'
import ProductDetails from './Pages/ProductDetails.jsx'
import Product from './Pages/Product.jsx'
import { ShopProvider } from './ShopContext.jsx'
import Home from './components/Home.jsx'
import ProductPageTwo from './Pages/ProductPageTwo.jsx'
import ProductsPageThree from './Pages/ProductsPageThree.jsx'
import { Toaster } from 'react-hot-toast'



let routerProvider = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    // index: true,
    children: [
       
      {
        index : true,
        element: <Home  />
      },
        
  {
    path:"/about",
    element: <Aboout />
  },
  {
    path:"/contact",
    element: <Contact />
  },
  {
    path:"/cart",
    element: <Cart />
  },
  {
    path:"/products",
    element: <Products />
  },
  {
    path:"/products/product-details/:productSlug",
    element: <ProductDetails />
  },
  {
    path:"/products/products-part-two",
    element: <ProductPageTwo />
  },
  {
    path:"/products/products-part-three",
    element: <ProductsPageThree />
  },
 
    ]

    
  },

])

createRoot(document.getElementById('root')).render(
 
<>
 <Toaster />
<ShopProvider>
  <RouterProvider router={routerProvider} />
</ShopProvider>
</>
)



import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import productData from "../assets/ProductData.json"
import ProductItem from './ProductItem'
import ProductLoadingSkeleton from './ProductLoadingSkeleton'
import { AiOutlineSearch } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { FaCaretDown } from 'react-icons/fa6'

const ProductList = () => {
      const [dropdownOpen, setDropdownOpen] = useState(false);
  

  // waxay kuu haysaa data micnaha waa data mapka lagu sameynaayo 
  let [products, setProducts] = useState([])
  let [Loading, setLaoading] = useState(false)
  const [sortOption, setSortOption] = useState("");

  	const [searchTerm, setSearchTerm] = useState("");
	const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

	const [originalProducts, setOriginalProducts] = useState([]);
  const searchRef = useRef(null);

   const handleSelect = (value) => {
        setSortOption(value);
        setDropdownOpen(false);
      };


  // get the data and  display  the data 
  let [search, setSearch] = useState("")
  let [debounce, setDebounce] = useState("")
    useEffect(()=>{
        let fetProduccts = async ()=>{
          try{
            // marka data doonista ay  bilaawato loading true ka dhig dadka waxaa usoo bandhigtaa  loading 
            setLaoading(true)
            let {data} = await axios.get("https://dummyjson.com/products?limit=194")
            const lastTenProducts = data.products.slice(174,181);
             setTimeout(() => {
              setProducts(lastTenProducts);
            setOriginalProducts(lastTenProducts)
          // data  soo bandhig loading qari 
          setLaoading(false)
             }, 500);
          }catch(e){
            // markey cilad dhacdo loading aan iska xirno ciladda aan aragno 
            setLaoading(false)
            console.log(e)
          }
        }

        // pageka marka la imaado wac function si data usoo aqriyo  
        fetProduccts()
    },[])

    // setTimeout  of searching 
  












	useEffect(() => {
		const timerId = setTimeout(() => {
			setDebouncedSearchTerm(searchTerm);
		}, 500);
		return () => {
			clearTimeout(timerId);
		};
	}, [searchTerm]);

// userka inta uu ka dhameysanaayo hoshiida searchingareenta 

  useEffect(() => {
		if (debouncedSearchTerm) {
			const fetchProducts = async () => {
				try {
					setLaoading(true);
					const { data } = await axios.get(
						`https://dummyjson.com/products/search?q=${searchTerm}`
					);

              const lastTenProducts = data.products.slice(10,16);
             setProducts(data.products);

					// setProducts(data.products);
					setLaoading(false);
				} catch (e) {
					setLaoading(false);
					console.log(e);
				}
			};
			fetchProducts();
		} else if (debouncedSearchTerm === "") {
  setProducts(originalProducts);
}
	}, [debouncedSearchTerm]);

useEffect(() => {
		if (searchRef.current) {
			searchRef.current.focus();
		}
	}, [products]);

    // hadii loading uu true yahay micnaha data doonisteeda aa lagu maqanyahay 
    if(Loading) return <ProductLoadingSkeleton />




    
  return (
   <>

    {/* container-hero-two  */}
  <div className='mt-[70px] hero  pb-[200px]'>
  <div className='pt-[100px]'>
    <h1 className='text-center font-semibold text-2xl md:text-5xl text-white'>
      Welcome to Our Online Store
    </h1>
    <p className='text-white font-sans text-[20px] md:text-[20px] text-[9px]   pt-5 text-center'>
      Discover amazing products at unbeatable prices
    </p>

    {/* ✅ Wrap input with flex container */}
   <div className="flex justify-center mt-6 relative w-full max-w-sm mx-auto">
  <input value={searchTerm} ref={searchRef}
    type="text"
    placeholder="Search for products..."
    className="
      p-2 pl-10 rounded-[5px] w-5 border shadow focus:outline-none 
      md:w-full w-[95%]
    "
    onChange={(e) => setSearchTerm(e.target.value)}

  />
  <AiOutlineSearch className="absolute right-3 top-1/2  -translate-y-1/2 w-5 h-5 text-gray-500" />
</div>


  </div>
</div>













   {/* slect options  */}
   {/* start select option  */}
         <div className='flex justify-between items-center mr-[110px] mt-8 mt-[50px]'>
           <h2 class="text-4xl" style={{opacity: "0"}}>Our Produts</h2>
             <div className="dropdown " >
         <div
           className="dropdown-select bg-white shadow-lg w-[200px] "
           onClick={() => setDropdownOpen(!dropdownOpen)}
         >
           <span className="select text-[18px] ">
             {/* {sortOption || 'Sort by Price'} */}
             Sort by Price
           </span>
           <FaCaretDown className="icon text-[18px]"  />
         </div>
   
         {dropdownOpen && (
            <div
             className={`dropdown-list shadow-lg w-[300px] transition-all duration-300 bg-white absolute mt-2 z-10 rounded
             ${dropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-3'}`}
           >
    
             <div
               className="dropdown-list__item"
               onClick={() => handleSelect('low-to-high')}
             >
               low to high
             </div>
             <div
               className="dropdown-list__item"
               onClick={() => handleSelect('high-to-low')}
             >
               high to low
             </div>
             <div
               className="dropdown-list__item"
               onClick={() => handleSelect('asc')}
             >
               asc
             </div>
             <div
               className="dropdown-list__item"
               onClick={() => handleSelect('desc')}
             >
               desc
             </div>
             <div
               className="dropdown-list__item"
               onClick={() => handleSelect('')}
             >
               Clear
             </div>
           </div>
         )}
       </div>
       
         </div>
   
    {/*  --------------------start products---------------------------------------  */}
    <div className='max-w-5xl mx-auto mt-8 p-16'>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {products.length > 0 && (
      <>
      {
        (() => {
          // select options 
          let sortedProducts = [...products];

          if (sortOption === "low-to-high") {
            sortedProducts.sort((a, b) => a.price - b.price);
          } else if (sortOption === "high-to-low") {
            sortedProducts.sort((a, b) => b.price - a.price);
          }

          else if (sortOption === "asc") {
      // localeCompare
      sortedProducts.sort((a, b) => a.title.localeCompare(b.name));
    } else if (sortOption === "desc") {
      sortedProducts.sort((a, b) => b.title.localeCompare(a.name));
    }

          return sortedProducts.map((product, index) => (
            <ProductItem key={index} product={product} />
          ));
        })()
      }
     
      
    </>
  )}
</div>

    </div>
    
   </>
  )
}

export default ProductList

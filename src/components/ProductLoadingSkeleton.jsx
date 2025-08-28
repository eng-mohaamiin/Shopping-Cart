import React from 'react'

const ProductLoadingSkeleton = () => {
  return (
    <div>
      	<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-[680px]  max-w-5xl mx-auto mt-8 p-16'>
			
			{Array(9)
				.fill()
				.map((_, idx) => (
					<div key={idx} className="rounded-lg overflow-hidden p-4">
						<div className="w-full rounded-sm h-48 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse"></div>
						{/* Price Placeholder */}
						<div className="w-1/2 h-5 mt-2 bg-gradient-to-r m-4  rounded-[4px] from-gray-200 to-gray-300 animate-pulse"></div>
						{/* Title Placeholder */}
						<div className='bg-pink-white shadow-md pb-8'>
						<div className="w-3/4 h-6 mt-4 bg-gradient-to-r m-4 rounded-[4px] from-gray-200 to-gray-300 animate-pulse"></div>
						<div className="w-3/3 h-6 mt-8 bg-gradient-to-r m-4 rounded-[4px] from-gray-200 to-gray-300 animate-pulse h-[50px]"></div>
						</div>










					</div>
				))}
		</div>
    </div>
  )
}

export default ProductLoadingSkeleton

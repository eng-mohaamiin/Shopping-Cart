import React from 'react'
import { FaSpinner } from 'react-icons/fa'

const ProductDetailsSkeleton = () => {
  return (
    <div>
         <div className="flex justify-center items-center py-64">
          <FaSpinner className="animate-spin text-primary text-2xl mr-3" />
          <p className="text-dark-muted">Loading products...</p>
        </div>
    </div>
  )
}

export default ProductDetailsSkeleton

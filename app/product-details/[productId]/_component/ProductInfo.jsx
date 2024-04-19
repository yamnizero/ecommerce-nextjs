import { ShoppingCart } from 'lucide-react'
import React from 'react'

function ProductInfo({product}) {
  return (
    <div className='text-[20px]'>
       {product?.attributes?.title}
       <h2 className='text-[15px] text-gray-400'>
       {product?.attributes?.category}
       </h2>
       <h2 className='text-[15px] mt-5 text-gray-400'>
       {product?.attributes?.description[0]?.children[0].text}
       </h2>
       <h2 className='text-[32px] mt-3 text-primary'>
       ${product?.attributes?.price}
       </h2>
       <button className='flex gap-2 bg-primary hover:bg-teal-600 text-white rounded-lg p-3'>
        <ShoppingCart/>
            Add To Cart 
       </button>
    </div>
  )
}

export default ProductInfo
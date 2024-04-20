import React from 'react'
import Image from 'next/image'

function ProductBanner({product}) {
  return (
    <div className='items-center'>
        <Image
         src={product?.attributes?.banner?.data?.attributes?.url}
         alt='product-details-banner'
         width={400}
         height={400}
         className='rounded-lg'
         />
    </div>
  )
}

export default ProductBanner
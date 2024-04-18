import React from 'react'
import Image from 'next/image'
import {List} from 'lucide-react'

function ProductItem({product}) {
  return (
    <div className='hover:border p-1 hover:shadow-md rounded-md border-teal-400 hover:cursor-pointer ' >
        <Image src={product?.attributes?.banner?.data?.attributes?.url} 
        alt='banner-card' width={400}
         height={350 }
         className='rounded-t-lg h-[170px] object-cover'
         />
         <div className='flex justify-between p-3 items-center bg-gray-50 rounded-b-lg'>
         <div className=''>
           <h2 className='text-black text-[14px] font-medium line-clamp-1'>{product?.attributes?.title}</h2>
           <h2 className='text-gray-400 text-[12px] flex gap-1 items-center'>
           <List className='h-4 w-4' />  {product?.attributes?.category}</h2>

         </div>
         <h2 className='text-black text-[14px] font-medium'>{product?.attributes?.price}</h2>

         </div>
    </div>
  )
}

export default ProductItem
'use client'

import React from 'react'
import { AlertOctagon, BadgeCheck, ShoppingCart } from 'lucide-react'
import SkeletonProductInfo from './SkeletonProductInfo'
import {  useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'


function ProductInfo({ product }) {
  const { user} = useUser();
  const router = useRouter
  const handleAddToCart =()=>{
    if (!user) {
      router.push('/sign-in ')
    }else{
      // logic to add to cart
    }
  }
  return (
    <div>
      {product?.id
        ? <div className='text-[20px]'>
          {product?.attributes?.title}
          <h2 className='text-[15px] text-gray-400'>
            {product?.attributes?.category}
          </h2>
          <h2 className='text-[11px] mt-2'>
            {product?.attributes?.description[0]?.children[0].text}
          </h2>
          <h2 className='text-[11px]  text-gray-500 flex gap-2 mt-2 items-center'>
            {product?.attributes?.instantDelivery ? <BadgeCheck className='w-5 h-5 text-green-500' /> : <AlertOctagon />}
            Eligible For Instant Deliver
          </h2>

          <h2 className='text-[32px] mt-3 text-primary'>
            ${product?.attributes?.price}
          </h2>
          <button onClick={()=>handleAddToCart()} className='flex gap-2 bg-primary hover:bg-teal-600 text-white rounded-lg p-3'>
            <ShoppingCart />
            Add To Cart
          </button>
        </div>
        : <SkeletonProductInfo />
      }


    </div>
  )
}

export default ProductInfo
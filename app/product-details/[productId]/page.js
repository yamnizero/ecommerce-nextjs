'use client'
import BreadCrumb from '@/app/_components/BreadCrumb';
import ProductApis from '@/app/_utils/ProductApis'
import React, { useEffect } from 'react'
import ProductBanner from './_component/ProductBanner';
import ProductInfo from './_component/ProductInfo';

function ProductDetails({params}) {
    useEffect(()=>{
        getProductById_();
    },[params?.productId])
    const getProductById_=()=>{
        ProductApis.getProductById(params?.productId).then(res=>{
            console.log('Product Item',res.data.data)
        })
    }
  return (
    <div className='px-10 md:px-25 py-8'>
      <BreadCrumb />
      <div>
        <ProductBanner />
        <ProductInfo />
      </div>
    </div>
  )
}

export default ProductDetails
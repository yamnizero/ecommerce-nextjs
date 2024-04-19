'use client'
import BreadCrumb from '@/app/_components/BreadCrumb';
import ProductApis from '@/app/_utils/ProductApis'
import React, { useEffect, useState } from 'react'
import ProductBanner from './_component/ProductBanner';
import ProductInfo from './_component/ProductInfo';

function ProductDetails({params}) {
  const [productDetails,setProductDetails] = useState({})
    useEffect(()=>{
        getProductById_();
    },[params?.productId])
    const getProductById_=()=>{
        ProductApis.getProductById(params?.productId).then(res=>{
            console.log('Product Item',res.data.data)
            setProductDetails(res.data.data)
        })
    }
  return (
    <div className='px-10 md:px-25 py-8'>
      <BreadCrumb />
      <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-0 justify-around'>
        <ProductBanner product = {productDetails} />
        <ProductInfo product = {productDetails} />
      </div>
    </div>
  )
}

export default ProductDetails
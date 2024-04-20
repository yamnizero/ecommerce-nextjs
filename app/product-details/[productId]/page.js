'use client'
import BreadCrumb from '@/app/_components/BreadCrumb';
import ProductApis from '@/app/_utils/ProductApis'
import React, { useEffect, useState } from 'react'
import ProductBanner from './_component/ProductBanner';
import ProductInfo from './_component/ProductInfo';
import ProductList from '@/app/_components/ProductList';
import { usePathname } from 'next/navigation';

function ProductDetails({params}) {
  const path = usePathname();
  const [productDetails,setProductDetails] = useState({})
  const [productList,setProductList] = useState([])
    useEffect(()=>{
        getProductById_();
    },[params?.productId])
    const getProductById_=()=>{
        ProductApis.getProductById(params?.productId).then(res=>{
            console.log('Product Item',res.data.data)
            setProductDetails(res.data.data)
            getProductsByCategory(res.data.data)
        })
    }
    const getProductsByCategory = (product)=>{
      ProductApis.getProductsByCategory(product?.attributes.category).then(res=>{
        console.log(res?.data?.data)
        setProductList(res?.data?.data)
      })
    }
  return (
    <div className='px-10 md:px-28 py-8'>
      <BreadCrumb  path={path}/> 
      <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-0 justify-around'>
        <ProductBanner product = {productDetails} />
        <ProductInfo product = {productDetails} />
      </div>
      <div>
        <h2 className='mt-24 text-xl mb-4'>Similar Products</h2>
        <ProductList productList={productList} />
      </div>
    </div>
  )
}

export default ProductDetails
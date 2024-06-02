import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Components/BreadCrums/Breadcrumb'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox'
import RelatedProduct from '../Components/RelatedProduct/RelatedProduct'

const Product = () => {
  const {all_product}=useContext(ShopContext)
  // console.log("ALL PRODUCTS OF PRODUCT.JS",all_product)
  const {productId}=useParams()
  // console.log("PRODUCT_ID",productId)
  const product = all_product.find((e)=>{
    // console.log("FINDING THE URL ID ",e.id)
    // console.log("FINDING THE URL ID ",productId)
   return e.id  === Number(productId)
  })
  return (
    <div>
   <Breadcrum product={product}/>  
   <ProductDisplay product={product}/>
   <DescriptionBox/>
   <RelatedProduct/>
    </div>
  )
}
//HOME>SHOP>Women>Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse --BREADCRUM

export default Product
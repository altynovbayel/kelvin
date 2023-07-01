import React from 'react'
import c from './Products.module.scss'
import ProductCard from '../ProductCard'

const Products = () => {
  return (
    <div className={c.products}>
      <div className={c.title}>
        <h1>ВСЕ ТОВАРЫ</h1>
      </div>
      <div className={c.container}>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>
    </div>
  )
}

export default Products

import React from 'react'
import c from './Products.module.scss'
import ProductCard from '../ProductCard'
import { GetProducts } from '../../helpers'

const Products = () => {
  const { products } = GetProducts()

  return (
    <div className={c.products}>
      <div className={c.title}>
        <h1>ВСЕ ТОВАРЫ</h1>
      </div>
      <div className={c.container}>
        {
          products?.map((item, i) => (
            <ProductCard
              key={i}
              id={item.id}
              image={item.product_images[0].image}
              title={item.title}
              price={item.price}
              obj={item}
            />
          ))
        }
        {/* <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/> */}
      </div>
    </div>
  )
}

export default Products

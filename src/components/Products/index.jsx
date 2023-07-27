import React from 'react'
import c from './Products.module.scss'
import ProductCard from '../ProductCard'
import { GetProducts } from '../../helpers'
import { useLocation } from 'react-router-dom'
import SizeModal from '../SizeModal'
import SizeModalMobile from '../SizeModalMobile'

const Products = () => {
  const { products } = GetProducts()
  const [modalWindow, setModalWindow] = React.useState(false)
  const [productId, setProductId] = React.useState(1)
  const [choosenSize, setChoosenSize] = React.useState(0)

  return (
    <div className={c.products}>
      {
        modalWindow && 
        window.innerWidth >= 500 ?
        <SizeModal 
          item_id={productId} 
          setModal={setModalWindow} 
          choosenSize={choosenSize} 
          setChoosenSize={setChoosenSize}
        /> : ''
      }
      {
        modalWindow && 
        window.innerWidth <= 500 ?
          <SizeModalMobile
            item_id={productId} 
            setModal={setModalWindow} 
            choosenSize={choosenSize} 
            setChoosenSize={setChoosenSize}
          /> : ''
                  
      }
      <div className={c.title}>
        <h1>ВСЕ ТОВАРЫ</h1>
      </div>
      <div className={c.container}>
        {
          products?.slice(-4, ).map((item, i) => (
            <ProductCard
              key={i}
              id={item.id}
              image={item.product_images[0].image}
              title={item.title}
              price={item.price}
              obj={item}
              setModal={setModalWindow}
              setProductId={setProductId}
              choosenSize={choosenSize}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Products

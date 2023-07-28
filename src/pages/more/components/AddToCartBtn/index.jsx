import React from 'react'
import c from './AddToCart.module.scss'
import { useNavigate } from 'react-router-dom'
import {HiMinusSm, HiPlus} from 'react-icons/hi'

const AddToCart = ({product, choosenSize}) => {
  const navigate = useNavigate()
  const navigateToCart = () => navigate(`/cart/`)
  const cart = JSON.parse(localStorage.getItem('kelvin_cart'))
  const check = cart?.find(item => item?.id === product?.id)
  const index = cart?.findIndex(obj => obj.id === product?.id);
  
  const postToCart = () => {
    cart?.push({...product, count: 1, choosenSize: choosenSize, image: product.product_images})
    localStorage.setItem('kelvin_cart', JSON.stringify(cart))
  }
  
  const increment = () => {
    !check ? cart?.push({...product, count: 1}) : cart[index].count = cart[index].count + 1;
    localStorage.setItem('kelvin_cart', JSON.stringify(cart))
  }
  
  const decrement = () => {
    !check ? cart?.push({...product, count: 1}) : cart[index].count = cart[index].count - 1;
    localStorage.setItem('kelvin_cart', JSON.stringify(cart))
  }
  
  const deleteItem = () => {
    const index = cart?.findIndex(item => item.id === product.id);
    if (index !== -1) {
      cart?.splice(index, 1);
    }
    localStorage.setItem('kelvin_cart', JSON.stringify(cart));
  }
  return (
    <>
      {
      !check ? <button className={c.add_to_cart} onClick={postToCart}>Добавить в корзину</button>
      : <div className={c.go_to_cart}>
          <button onClick={navigateToCart}>Перейти в корзину</button>
          <div className={c.counter}>
            <button onClick={()=> check.count === 1 ? deleteItem() : decrement()}>
              <HiMinusSm />
            </button>
            <span>{check.count}</span>
            <button onClick={increment}>
              <HiPlus />
            </button>
          </div>
        </div>
      }
    </>
  )
}

export default AddToCart

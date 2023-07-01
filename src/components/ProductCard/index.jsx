import React from 'react'
import c from './ProductCard.module.scss'
import url from '../../img/product.png'
import arrow from '../../img/arrow-right.svg'

const ProductCard = () => {
  return (
    <div className={c.card}>
      <div className={c.card_inner}>
        <img src={url} alt="" />
        <p>KELVIN’S HOODIE “RAINBOW”</p>
      </div>
      <div className={c.card_down}>
        <div className={c.card_btn}>
          <button>
            Добавить в корзину
          </button>
          <img src={arrow} alt="" />
        </div>
        <div className={c.price}>
          <p>
            5 990,00 руб.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard

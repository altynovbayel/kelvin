import React from 'react'
import c from './cart.module.scss'
import { Components } from '../../components'

const Cart = () => {
  return (
    <div className={c.container}>
      <Components.Title text={'корзина'}/>
      <div className={c.cart}>
        <div className={c.cards}>
          <Components.CartCard 
            id={1}
            image={'https://basket-05.wb.ru/vol980/part98008/98008424/images/big/1.jpg'}
            title={'HOODIE STORE Худи мужское оверсайз с капюшоном модное зип на молнии'}
            size={'52 / XL'}
            price={5590}
            count={1}
          />
          <Components.CartCard 
            id={1}
            image={'https://basket-05.wb.ru/vol980/part98008/98008424/images/big/1.jpg'}
            title={'HOODIE STORE Худи мужское оверсайз с капюшоном модное зип на молнии'}
            size={'52 / XL'}
            price={5590}
            count={1}
          />
        </div>
        <Components.MakingOrder />
      </div>
    </div>
  )
}

export default Cart
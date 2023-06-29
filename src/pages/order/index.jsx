import React from 'react'
import c from './order.module.scss'
import { Components } from '../../components'

const Order = () => {
  return (
    <div className={c.container}>
      <Components.Title text={'оформление заказа'}/>
      <div className={c.make}>
        <div className={c.left}>
          <Components.Delivering />
          <Components.DeliveryInfo />
          <div className={c.goods}>
            <h1>Мои товары</h1>
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
          </div>
        </div>
        <div className={c.right}>
          <Components.Paying />
          <Components.Promocode />  
        </div>
      </div>
    </div>
  )
}

export default Order
import React from 'react'
import c from './cart.module.scss'
import { Components } from '../../components'
import deliver from '../../img/deliver.svg'

const Cart = () => {
  
  const [ cart, setCart ] = React.useState(null)

  React.useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('kelvin_cart'))
    setTimeout(() => {
      setCart(cart)
    }, 100)
  }, [cart])

  return (
    <div className={c.container}>
      <Components.Title text={'корзина'}/>
      <div className={c.cart}>
        <div className={c.cards}>
          {
            cart?.length !== 0 ?
            cart?.map((item, i) => (
              <Components.CartCard 
                key={i}
                id={item.id}
                image={item.product_images[0].image}
                title={item.title}
                size={item.size}
                price={item.price}
                count={item.count}
                obj={item}
              />
            )) :
            <div className={c.nothing}>
              <h2>Ничего нет ;(</h2>
            </div>
          }
        </div>
        
        <div className={c.right}>
          <Components.MakingOrder />
          <div className={c.info}>
            <span>
              <img src={deliver} alt="deliver" />
              Бесплатная доставка от 12 000 ₽
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
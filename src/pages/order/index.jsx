import React from 'react'
import c from './order.module.scss'
import { Components } from '../../components'
  
const Order = () => {
  const [ cart, setCart ] = React.useState(null)
  const [ summa, setSumma ] = React.useState(null)
  const [ discount, setDiscount ] = React.useState(0)
  const [ deliverType, setDeliverType ] = React.useState('mail')
  const [ dep, setDep ] = React.useState(null)

  React.useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('kelvin_cart'))
    const deliverType = localStorage.getItem('typeDeliver')
    const discount = localStorage.getItem('discount')
    setCart(cart)
    setSumma(String(cart?.reduce((acc, obj) => acc + obj.count * obj.price, 0)))
    setDeliverType(deliverType)
    setDiscount(discount)
    
    setTimeout(() => {
      setDep(Math.random())
    }, 100);
  }, [dep])

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
                <h3>Ничего нет</h3>
              }
            </div>
          </div>
        </div>
        <div className={c.right}>
          <Components.Paying 
            summa={summa}
            summaWithDelivering={deliverType === 'mail' ? summa : String(Number(summa) + 340)}
            delivering={deliverType === 'mail' ? 0 : 340}
            discount={Number(discount)}
          />
          <Components.Promocode />  
        </div>
      </div>
    </div>
  )
}

export default Order
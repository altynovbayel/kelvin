import React from 'react'
import c from './makingOrder.module.scss'
import { useNavigate } from 'react-router-dom'

const MakingOrder = () => {
  const Navigate = useNavigate()

  return (
    <div className={c.makingOrder}>
        <button onClick={() => Navigate('/order/')}>Перейти к оформлению</button>
        <div className={c.line}></div>
        <div className={c.cart}>
            <h3>Ваша корзина</h3>
            <div className={c.prices}>
                <p>
                    <span>Товары</span>
                    11 980 ₽
                </p>
                <p>
                    <span>Скидка</span>
                    0%
                </p>
            </div>
        </div>
        <div className={c.line}></div>
        <h3>
            <span>Общая стоимость</span>
            11 980 ₽
        </h3>
    </div>
  )
}

export default MakingOrder
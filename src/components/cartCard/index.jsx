import React from 'react'
import c from './cartCard.module.scss'
import { BiMinus, BiPlus } from 'react-icons/bi'

const CartCard = ({id, image, title, size, price, count}) => {
  return (
    <div className={c.card}>
        <div className={c.left}>
            <img 
                src={
                    image ? 
                    image : 
                    'https://yt3.ggpht.com/a/AATXAJx-k8pMwgN2y_GuIhcHXN0gUEAPSXQJM3AuzR-n=s900-c-k-c0xffffffff-no-rj-mo'
                }
                alt="image"
            />
        </div>
        <div className={c.right}>
            <div className={c.up}>
                <h3>
                    {
                        title.length > 56 ? 
                        `${title.slice(0, 56)}...` : 
                        title
                    }
                </h3>
                <p>
                    <span>Размер: </span> {size}
                </p>
            </div>
            <div className={c.down}>
                <h3>{price} ₽</h3>
                <div className={c.floor}>
                    <div className={c.count}>
                        <button
                            disabled={count >= 1 ? true : false }
                            className={count >= 1 ? c.disabled : '' }
                        >
                            <BiMinus />
                        </button>
                        <span>{count}</span>
                        <button>
                            <BiPlus />
                        </button>
                        
                    </div>
                    <p>
                        Удалить
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartCard
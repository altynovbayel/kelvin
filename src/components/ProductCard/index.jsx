import React from 'react'
import c from './ProductCard.module.scss'
import url from '../../img/product.png'
import arrow from '../../img/arrow-right.svg'

const ProductCard = ({id, image, title, defaultPrice, price, obj}) => {
  const [ dep, setDep ] = React.useState('')

  const cart = JSON.parse(localStorage.getItem('kelvin_cart'))
  const check = cart?.find(item => item?.id === obj?.id)
  const index = cart?.findIndex(obj => obj.id === id);

  React.useEffect(() => {
    setTimeout(() => {
      const check = cart?.find(item => item?.id === obj?.id)
      setDep(Math.random())
    }, 100)
  }, [dep])

  const postToCart = () => {
    !check ? cart?.push({...obj, count: 1, image: image, defaultPrice: obj.price}) : cart[index].count = cart[index].count + 1;
    localStorage.setItem('kelvin_cart', JSON.stringify(cart))
  }

  return (
    <div className={c.card}>
      <div className={c.card_inner}>
        <img src={image} alt="" />
        <p>{title}</p>
      </div>
      <div className={c.card_down}>
        <div className={c.card_btn}>
          <button
            onClick={() => postToCart()}
            disabled={check?.id === id ? true : false}
            className={check?.id === id ? c.added : ''}
          >
            {check?.id === id ? 'Добавлено в корзину' : 'Добавить в корзину'}
          </button>
          <img src={arrow} alt="" />
        </div>
        <div className={c.price}>
          <p>
            {
              defaultPrice?.slice(0, defaultPrice?.length - 3 ).length === 4 ? 
              `${defaultPrice?.slice(0, 1)} ${defaultPrice?.slice(1, defaultPrice?.length - 3 )}` 
              : defaultPrice?.slice(0, defaultPrice.length - 3 ).length === 5 ?
              `${defaultPrice?.slice(0, 2)} ${defaultPrice?.slice(2, defaultPrice?.length - 3 )}` 
              : defaultPrice?.slice(0, defaultPrice.length - 3 ).length === 6 ?
              `${defaultPrice?.slice(0, 3)} ${defaultPrice?.slice(3, defaultPrice?.length - 3 )}` : 
              defaultPrice?.slice(0, defaultPrice?.length - 3 )
            } руб.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard

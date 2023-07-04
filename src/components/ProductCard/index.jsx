import React from 'react'
import c from './ProductCard.module.scss'
import arrow from '../../img/arrow-right.svg'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({id, image, title, defaultPrice, price, obj}) => {
  const [ dep, setDep ] = React.useState('')
  const navigate =  useNavigate()
  const navigateToMore = () => navigate(`more/${id}`)

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
    !check ? cart?.push({...obj, count: 1, image: image}) : cart[index].count = cart[index].count + 1;
    localStorage.setItem('kelvin_cart', JSON.stringify(cart))
  }

  return (
    <div className={c.card}>
      <div className={c.card_inner} onClick={navigateToMore}>
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
              price?.slice(0, price?.length - 3 ).length === 4 ? 
              `${price?.slice(0, 1)} ${price?.slice(1, price?.length - 3 )}` 
              : price?.slice(0, price.length - 3 ).length === 5 ?
              `${price?.slice(0, 2)} ${price?.slice(2, price?.length - 3 )}` 
              : price?.slice(0, price.length - 3 ).length === 6 ?
              `${price?.slice(0, 3)} ${price?.slice(3, price?.length - 3 )}` : 
              price?.slice(0, price?.length - 3 )
            } руб.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard

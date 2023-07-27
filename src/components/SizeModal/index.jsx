import React from 'react'
import c from './SizeModal.module.scss'
import x from '../../img/X.svg'
import { GetSingleProducts } from '../../helpers'
import {BiSolidChevronDown } from 'react-icons/bi'
import checkImg from '../../img/check.svg'

const SizeModal = ({item_id, setModal, choosenSize, setChoosenSize}) => {
  const {product} = GetSingleProducts(item_id)
  const [activeDropdown, setActiveDropdown] = React.useState(false)
  
  const cart = JSON.parse(localStorage.getItem('kelvin_cart'))
  const check = cart?.find(item => item?.id === item_id)
  const index = cart?.findIndex(obj => obj.id === item_id);

  const postToCart = () => {
    setModal(false)
    !check ? cart?.push({...product, choosenSize: product?.product_sizes[choosenSize].name ,count: 1, image: product?.product_images[0].image}) : cart[index].count = cart[index].count + 1;
    localStorage.setItem('kelvin_cart', JSON.stringify(cart))
  }
  
  return (
    <div className={c.size}>
      <div className={c.size_window}>
        <div className={c.window_header}>
          <p>Выберите размер</p>
          <span onClick={() => setModal(false)}>
            <img src={x} alt="x" />
          </span>
        </div>
        <div className={c.dropdown}>
          <div onClick={()=> {setActiveDropdown(!activeDropdown)}}>
            <div className={c.left}>
              <h3>{product?.product_sizes[choosenSize].name}</h3>
            </div>
            <div className={c.right}>
              <span className={ activeDropdown ? c.active_arrow : '' }>
                <BiSolidChevronDown />
              </span>
            </div>
          </div>

          <div 
            className={activeDropdown ? c.active : c.disactive} 
            style={{height: `${activeDropdown ? product?.product_sizes.length * 50 : 0}px`}}
          >
            {
              product?.product_sizes.map((item, id) => (
                <div 
                  key={id} 
                  className={choosenSize===id ? c.active_drop : '' } 
                  onClick={()=> {
                    setChoosenSize(id)
                    setActiveDropdown(false)
                  }}
                >
                  <h3>{item.name}</h3>
                  {choosenSize === id ? <img src={checkImg} alt='' /> : ''}
                </div>
              ))
            }
          </div>
        </div>
        <div className={c.add_btn}>
          <button className={c.add_to_cart} onClick={postToCart}>Добавить в корзину</button>
        </div>
      </div>
    </div>
  )
}

export default SizeModal

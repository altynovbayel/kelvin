import React from 'react'
import c from './more.module.scss'
import { useParams } from 'react-router-dom'
import {BsCircleFill} from 'react-icons/bs'
import { GetSingleProducts, ScrollTop } from '../../helpers'
import setka from '../../img/setka.svg'
import model from '../../img/model.svg'
import {IoIosArrowDown} from 'react-icons/io'
import {Swiper, SwiperSlide} from 'swiper/react'

import 'swiper/css';
import 'swiper/css/pagination';

const More = () => {
  const {id} = useParams()
  const {product} = GetSingleProducts(id)

  

  React.useEffect(() => ScrollTop() , [])

  console.log(product);

  if(!product) return <h1>Loading...</h1>
  return (
    <div className={c.more}>
      <div className={c.container}>
        <div className={c.slider}>
          <Swiper 
            direction={'vertical'}
            slidesPerView={3}
            spaceBetween={30}
             
          >
            {
              product?.product_images.map(item => (
                <SwiperSlide key={item.id}>
                  <img className={c.slide_img} src={item.image} alt="" />
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
        <div className={c.active_img}>
          <img src={product?.product_images[0].image} alt="" />
        </div>
        <div className={c.info}>
          <div className={c.info_title}>
            <div className={c.new_text}>
              <BsCircleFill/>
              <p>новое поступление</p>
            </div>
            <div className={c.title}>
              <h1>{product?.title}</h1>
            </div>
            <div className={c.desc}>
              <p>
                {product?.description}
              </p>
            </div>
          </div>
          <div className={c.price}>
            <h1>
              {
                product.price?.slice(0, product.price?.length - 3 ).length === 4 ? 
                `${product.price?.slice(0, 1)} ${product.price?.slice(1, product.price?.length - 3 )}` 
                : product.price?.slice(0, product.price.length - 3 ).length === 5 ?
                `${product.price?.slice(0, 2)} ${product.price?.slice(2, product.price?.length - 3 )}` 
                : product.price?.slice(0, product.price.length - 3 ).length === 6 ?
                `${product.price?.slice(0, 3)} ${product.price?.slice(3, product.price?.length - 3 )}` : 
                product.price?.slice(0, product.price?.length - 3 )
              } руб.
            </h1>
          </div>
          <div className={c.size}>
            <div className={c.choose_size}>
              <div className={c.choose}>Выберите размер</div>
              <div className={c.setka}>
                <img src={setka} alt="" />
                <span>Сетка размеров</span>
              </div>
            </div>
            <div className={c.dropdown}>
              <div>{product?.size}</div>
              <span>
                <IoIosArrowDown/>
              </span>
            </div>
            <div className={c.model}>
              <div className={c.model_text}>
                <img src={model} alt="" />
                <div>
                  <span>Модель:</span> Рост 172 см. <span>Размер на модели:</span> M
                </div>
              </div>
            </div>
          </div>
          <div className={c.buttons}>
            <button className={c.add_to_cart}>Добавить в корзину</button>
            <button className={c.buy}>Купить в один клик</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default More
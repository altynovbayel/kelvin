import React from 'react'
import c from './more.module.scss'
import {useNavigate, useParams} from 'react-router-dom'
import {BsCircleFill} from 'react-icons/bs'
import {GetSingleProducts, ScrollTop} from '../../helpers'
import model from '../../img/model.svg'
import {IoIosArrowDown} from 'react-icons/io'
import { BiHome, BiSolidChevronDown } from 'react-icons/bi'
import AddToCart from './components/AddToCartBtn'
import ModileSlider from './components/MobileSlider'
import Slider from './components/Slider'
import checkImg from '../../img/check.svg'
import SizeSlider from './components/SizeSlider'


const More = () => {
  const {id} = useParams()
  const {product} = GetSingleProducts(id)
  const navigate = useNavigate()
  
  const [activeDropdown, setActiveDropdown] = React.useState(false)
  const [activeImg, setActiveImg] = React.useState(0)
  const [dep, setDep] = React.useState('')
  const [choosenSize, setChoosenSize] = React.useState(0)
  
  const cart = JSON.parse(localStorage.getItem('kelvin_cart'))
  const check = cart?.find(item => item?.id === product?.id)
  const index = cart?.findIndex(obj => obj.id === product?.id);
  
  const postToCartOne = () => {
    localStorage.setItem('kelvin_cart_one', JSON.stringify([]))
    const cartOne = JSON.parse(localStorage.getItem('kelvin_cart_one'))
    cartOne?.push({...product, count: 1, image: product.product_images})
    localStorage.setItem('kelvin_cart_one', JSON.stringify(cartOne))
    navigate('/oneClick/')
  }
  
  React.useEffect(() => {
    setTimeout(() => {
      const check = cart?.find(item => item?.id === product?.id)
      setDep(Math.random())
    }, 100)
  }, [dep])
  
  React.useEffect(() => ScrollTop(), [])

  const width = window.innerWidth
  
  
  if (!product) return <h1>Loading...</h1>
  return (
    <div className={c.more}>
      <div className={c.container}>
        <div className={c.pages}>
          <h3>
            <span>
              <p className={c.home} onClick={() => navigate('/')}>
                <BiHome />
              </p> 
              <span>/</span> 
              <p onClick={() => navigate('/products/')}>
                Все товары
              </p> 
              <span>/</span>
            </span>{ width < 500 || product?.title?.length > 16 ? `${product?.title?.slice(0, 16)}...` : product?.title }
          </h3>
        </div>

        <div className={c.cont}>
          <div className={c.slider}>
            <Slider product={product} setActiveImg={setActiveImg}/>
            
          </div>
          
          <div className={c.active_img}>
            <img src={product?.product_images[activeImg].image} alt=""/>
          </div>
          
          <div className={c.mobile_slider}>
            <ModileSlider product={product}/>
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
            
            </div>

            <div className={c.price}>
              <h1>
                {
                  product.price?.slice(0, product.price?.length - 3).length === 4 ?
                    `${product.price?.slice(0, 1)} ${product.price?.slice(1, product.price?.length - 3)}`
                    : product.price?.slice(0, product.price.length - 3).length === 5 ?
                      `${product.price?.slice(0, 2)} ${product.price?.slice(2, product.price?.length - 3)}`
                      : product.price?.slice(0, product.price.length - 3).length === 6 ?
                        `${product.price?.slice(0, 3)} ${product.price?.slice(3, product.price?.length - 3)}` :
                        product.price?.slice(0, product.price?.length - 3)
                } ₽
              </h1>
            </div>

            <div className={c.size}>
              <div className={c.choose_size}>
                <div className={c.choose}>Выберите размер</div>
              </div>

              <div className={c.dropdown}>
                <div
                  onClick={() => {
                    setActiveDropdown(!activeDropdown)
                  }}
                >
                  <div className={c.left}>
                    <h3>{product.product_sizes[choosenSize].name}</h3>
                  </div>
                  <div className={c.right}>
                    <span className={ activeDropdown ? c.active_arrow : ''}>
                      <BiSolidChevronDown />
                    </span>
                  </div>
                </div>
                
                <div 
                  className={activeDropdown ? c.active : c.disactive}
                  style={{
                      height: `${activeDropdown ? product?.product_sizes.length * 50 : 0}px`
                    }}
                  >
                  {
                    product?.product_sizes.map((item, id) => (
                      <div 
                        key={id}
                        className={choosenSize === id ? c.active_drop : ''} 
                        onClick={() => {
                          setChoosenSize(id)
                          setActiveDropdown(false)
                      }}>
                        <h3>{item.name}</h3>
                        {choosenSize === id ? <img src={checkImg} alt='' /> : ''}
                      </div>
                    ))
                  }
                </div>
              </div>
              <div className={c.size_slider}>
                <SizeSlider 
                  product={product} 
                  setChoosenSize={setChoosenSize} 
                  choosenSize={choosenSize}
                />
              </div>
              <div className={c.model}>
                <div className={c.model_text}>
                  <img src={model} alt=""/>
                  <div>
                    <span>Модель:</span> Рост 172 см. <span>Размер на модели:</span> M
                  </div>
                </div>
              </div>
            </div>

            <div className={c.buttons}>
              
              {
                width >= 768 ? <AddToCart product={product}/> : ''
              }

              <button className={c.buy} onClick={() => postToCartOne()}>
                Купить в один клик
              </button>
            </div>

            <div className={c.consist}>
              <p>
                92% хлопок, 8% лайкра
              </p>
              <p>
                Плотность ткани: 240 гр/м
              </p>
            </div>

            <div className={c.delivery_info}>
              <div>
                Информация о доставке
              </div>
              <span>
                <IoIosArrowDown/>
              </span>
            </div>
            <div className={c.add_to_cart_mob}>
              {
                width < 768 ? <AddToCart product={product}/> : ''
              }
            </div>
          </div>
        </div>
      
      </div>
    </div>
  )
}

export default More
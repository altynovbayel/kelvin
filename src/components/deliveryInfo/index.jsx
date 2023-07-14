import React from 'react'
import c from './deliveryInfo.module.scss'
import { IMaskInput } from 'react-imask';
import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';
import icon from './icon.svg'

const DeliveryInfo = () => {
  const location = JSON.parse(localStorage.getItem('location'))

  const width = window.innerWidth

  const [ active, setActive ] = React.useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
    fifth: false,
    sixth: false,
    seventh: false,
    eighth: false,
  })


  const PhoneMask = "+{7} (000) 000-00-00";
  const phoneMask = [
    {
      mask: PhoneMask,
    }
  ];

  return (
    <div className={c.deliveryInfo}>
      <h3>Ваши данные для доставки</h3>
      <form>
        <div>
          <input 
            type="text" 
            className={active.first ? c.active : null}
            onChange={e => {
              if(e.target.value.length !== 0 ){
                setActive({
                  ...active,
                  first: true
                })
              }else{
                setActive({
                  ...active,
                  first: false
                })
              }
            }}
          />
          <span className={active.first ? c.active : null}>Имя *</span>
        </div>
        <div>
          <input 
            type="text" 
            className={active.second ? c.active : null}
            onChange={e => {
              if(e.target.value.length !== 0 ){
                setActive({
                  ...active,
                  second: true
                })
              }else{
                setActive({
                  ...active,
                  second: false
                })
              }
            }}
          />
          <span className={active.second ? c.active : null}>Фамилия *</span>
        </div>
        <div>
          <input 
            type="email" 
            className={active.third ? c.active : null}
            onChange={e => {
              if(e.target.value.length !== 0 ){
                setActive({
                  ...active,
                  third: true
                })
              }else{
                setActive({
                  ...active,
                  third: false
                })
              }
            }}
          />
          <span className={active.third ? c.active : null}>Email *</span>
        </div>
        <div>
          <IMaskInput
            className={active.fourth ? c.active : null}
            mask={phoneMask}
            id='phoneInput'
            onChange={e => {
              if(e.target.value.length !== 0 ){
                setActive({
                  ...active,
                  fourth: true
                })
              }else{
                setActive({
                  ...active,
                  fourth: false
                })
              }
            }}
          />
          <span className={active.fourth ? c.active : null}>Телефон *</span>

        </div>
      </form>
      <div className={c.address}>
        <h3>Адрес доставки</h3>
        <p>Выберите удобное отделение почты для вас и заберите свой заказ там</p>
        <div className={c.inputForm}>
          <div className={c.up}>
            <div>
              <input 
                type="text"
                className={active.fifth ? c.active : null}
                id={'suggest'}
                onChange={e => {
                  if(e.target.value.length !== 0 ){
                    setActive({
                      ...active,
                      fifth: true
                    })
                  }else{
                    setActive({
                      ...active,
                      fifth: false
                    })
                  }
                }}
              />  
              <span className={active.fifth ? c.active : null}>Город</span>
            </div>
            <div>
              <input 
                type="text"
                className={active.sixth ? c.active : null}
                id={'suggest'}
                onChange={e => {
                  if(e.target.value.length !== 0 ){
                    setActive({
                      ...active,
                      sixth: true
                    })
                  }else{
                    setActive({
                      ...active,
                      sixth: false
                    })
                  }
                }}
              />  
              <span className={active.sixth ? c.active : null}>Название улицы и номер дома </span>
            </div>
          </div>
          <div className={c.down}>
            <div>
              <input 
                type="text"
                className={active.seventh ? c.active : null}
                id={'suggest'}
                onChange={e => {
                  if(e.target.value.length !== 0 ){
                    setActive({
                      ...active,
                      seventh: true
                    })
                  }else{
                    setActive({
                      ...active,
                      seventh: false
                    })
                  }
                }}
              />  
              <span className={active.seventh ? c.active : null}>Дом</span>
            </div>
            <div>
              <input 
                type="text"
                className={active.eighth ? c.active : null}
                id={'suggest'}
                onChange={e => {
                  if(e.target.value.length !== 0 ){
                    setActive({
                      ...active,
                      eighth: true
                    })
                  }else{
                    setActive({
                      ...active,
                      eighth: false
                    })
                  }
                }}
              />  
              <span className={active.eighth ? c.active : null}>Квартира / Оффис</span>
            </div>
            <div>
              <input 
                type="text"
                className={active.ninth ? c.active : null}
                id={'suggest'}
                onChange={e => {
                  if(e.target.value.length !== 0 ){
                    setActive({
                      ...active,
                      ninth: true
                    })
                  }else{
                    setActive({
                      ...active,
                      ninth: false
                    })
                  }
                }}
              />  
              <span className={active.ninth ? c.active : null}>Индекс </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeliveryInfo
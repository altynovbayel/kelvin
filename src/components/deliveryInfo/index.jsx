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
    fifth: false
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
          <span className={active.fifth ? c.active : null}>Город, улица, дом, квартира</span>
        </div>
        <div 
          style={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '24px',
            width: '100%',
            height: '302px'
          }}
        >
          {
            width >= 426 ?
            <YMaps>
              <Map 
                style={{height: '302px', marginTop: '8px'}}  
                defaultState={{
                  center: location,
                  zoom: 10
                }}
              >
                  <Placemark
                    geometry={location}
                    options={{
                      iconLayout: 'default#image',
                      iconImageHref: icon,
                      iconImageSize: [98, 60]
                    }} 
                  />
              </Map>
            </YMaps> :
            null
          }
        </div>
      </div>
    </div>
  )
}

export default DeliveryInfo
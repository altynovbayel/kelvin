import React from 'react'
import c from './deliveryInfo.module.scss'
import { YMaps, Map } from 'react-yandex-maps'
import { Components } from '..'

const DeliveryInfo = () => {
  return (
    <div className={c.deliveryInfo}>
      <h3>Ваши данные для доставки</h3>
      <form>
        <div>
          <input 
            type="text" 
            placeholder='Имя *'
          />
        </div>
        <div>
          <input 
            type="text" 
            placeholder='Фамилия *'
          />
        </div>
        <div>
          <input 
            type="email" 
            placeholder='Email *'
          />
        </div>
        <div>
          <input 
            type="text" 
            placeholder='Телефон *'
          />
        </div>
      </form>
      <div className={c.address}>
        <h3>Адрес доставки</h3>
        <p>Выберите удобное отделение почты для вас и заберите свой заказ там</p>
        <input 
          type="text"
          placeholder='Город, улица, дом, квартира'
        />
          <div 
            style={{
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <iframe 
              src="https://yandex.ru/map-widget/v1/?ll=37.385534%2C55.584227&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzAwMDA5NBIa0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAiCg2GeBZCFQEGX0I%2C&z=8" width="650" height="400" frameborder="1" allowfullscreen="true" 
              style={{position:'relative', borderRadius: '24px', marginTop: '8px', border: 'none'}}
            ></iframe>
          </div>
      </div>
    </div>
  )
}

export default DeliveryInfo
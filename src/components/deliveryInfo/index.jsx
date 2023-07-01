import React from 'react'
import c from './deliveryInfo.module.scss'
import { Components } from '..'
import { IMaskInput, IMaskMixin } from 'react-imask';

const DeliveryInfo = () => {

  const [ active, setActive ] = React.useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
    fifth: false
  })

//   let phoneMask = IMask(
//     document.getElementById('phone'), {
//       mask: '+{7}(000)000-00-00'
//     });

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
            className="form-control"
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
            overflow: 'hidden'
          }}
        >
          <iframe 
            src="https://yandex.ru/map-widget/v1/?ll=37.385534%2C55.584227&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzAwMDA5NBIa0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAiCg2GeBZCFQEGX0I%2C&z=8" width="650" height="400" frameBorder="1" allowFullScreen={true}
            style={{position:'relative', borderRadius: '12px', marginTop: '8px', border: 'none'}}
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default DeliveryInfo
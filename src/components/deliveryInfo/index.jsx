import React from 'react'
import c from './deliveryInfo.module.scss'
import { IMaskInput } from 'react-imask';
import axios from 'axios';


const DeliveryInfo = ({city}) => {
  const [cityName, setCityName] = React.useState('')
  const [streetName, setStreetName] = React.useState('')
  const [cityResult, setCityResult] = React.useState('')
  const [streetResult, setStreetResult] = React.useState(null)
  const [ activeRes, setActiveRes ] = React.useState(false)
  const [ activeResStreet, setActiveResStreet ] = React.useState(false)

  const [ active, setActive ] = React.useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
    fifth: false,
    sixth: false,
    seventh: false,
    eighth: false,
    ninth: false,
    tenth: false,
  })


  const PhoneMask = "+{7} (000) 000-00-00";
  const phoneMask = [
    {
      mask: PhoneMask,
    }
  ];

  
  let timer;
  const waitTime = 1000; 

  React.useEffect(() => {
    const citySearch = city?.filter(item => item.city.toLowerCase().includes(cityName.toLowerCase()))
    setCityResult(citySearch)
  }, [cityName])

  const searchStreet = () => {
    axios.post(`https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address`, {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": "b759ba8c0009a8a316048e2551da6a4ab727e57c"
    }, {query: streetName})
      .then(res => setStreetResult(res.data))
  }
  
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
                value={cityName}
                onChange={e => {
                  setCityName(e.target.value)
                  if(e.target.value.length !== 0 ){
                    setActive({
                      ...active,
                      fifth: true
                    })
                    setActiveRes(true)
                  }else{
                    setActive({
                      ...active,
                      fifth: false
                    })
                    setActiveRes(false)
                  }
                }}
              />  
              <span className={active.fifth ? c.active : null}>Город</span>
              {
                activeRes ?
                  <div className={c.cityRes}>
                    {
                      cityResult?.map((item, i) => (
                        <div
                          key={i}
                          onClick={() => {
                            setCityName(item.city)
                            setActiveRes(false)
                          }}
                        >
                          <p>
                            {item.city}
                          </p>
                          <span></span>
                        </div>
                      ))
                    }
                  </div> :
                null
              }
            </div>
            <div>
              <input 
                type="text"
                className={active.sixth ? c.active : null}
                value={streetName}
                onChange={e => {
                  setStreetName(e.target.value)
                  searchStreet(e.target.value)
                  if(e.target.value.length >= 1){
                    setActive({
                      ...active,
                      sixth: true
                    })
                    searchStreet()
                    setActiveResStreet(true)
                  }else{
                    setActive({
                      ...active,
                      sixth: false
                    })
                    setActiveResStreet(false)
                  }
                }}
              />  
              <span className={active.sixth ? c.active : null}>Название улицы и номер дома </span>
              {
                activeResStreet && streetResult?.length !== 0 ?
                  <div className={c.cityRes}>
                    {
                      streetResult?.map((item, i) => (
                        <div
                          key={i}
                          onClick={() => {
                            setStreetName(item.value)
                            setActiveResStreet(false)
                          }}
                        >
                          <p>
                            {item.value.length > 30 ? `${item.value.slice(0, 30)}...` : item.value}
                          </p>
                          <span></span>
                        </div>
                      ))
                    }
                  </div> :
                null
              }
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
            <div>
              <textarea 
                type="text"
                id={c.comment}
                className={active.tenth ? c.active_comment : c.comment}
                onChange={e => {
                  if(e.target.value.length !== 0 ){
                    setActive({
                      ...active,
                      tenth: true
                    })
                  }else{
                    setActive({
                      ...active,
                      tenth: false
                    })
                  }
                }}
              />  
              <span className={active.tenth ? c.active_text : c.comment_text}>Комментарий к заказу </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeliveryInfo
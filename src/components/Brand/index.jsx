import React from 'react'
import c from './Brand.module.scss'
import shine from '../../img/shine.png'

const Brand = () => {
  return (
    <div className={c.brand}>
      <div className={c.line}></div>
      <div className={c.container}>
        <div className={c.brand_text}>
          <p>бренд <span></span></p> 
          <p>который</p>
          <p>ценят за уникальность</p>
        </div>
      </div>
      <div className={c.brand_shine}>
        <img src={shine} alt="" />
        <div className={c.shine_text}>
          <p>
            <span>ЭТО НАШЕ ВРЕМЯ СИЯТЬ</span> - KELVIN
          </p>
        </div>
      </div>
    </div>
  )
}

export default Brand

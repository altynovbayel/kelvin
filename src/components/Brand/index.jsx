import React from 'react'
import c from './Brand.module.scss'
import shine from '../../img/shine.png'
import { motion, useViewportScroll } from 'framer-motion'

const Brand = () => {
  const { scrollYProgress } = useViewportScroll()
  
  return (
    <div className={c.brand}>
      <div className={c.line}></div>
      <div className={c.container}>
        <div className={c.brand_text}>
          <div>
            <p
              style={{
                position: 'relative',
                bottom: scrollYProgress - 1000,
                right: 0
              }}
            >
              бренд
            <span className={c.mr}></span></p> 
          </div>
          <div>
            <p>который</p>
          </div>
          <div>
            <p className={c.text_left}><span className={c.grey}>ценят за</span> уникальность</p>
          </div>
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

import React from 'react'
import c from './Brand.module.scss'
import shine from '../../img/shine.png'
import { motion, useMotionValue, useScroll, useSpring, useTransform, useViewportScroll } from 'framer-motion'

const Brand = () => {
  const x = useMotionValue(0)
  const y = useSpring(0)
  
  const z = useTransform(
    [x, y],
    ([latestX, latestY]) => latestX * latestY
  )
  return (
    <div className={c.brand}>
      <div className={c.line}></div>
      <div className={c.container}>
        <div className={c.brand_text}>
          <div
          >
            <motion.p
              style={{z, x, y}}
            >
              бренд
            <span className={c.mr}></span></motion.p> 
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

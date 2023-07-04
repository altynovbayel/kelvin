import React from 'react'
import c from './Banner.module.scss'
import banner from '../../img/banner-2.svg'
import { useViewportScroll, motion, useTransform } from 'framer-motion';


const Banner = () => {
  const { scrollYProgress } = useViewportScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [1, 4]);

  return (
    <motion.div className={c.banner}>
      <div className={c.top_text}>
        <h1>
          БРЕНД КОТОРЫЙ
          <br />
          ИЗМЕНИТ ВСЁ <span></span>
        </h1>
      </div>
      <div className={c.banner_title}>
        <div className={c.banner_subtitle}>
          <p>Делаем качественно, красиво и с душой</p>
        </div>
        <motion.img 
          src={banner} 
          style={{
            scale 
          }}
        />
      </div>
    </motion.div>  
  )
}

export default Banner
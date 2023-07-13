import React from 'react'
import c from './Banner.module.scss'
import banner from '../../img/banner-2.svg'
import { useViewportScroll, motion, useTransform } from 'framer-motion';


const Banner = () => {
  const [ scrollPix, setScrollPix ] = React.useState(0)
  const { scrollYProgress } = useViewportScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [1, 4]);

  window.onscroll =  () => {
    setScrollPix(window.scrollY); // Value of scroll Y in px
  };


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
        <div
          style={scrollPix >= 1200 ?
          {
            overflow: 'hidden'
          } : {
            
          }}
        >
          <motion.img 
            src={banner} 
            style={{
              scale 
            }}
          />
        </div>
      </div>
    </motion.div>  
  )
}

export default Banner
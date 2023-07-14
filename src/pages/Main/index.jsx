import React from 'react'
import c from './Main.module.scss'
import { Components } from '../../components'
import LottieAnimation from '../../components/lottie'
import { motion } from 'framer-motion'


const Main = () => {
  const [ scrollPixel, setScrollPixel ] = React.useState(0)

  window.onscroll = () => {
    setScrollPixel(window.scrollY); // Value of scroll Y in px
  };
  return (
    <div className={c.container}>
      <div className={c.main}>
        <Components.Banner/>
        <motion.div
          style={{
            position: 'relative',
            top: `-${scrollPixel+400}px`
          }} 
          className={c.scroll}
        >
          <Components.AboutBlock/>
          {/* <LottieAnimation /> */}
          <Components.Brand/>
          <Components.Products/>
          <Components.Facts/>
          <Components.Logo/>
        </motion.div>
        
      </div>
    </div>
  )
}

export default Main

import React from 'react'
import c from './Main.module.scss'
import { Components } from '../../components'
import LottieAnimation from '../../components/lottie'
import { motion } from 'framer-motion'


const Main = () => {
  const [ scrollPixel, setScrollPixel ] = React.useState(0)
  const [screenWidth, setScreenWidth] = React.useState(0)

  window.onscroll = () => {
    setScrollPixel(window.scrollY); // Value of scroll Y in px
  };

  React.useEffect(() => {
    setScreenWidth(window.innerWidth)
  })

  return (
    <div className={c.container}>
      <div className={c.main}>
        <Components.Banner/>
        <div
          style={{
            position: 'relative',
            top: scrollPixel === 0 ? 0 : `-${scrollPixel+400}px`
          }} 
          className={c.scroll}
        >
          <Components.AboutBlock/>
          {/* <LottieAnimation /> */}
          <Components.Brand/>
          <Components.Products/>
          <Components.Facts/>
          {/* <Components.Logo/> */}
        </div>
        
      </div>
    </div>
  )
}

export default Main

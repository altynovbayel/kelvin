import React from 'react'
import c from './Main.module.scss'
import { Components } from '../../components'
import LottieAnimation from '../../components/lottie'


const Main = () => {
  return (
    <div className={c.main}>
      <Components.Banner/>
      {/* <Components.AboutBlock/> */}
      {/* <Components.Brand/>
      <Components.Products/>
      <Components.Facts/> */}
      <LottieAnimation />
    </div>
  )
}

export default Main

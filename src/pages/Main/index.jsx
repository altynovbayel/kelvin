import React from 'react'
import c from './Main.module.scss'
import { Components } from '../../components'
import LottieAnimation from '../../components/lottie'


const Main = () => {
  return (
    <div className={c.main}>
      <Components.Banner/>
      <Components.AboutBlock/>
      <LottieAnimation />
      <Components.Brand/>
      <Components.Products/>
      <Components.Facts/>
      
    </div>
  )
}

export default Main

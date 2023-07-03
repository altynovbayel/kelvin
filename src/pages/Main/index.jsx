import React from 'react'
import c from './Main.module.scss'
import { Components } from '../../components'


const Main = () => {
  return (
    <div className={c.main}>
      <Components.Banner/>
      <Components.AboutBlock/>
      <Components.Brand/>
      <Components.Products/>
      {/* <Components.Facts/> */}
    </div>
  )
}

export default Main

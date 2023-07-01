import React from 'react'
import c from './Main.module.scss'
import Banner from '../../components/Banner'
import AboutBlock from '../../components/AboutBlock'
import Brand from '../../components/Brand'
import Products from '../../components/Products'
import Facts from '../../components/Facts'

const Main = () => {
  return (
    <div className={c.main}>
      <Banner/>
      <AboutBlock/>
      <Brand/>
      <Products/>
      <Facts/>
    </div>
  )
}

export default Main

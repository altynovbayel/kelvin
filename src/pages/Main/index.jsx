import React from 'react'
import c from './Main.module.scss'
import Banner from '../../components/Banner'
import AboutBlock from '../../components/AboutBlock'

const Main = () => {
  return (
    <div className={c.main}>
      <Banner/>
      <AboutBlock/>
    </div>
  )
}

export default Main

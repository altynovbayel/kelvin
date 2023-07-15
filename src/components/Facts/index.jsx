import React from 'react'
import c from './Facts.module.scss'
import FactsCard from '../FactsCard'
import { motion } from 'framer-motion'

const Facts = () => {
  
  
  return (
    <div className={c.facts}>
      <div className={c.container}>
        <FactsCard/>
        <FactsCard/>
        <FactsCard/>
      </div>
    </div>
  )
}

export default Facts

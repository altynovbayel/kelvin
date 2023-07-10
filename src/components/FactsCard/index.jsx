import React from 'react'
import c from './FactsCard.module.scss'
import { motion } from 'framer-motion'

const FactsCard = () => {
  return (
    <motion.div
      className={c.card}
      style={{
        scale: 0.9,
      }}
      whileInView={{
        scale: 1,
        translateY: 0
      }}
    >
      <div className={c.title}>
        <h1>Вдохновение через инновации</h1>
      </div>
      <div className={c.text}>
        <div>
          1
        </div>
        <p>
          Все, что мы создаем, основано на стремлении к превосходству и передовым технологиям. Мы не просто следуем за трендами – мы устанавливаем новые стандарты, воплощая вдохновляющие идеи в каждой детали наших продуктов. 
          <br /> 
          <br />
          Kelvin – это бренд, который вдохновляет вас видеть мир в новом свете и преобразовывать реальность через инновационный подход.
        </p>
      </div>
    </motion.div>
  )
}

export default FactsCard

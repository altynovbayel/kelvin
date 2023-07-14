import React from 'react'
import c from './FactsCard.module.scss'
import { motion } from 'framer-motion'


const FactsCard = () => {

  const [ active, setActive ] = React.useState(1)

  return (
    <motion.div
      className={c.card}
    >
      <div className={c.title}>
        <div>
          1
        </div>
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

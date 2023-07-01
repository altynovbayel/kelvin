import React from 'react'
import c from './FactsCard.module.scss'

const FactsCard = () => {
  return (
    <div className={c.card}>
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
    </div>
  )
}

export default FactsCard

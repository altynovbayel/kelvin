import React from 'react'
import { BsPercent } from 'react-icons/bs'
import c from './promocode.module.scss'
import { BiSolidChevronDown, BiSolidChevronUp } from 'react-icons/bi'

const Promocode = () => {
  const [ active, setActive ] = React.useState(false)

  return (
    <div className={c.promocode}>
      <div
        onClick={() => setActive(!active)}
      >
        <div className={c.left}>
          <li>
            <BsPercent />
          </li>
          <h3>Ввести промокод</h3>
        </div>
        <div className={c.right}>
          <span>
            {active ? <BiSolidChevronUp /> : <BiSolidChevronDown />}
          </span>
        </div>
      </div>
      {
        active ? 
        <div className={c.active}>
          <input 
            type="text"
            placeholder='Промокод'
          />
          <button>Применить промокод</button>
        </div> : 
        null
      }
    </div>
  )
}

export default Promocode
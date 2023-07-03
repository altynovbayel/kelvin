import React from 'react'
import { BsPercent } from 'react-icons/bs'
import c from './promocode.module.scss'
import { BiSolidChevronDown, BiSolidChevronUp } from 'react-icons/bi'
import { GetPromocodes } from '../../helpers'
import { useForm } from 'react-hook-form'

const Promocode = () => {
  const [ active, setActive ] = React.useState(false)

  const { promocodes } = GetPromocodes()


  const {
    register,
    handleSubmit,
    reset
  } = useForm()

  const getDiscount = (code) => {
    const dis = promocodes?.find(item => item.code === code)
    const discount = dis?.discount?.slice(0, dis.discount.length - 3)

    if(dis && dis.is_active) {
      localStorage.setItem('discount', discount)
      alert('Промокод рабочий!')
    }else if(dis.is_active !== true){
      alert('Промокод устарелый, или неправильно указанный!')
      localStorage.setItem('discount', 0)
    }else{
      alert('Промокод устарелый, или неправильно указанный!')
      localStorage.setItem('discount', 0)
    }
    reset()
  }  

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
        <form 
          className={c.active}
          onSubmit={handleSubmit(data => getDiscount(data.code))}
        >
          <input 
            type="text"
            placeholder='Промокод'
            maxLength={6}
            {...register('code')}
          />
          <button type='submit'>Применить промокод</button>
        </form> : 
        null
      }
    </div>
  )
}

export default Promocode
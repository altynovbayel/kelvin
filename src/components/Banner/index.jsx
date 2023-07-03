import React from 'react'
import c from './Banner.module.scss'
import banner from '../../img/banner-2.svg'

const Banner = () => {
  return (
    <div className={c.banner}>
      <div className={c.top_text}>
        <h1>
          БРЕНД КОТОРЫЙ
          <br />
          ИЗМЕНИТ ВСЁ <span></span>
        </h1>
      </div>
      <div className={c.banner_title}>
        <div className={c.banner_subtitle}>
          <p>Делаем качественно, красиво и с душой</p>
        </div>
        <img src={banner} alt="" />
      </div>
    </div>  
  )
}

export default Banner
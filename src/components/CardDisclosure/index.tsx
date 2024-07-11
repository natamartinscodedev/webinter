'use client'

import Image from 'next/image'
import React from 'react'
import Buttom from '@/components/Button/index'

interface typeParams {
  img: string | any,
  title: string,
  description: string,
  titlebutton?: string,
  disableTitle: boolean,
}

const CardDisclousure = ({ img, title, description, titlebutton, disableTitle }: typeParams) => {
  return (
    <div className='card_disclosure'>
      <div className='disclosure_img'>
        <Image src={img} alt={title} />
      </div>
      <div className='disclosure_info'>
        <h3>{title}</h3>
        <p>{description}</p>
        {
          disableTitle ?
            <button className='btn'>{titlebutton}</button>
            : ''
        }
      </div>
    </div>
  )
}

export default CardDisclousure
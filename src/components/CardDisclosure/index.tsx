'use client'

import Image from 'next/image'
import React from 'react'

interface typeParams {
  img: string | any,
  title: string,
  description: string,
  titlebutton: string,
  disableTitle: boolean,
}

const CardServices = ({ img, title, description, titlebutton, disableTitle }: typeParams) => {
  return (
    <div className=''>
      <div className=''>
        <Image src={img} alt={title} />
      </div>
      <div className=''>
        <h2>{title}</h2>
        <p>{description}</p>
        {
          disableTitle ?
            <button>{titlebutton}</button>
            : ''
        }
      </div>
    </div>
  )
}

export default CardServices
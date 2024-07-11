'use client'

import Image from 'next/image'
import React from 'react'

interface typeParams {
    Icon: any,
    description: string
}

const CardService = ({ Icon, description }: typeParams) => {
    return (
        <div className='card_service'>
            <span>
                {Icon}
            </span>
            <p>{description}</p>
        </div>
    )
}

export default CardService
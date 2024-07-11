'use client'

import Image from 'next/image'
import React from 'react'

interface typeParams {
    icon: any,
    description: string
}

const CardDisclousure = ({ icon, description }: typeParams) => {
    return (
        <div className=''>
            <Image src={icon} alt={description} />
            <p>{description}</p>
        </div>
    )
}

export default CardDisclousure
import Image from 'next/image'
import React from 'react'

interface typeButton {
    title: string,
    state: boolean,
    style: boolean,
    icon?: any | string,
}

const Button = ({ title, state, style, icon }: typeButton) => {

    return (
        <button className={`card_button ${style ? 'button_on' : 'button_of'}`}>
            {state && <Image src={icon} alt={title} />}
            {title}
        </button>
    )
}

export default Button
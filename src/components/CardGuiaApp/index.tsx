import React from 'react'

interface typeCard {
    stap: number,
    title: string,
    state: boolean,
}

const CardGuiaApp = ({ stap, title, state }: typeCard) => {
    return (
        <div className='card_guia-app-info'>
            <span>{stap}</span>
            <p>{title}</p>
            {state && <div className='box_separetion' />}
        </div>
    )
}

export default CardGuiaApp
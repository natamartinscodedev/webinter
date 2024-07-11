import Link from 'next/link'
import React from 'react'

interface typecardList {
    title: string,
    children: any
}

export const ItemList = ({ subTitle, link }: any) => {
    return (
        <Link href={link}>
            {subTitle}
        </Link>
    )
}

const CardList = ({ title, children }: typecardList) => {
    return (
        <ul className='card_list'>
            <li className='item_list-title'>{title}</li>
            <div>
                {children}
            </div>
        </ul>
    )
}

export default CardList
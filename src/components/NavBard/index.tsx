'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import Buttom from '@/components/Button/index'
import Logo from '@/image/logoInter.png'
import IconMac from '@/image/IconMac.svg'
import IconGoogle from '@/image/iconGooglePlay.svg'
import { Menu, X } from 'lucide-react'

const NavBar = () => {
    const [openMenu, setOpenMenu] = useState(false)

    const handleOpen = () => {
        setOpenMenu(!openMenu)
    }


    return (
        <div className='card_navbar'>
            <Image
                src={Logo}
                width={100}
                height={100}
                alt='logo do banco Inter'
            />
            <div className='boz_link-menu'>
                <Buttom
                    title='App Store'
                    icon={IconMac}
                    state={true}
                    style={false}
                />
                <Buttom
                    title='Google Play'
                    icon={IconGoogle}
                    state={true}
                    style={false}
                />
                <Buttom
                    title='Abra sua Conta'
                    state={false}
                    style={true}
                />
            </div>
            <div className='card_menu'>
               {
                !openMenu && ( <button onClick={() => handleOpen()} className='open'><Menu /></button>)
               }
                {
                    openMenu && (
                        <div className='card_menu-modal'>
                            <button onClick={() => handleOpen()} className='closed'><X /></button>
                            <Buttom
                                title='App Store'
                                icon={IconMac}
                                state={true}
                                style={false}
                            />
                            <Buttom
                                title='Google Play'
                                icon={IconGoogle}
                                state={true}
                                style={false}
                            />
                            <Buttom
                                title='Abra sua Conta'
                                state={false}
                                style={true}
                            />
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default NavBar
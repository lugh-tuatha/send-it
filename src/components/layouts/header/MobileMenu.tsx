"use client"
import React, { useState } from 'react'
import Image, { StaticImageData } from 'next/image'

import { ChevronDown, Menu, X } from 'lucide-react'
import * as motion from "motion/react-client"
import Link from 'next/link'

type SubMenuProps = {
    name: string
    description: string
    href: string
    icon: StaticImageData
}

type MenuProps = {
    name: string
    sub_heading?: string[]
    sub_menu: SubMenuProps[]
    href: string,
    grid_cols?: number
}

export default function MobileMenu({ menus }: { menus: MenuProps[] }) {
    const [isOpen, setIsOpen] = useState(false)
    const [clicked, setClicked] = useState<number | null>(null)

    const toggleDrawer = () => {
        setIsOpen(!isOpen)
        setClicked(null)
    }

    const subMenuAnimation = {
        enter: {
            height: 'auto',
            overflow: 'hidden'
        },
        exit: {
            height: 0,
            overflow: 'hidden'
        }
    }

    return (
        <div>
            <button onClick={toggleDrawer} className='flex-center z-50 relative'>
                {isOpen ? <X /> : <Menu />}
            </button>

            <motion.div 
                initial={{ x: "-100%" }}
                animate={{ x: isOpen ? "0%" : "-100%" }}
                className='fixed left-0 right-0 top-16 overflow-y-auto h-full p-6 bg-background z-50'
            >
                <ul>
                    {menus?.map(({name, sub_menu, href}, i) => {
                        const isClicked = clicked === i
                        const hasSubMenu = sub_menu?.length > 0;

                        const handleLinkClick = () => {
                            if (!hasSubMenu) {
                                setIsOpen(false)
                            } else {
                                setClicked(isClicked ? null : i);
                            }
                        }
                        return (
                            <li key={name}>
                                <Link href={href}
                                    className='flex-center-between p-4 cursor-pointer relative' 
                                    onClick={handleLinkClick}
                                >
                                    {name}
                                    {hasSubMenu && <ChevronDown className={`ml-auto ${isClicked && 'rotate-180'}`} />}
                                </Link>
                                {hasSubMenu && (
                                    <motion.ul 
                                    initial="exit"
                                    animate={isClicked ? "enter" : "exit"}
                                    variants={subMenuAnimation}
                                    className='ml-5'>
                                        {sub_menu?.map((item) => (
                                            <li key={item.name}  onClick={() => setIsOpen(false)}>
                                                <Link href={item.href} className='p-2 flex-center cursor-pointer gap-4'>
                                                    <Image src={item.icon} alt={item.name} width={24} height={24} className='size-6' />
                                                    {item.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </motion.ul>
                                )}
                            </li>
                        )
                    })}
                </ul>
            </motion.div>
        </div>
    )
}

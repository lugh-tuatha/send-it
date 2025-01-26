"use client"
import React, { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import { ChevronDown } from 'lucide-react'
import * as motion from "motion/react-client"

type SubMenu = { 
    name: string
    description: string
    href: string
    icon?: StaticImageData
}

type MenuProps = {
    name: string
    sub_heading?: string[]
    sub_menu?: SubMenu[]
    grid_cols?: number
    href: string
}

export default function DesktopMenu({ menu }: { menu: MenuProps}) {
    const [isHover, setIsHover] = useState(false)

    const toggleMenu = () => {
        setIsHover(!isHover)
    }

    const subMenuAnimation = {
        enter: {
            opacity: 1,
            rotateX: 0,
            transition: {
                duration: 0.5,
            },
            display: 'block',
        },
        exit: {
            opacity: 0,
            rotateX: -15,
            transition: {
                duration: 0.5,
            },
            display: 'none',
        }
    }

    const hasSubMenu = menu.sub_menu && menu.sub_menu.length > 0
    return (
        <motion.li className='group/link' onHoverStart={toggleMenu} onHoverEnd={toggleMenu}>
            <Link href={menu.href} className='flex-center gap-2 cursor-pointer px-1 py-1'>
                {menu.name}
                {hasSubMenu && <ChevronDown className='group-hover/link:rotate-180 duration-200' />}
            </Link>
            {hasSubMenu && (
                <motion.div className='sub-menu z-20'
                    initial="exit"
                    animate={isHover ? "enter": "exit"}
                    variants={subMenuAnimation}
                > 
                    {menu.sub_heading?.map((heading) => (
                        <p className='text-sm text-text-600 font-semibold mb-2' key={heading}>{heading}</p>
                    ))}
                    <div className={`grid gap-x-7 gap-y-4 ${menu.grid_cols === 1 ? 'grid-cols-1' : 'grid-cols-2'}`}>
                        {menu.sub_menu?.map((sub_menu, index) => (
                            <Link href={sub_menu.href} key={index} className='relative cursor-pointer'>
                                <div className='flex-center gap-4 group/menubox'>
                                    <div className='bg-primary-foreground w-fit p-2 rounded-md group-hover/menubox:bg-white duration-300'>
                                        {sub_menu?.icon && <Image src={sub_menu.icon} alt={sub_menu.name} width={24} height={24} className='size-8' />}
                                    </div>
                                    <div className='max-w-40'>
                                        <h6 className='font-semibold'>{sub_menu?.name}</h6>
                                        <p className='text-sm text-text-600'>{sub_menu?.description}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </motion.div>
            )}
        </motion.li>   
    )
}

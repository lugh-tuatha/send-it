"use client"
import React from 'react'
import Link from 'next/link'

import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

import { Menus } from '@/assets/data/menus'
import { Button } from '../../ui/Button'
import DesktopMenu from './DesktopMenu'
import MobileMenu from './MobileMenu'
export default function Header() {
    return (
        <header className='fixed top-0 w-full border-b-2 z-50 border-primary-foreground'>
            <nav className="container py-4 flex-center-between">
                <h1 className="text-xl font-bold">
                    <Link href='/'>Send It</Link>
                </h1>

                <ul className='lg:flex-center hidden gap-4'>
                    {Menus.map((menu) => (
                        <DesktopMenu key={menu.name} menu={menu} />
                    ))}
                </ul>
                
                <div className='flex-center gap-4'>
                    <SignedOut>
                        <Link href="/sign-in">
                            <Button>Sign In</Button>
                        </Link>
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>

                    <div className='lg:hidden'>
                        <MobileMenu menus={Menus}/> 
                    </div>
                </div>
            </nav>
        </header>
    )
}
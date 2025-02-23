"use client"
import React from 'react'

import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Button } from '../../ui/Button'
import Link from 'next/link'

export default function ClerkSignIn() {
  return (
    <>
        <SignedOut>
            <Link href="/sign-in">
                <Button>Sign In</Button>
            </Link>
        </SignedOut>
        <SignedIn>
            <UserButton />
        </SignedIn>
    </>
  )
}

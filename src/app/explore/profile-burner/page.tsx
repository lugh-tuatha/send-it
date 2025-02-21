import React from 'react'

import { Button } from '@/components/ui/Button'
import { Facebook, Twitter } from 'lucide-react'
import Link from 'next/link'

export default function ProfileBurner() {
    return (
        <div className='pt-20 h-screen w-full flex-center flex-col gap-4 justify-center'>
            <div className="w-48">
                <h1 className='text-xl text-text-900 font-semibold'>Roast My...</h1>
                <div className="mt-4 flex flex-col items-start gap-4">
                    <Link href="/explore/profile-burner/x" className='w-full'>
                        <Button variant="outline" className='flex-center py-3 gap-2 w-full'>
                            <Twitter />
                            Burn X Profile
                        </Button>
                    </Link>
                    <Button variant="outline" className='flex-center py-3 gap-2 w-full border-text-600 text-text-600' disabled>
                        <Facebook />
                        Coming soon
                    </Button>
                </div>
            </div>
        </div>
    )
}
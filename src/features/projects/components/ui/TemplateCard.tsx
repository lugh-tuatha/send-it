import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import thumb from '@/assets/images/sample.jpeg'
import { Hammer, Heart } from 'lucide-react'

export default function TemplateCard() {
    return (
        <div className='p-4 pb-2 bg-white border-2 border-primary rounded-md cursor-pointer'>
            <Link  href="/projects/create/love-ly-chase">
                <Image src={thumb} alt="sample" width={200} height={200} className='w-full rounded-md hover:-translate-y-1 transition-all' />
            </Link>

            <div className='mt-2 flex-center justify-between gap-2'>
                <h1 className='font-semibold text-text-900'>A Love-ly Chase</h1>
                <div className="flex-center justify-between gap-2">
                    <div className="flex-center gap-1">
                        <Heart size={20} />
                        <span className='text-sm text-text-600'>123</span>
                    </div>
                    <div className="flex-center gap-1">
                        <Hammer size={20} />
                        <span className='text-sm text-text-600'>1</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

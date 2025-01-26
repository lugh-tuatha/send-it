import { Facebook, Link, Twitter } from 'lucide-react'
import React from 'react'

export default function ProjectCard() {
    return (
        <div className='border-2 border-primary bg-white p-4 rounded-md cursor-pointer'>
            <h1 className='text-lg font-semibold text-text-900'>Title</h1>
            <h2 className='font-medium text-text-600'>Description</h2>
            
            <div className='flex-center gap-2 mt-4'>
                <Link size={16} />
                Link
            </div>
            <div className='flex-center gap-2 text-xl'>
                <span className='font-bold text-text-600 text-xl'>Share</span>
                <Facebook size={18}/>
                <Twitter size={18}/>
            </div>
        </div>
    )
}

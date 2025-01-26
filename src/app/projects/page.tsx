import React from 'react'

import { Plus } from 'lucide-react'

import ProjectCard from '@/features/projects/components/ui/PojectCard'
import Link from 'next/link'
export default function Projects() {
    return (
        <div className="mt-20">
            <h1 className='page-title'>Projects</h1>

            <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 mt-4">
                <Link href="/projects/create" className='flex-center justify-center border-2 border-primary bg-white p-4 rounded-md cursor-pointer'>
                    <Plus size={60}/>
                </Link>
                <ProjectCard />
                <ProjectCard />
            </div>
        </div>
    )
}

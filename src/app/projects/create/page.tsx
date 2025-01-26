import React from 'react'

import TemplateCard from '@/features/projects/components/ui/TemplateCard'

export default function Create() {
    return (
        <div className="mt-20">
            <h1 className='page-title'>Templates</h1>

            <div className="mt-4 grid grid-cols-5 gap-4">
                <TemplateCard />
            </div>
        </div>
    )
}

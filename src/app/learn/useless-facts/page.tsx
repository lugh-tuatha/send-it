"use client"
import React from 'react'

import { Quote } from 'lucide-react'

import { Button } from '@/components/ui/Button'
import { useRandomUselessFact } from '@/features/learn/hooks/use-useless-fact'
import UselessFactSkeleton from '@/features/learn/components/ui/UselessFactSkeleton'

export default function UselessFacts() {
    const { data, isLoading, refetch } = useRandomUselessFact();

    return (
        <div className='flex items-center justify-center flex-col gap-4 w-full h-screen'>
            <Button onClick={() => refetch()} className='mt-4'>Generate Random Useless Facts</Button>
            <div className='w-full lg:w-1/3 flex-center flex-col gap-4 border-2 border-primary p-6 rounded-md text-center shadow-primary'>
                <Quote className='text-primary'/>
                {!isLoading ? <p className='text-text-900 text-xl leading-8'>{data.text}</p> : <UselessFactSkeleton />}
                <Button>Share</Button>
            </div>
            {!isLoading && <a className='w-full lg:w-1/3 text-right text-text-600 underline' href={data.source_url}>source: {data.source}</a>}
        </div>
    )
}

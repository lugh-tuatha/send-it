import React from 'react'

export default function UselessFactSkeleton() {
    return (
        <div className='flex-center flex-col gap-4 w-full animate-pulse'>
            <p className='h-4 bg-gray-300 rounded-full w-11/12'></p>
            <p className='h-4 bg-gray-300 rounded-full w-9/12'></p>
            <p className='h-4 bg-gray-300 rounded-full w-10/12'></p>
        </div>
    )
}

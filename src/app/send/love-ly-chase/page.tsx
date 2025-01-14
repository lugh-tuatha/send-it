"use client"

import React, { useState } from 'react'
import Image from 'next/image';

import * as motion from "motion/react-client"

import { useQuery } from '@tanstack/react-query';

import { Button } from '@/components/ui/Button'

import { getRandomGif } from '@/features/send/services/giphy';

export default function LoveLyChase() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [noClickCount, setNoClickCount] = useState(0)
    const [gifs, setGifs] = useState<string[]>([])

    const { data: randomGif, refetch } = useQuery({ 
        queryKey: ['random-gif'], 
        queryFn: getRandomGif, 
        enabled: false, 
        staleTime: Infinity 
    })

    const onNoButtonAction = () => {
        const randomX = Math.random() * (100 - (-200)) + (-200);
        const randomY = Math.random() * (225 - (-350)) + (-350);
        setPosition({ x: randomX, y: randomY });

        setNoClickCount((prevCount) => {
            const newCount = prevCount + 1;

            if (newCount == 3 || newCount == 10) {
                refetch().then((result) => {
                    if (result){
                        setGifs((prevGifs) => [...prevGifs, result.data.data.images.downsized_medium.url])
                    }
                })
            }

            return newCount;
        })
    };

    console.log(gifs)

    return (
        <div className='container'>
            <div className='relative max-w-lg mx-auto px-4 h-screen text-center flex flex-col gap-6 justify-center'>
                <div>
                    <h1 className="font-bold text-3xl text-text-900">TItle!</h1>
                    <p className="text-text-600 text-xl">asdasad</p>
                </div>
                
                <div className="flex items-center gap-4 justify-center">
                    <Button variant='success'>Yes</Button>
                    <motion.div 
                        animate={position}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    >
                        <Button variant='danger' onClick={onNoButtonAction}>No</Button>
                    </motion.div>
                </div>
                
                <p className='text-text-600'>
                    You have pressed 'No' {noClickCount} times.
                </p>
                
                <div className="absolute w-full h-full right-0 -z-10">
                    {gifs.length >= 1 ? (
                        <Image 
                            height={10}
                            width={10}
                            className='h-36 w-auto mx-auto absolute left-4 top-12'
                            alt='random gif'
                            src={gifs[0]}
                            priority
                        ></Image>
                    ) : null}

                    {gifs.length >= 2 ? (
                        <Image 
                            height={10}
                            width={10}
                            className='h-40 w-auto mx-auto absolute bottom-12 right-10'
                            alt='random gif'
                            src={gifs[1]}
                            priority
                        ></Image>
                    ) : null}
                </div>
            </div>

            
        </div>  
    )
}
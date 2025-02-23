"use client"

import React, { useEffect, useState } from 'react'
import './index.css'
import Image from 'next/image';

import * as motion from "motion/react-client"
import Confetti from 'react-confetti'

import { Button } from '@/components/ui/Button'

import { preLoadAudio, playAudio } from '@/utils/audio';
import { useGiphy } from '@/features/send/hooks/use-giphy';

import noButtonSound from '@/assets/audio/avoid-button.mp3';
import yesButtonSound from '@/assets/audio/hooray.mp3';

export default function LoveLyChase() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [noClickCount, setNoClickCount] = useState(0)
    const [isYesClicked, setIsYesClicked] = useState(false)
    const [gifs, setGifs] = useState<string[]>([])

    const { refetch } = useGiphy();

    useEffect(() => {
        preLoadAudio(noButtonSound);
        preLoadAudio(yesButtonSound);
    }, []);

    const onNoButtonAction = () => {
        const randomX = Math.random() * (100 - (-200)) + (-200);
        const randomY = Math.random() * (225 - (-300)) + (-300);
        setPosition({ x: randomX, y: randomY });

        playAudio(noButtonSound);

        setNoClickCount((prevCount) => {
            const newCount = prevCount + 1;

            if (newCount == 3 || newCount == 10) {
                refetch().then((result) => {
                    console.log(result)
                    if (result){
                        setGifs((prevGifs) => [...prevGifs, result.data.data.images.downsized_medium.url])
                    }
                })
            }

            return newCount;
        })
    };

    const handleYesClick = () => {
        setIsYesClicked(true)
        playAudio(yesButtonSound);
    }

    return (
        <div className='relative max-w-lg mx-auto px-4 h-screen text-center flex flex-col gap-6 justify-center z-10'>
            <div>
                <h1 className="title font-bold text-text-900">Hey Love!</h1>
                <p className="text-text-600 text-lg">Would you do me the honor of being my date?</p>
            </div>
            
            <div className="flex items-center gap-4 justify-center">
                <Button variant='success' onClick={handleYesClick}>Yes</Button>
                <motion.div 
                    animate={position}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                    <Button variant='danger' onClick={onNoButtonAction}>No</Button>
                </motion.div>
            </div>
            
            {isYesClicked ? (
                <>
                    <p className='font-meduim text-success'>💃🕺 Let&#39;s plan the best date ever. ❤️</p>
                    <Confetti
                        width={500}
                        height={500}
                        className='w-full h-full'
                    />
                </>

            ) : (
                <p className={`${noClickCount > 0 ? 'opacity-100' : 'opacity-0'} text-text-600`}>
                    You have tried to pressed <span className='text-danger'>&#39;No&#39;</span> {noClickCount} times.
                </p>
            )}
            
            <div className="absolute w-full h-full right-0 -z-10">
                {gifs.length >= 1 && (
                    <Image 
                        height={10}
                        width={10}
                        className='h-36 w-auto mx-auto absolute left-4 top-20'
                        alt='random gif'
                        src={gifs[0]}
                        priority
                    />
                )}

                {gifs.length >= 4 && (
                    <Image 
                        height={10}
                        width={10}
                        className='h-28 w-auto mx-auto absolute bottom-24 right-10'
                        alt='random gif'
                        src={gifs[3]}
                        priority
                    />
                )}
            </div>
        </div>
    )
}
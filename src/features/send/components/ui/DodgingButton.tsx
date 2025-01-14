"use client"
import React, { useState } from 'react'

import * as motion from "motion/react-client"

import { Button } from '@/components/ui/Button'

export default function DodgingButton() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [noClickCount, setNoClickCount] = useState(0)

    const onNoButtonAction = () => {
        const randomX = Math.random() * (100 - (-200)) + (-200);
        const randomY = Math.random() * (225 - (-350)) + (-350);
        setPosition({ x: randomX, y: randomY });

        setNoClickCount(prevCount => prevCount + 1)
    };

    return (
        <motion.div 
            animate={position}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
            <Button variant='danger' onClick={onNoButtonAction}>No</Button>
        </motion.div>
    )
}

import Image, { StaticImageData } from 'next/image'
import React from 'react'

import ReactMarkdown from "react-markdown";

type ChatBubbleProps = {
    message: string
    profile: StaticImageData
    name: string
}

export default function ChatBubble({ message, profile, name }: ChatBubbleProps) {
    return (
        <div>
            <p className="text-sm text-text-600 font-bold ml-14 mb-1">{name}</p>
            <div className="flex gap-4 items-start">
                <Image src={profile} alt="Ivan Profile" className="rounded-full" width={40} height={40} />
                <div className="px-4 py-2 max-w-2xl rounded-lg bg-text-900 text-white self-start">
                    <ReactMarkdown>{message}</ReactMarkdown>
                </div>
            </div>
        </div>
    )
}

"use client"
import { useState } from "react";
import Image, { StaticImageData } from 'next/image'
import './index.css'

import { SendHorizontal } from "lucide-react";
import { useGeminiAi } from "@/hooks/use-gemini-ai";
import TextareaAutosize from 'react-textarea-autosize';

import IvanTecno from '@/assets/images/profile/ivanish.jpg'
import IvanHoly from '@/assets/images/profile/ivan-holy.jpg'
import IvanGraduate from '@/assets/images/profile/ivan-graduate.png'
import Jonathan from '@/assets/images/profile/jonathan.png'
import Magno from '@/assets/images/profile/magno.jpg'
import ChatBubble from "@/features/explore/components/ivanish/ChatBubble";

type secondVoiceProps = {
    name: string,
    message: string,
    profile: StaticImageData
}

type chatProps = {
    input: string,
    message: string,
    profile: StaticImageData,
    second_voice: secondVoiceProps | null,
}

export default function Ivanish() {
    const [inputValue, setInputValue] = useState("");
    const [chats, setChats] = useState<chatProps[]>([])
    const [isThinking, setIsThinking] = useState(false)

    const { generateContent } = useGeminiAi()

    const getRandomSecondVoice = () => {
        const randomNumber = Math.floor(Math.random() * 10)
        console.log("generateRandom", randomNumber)
        if (randomNumber > 6) {
            const secondVoice = [
                {"name": "Jonathan Tomas", "message": "Hindi ka magsisisi lasang mang thomas", "profile": Jonathan},
                {"name": "Jonathan Tomas", "message": "SMALL WORLD🫠", "profile": Jonathan},
                {"name": "Jonathan Tomas", "message": "ODAM ako eh.", "profile": Jonathan},
                {"name": "AJ Manas", "message": "Galing akong canada... Like for real bro.... Lumaki ako dun pero di ako magaling mag english nagtatagalog kami dun", "profile": Magno},
            ]
            const randomIndex = Math.floor(Math.random() * secondVoice.length);
            return secondVoice[randomIndex];
        }else {
            return null
        }
    }

    const getRandomIvanProfile = () =>  {
        const ivanProfile = [IvanTecno, IvanHoly, IvanGraduate]
        const randomIndex = Math.floor(Math.random() * ivanProfile.length);
        return ivanProfile[randomIndex];
    }

    const handleGenerate = async (input: string) => {
        setIsThinking(true)
        const prompt = "Act as a people that cant understand your sentence and answer my prompt correctly but just hard to understand, your reply must be half english half tagalog, and always provide a fake news: " + input
        try {
            const response = await generateContent(prompt);
            setChats((prevChats) => [
                ...prevChats,
                {
                    input: input,
                    message: response,
                    profile: getRandomIvanProfile(),
                    second_voice: getRandomSecondVoice()
                },
            ]);
            setInputValue("");
        } catch (error) {
            console.error("Error generating content:", error);
        } finally {
            setIsThinking(false)
        }
    }

    return (
        <div className="pt-24 h-screen relative w-full space-y-4">
            {chats.length > 0 || isThinking ? (
                <div className="chats-container space-y-4">
                    {chats.map((chat, index) => (
                        <div key={index} className="flex flex-col gap-2">
                            <div className="px-4 py-2 bg-secondary w-auto max-w-2xl rounded-lg self-end">
                                {chat.input}
                            </div>

                            <ChatBubble
                                message={chat.message} 
                                profile={chat.profile} 
                                name="Ivan Tecno" 
                            />

                            {chat.second_voice != null && (
                                <ChatBubble
                                    message={chat.second_voice.message} 
                                    profile={chat.second_voice.profile} 
                                    name={chat.second_voice.name} 
                                />
                            )}
                        </div>
                    ))}

                    {isThinking && (
                        <ChatBubble
                            message="Ivan is thinking..."
                            profile={IvanHoly} 
                            name="Ivan Tecno"
                        />
                    )}
                </div>
            ) : (
                <div className="h-[calc(100vh-12rem)] flex flex-col justify-between">
                    <div className="flex flex-col gap-4 items-center">
                        <div className="flex-center gap-8">
                            <Image src={IvanHoly} alt="Ivan Profile" width={60} height={60} className="rounded-full" />
                            <h1 className="font-medium text-4xl text-text-600">Hi, I&#39;m Ivanish.</h1>
                        </div>

                        <p className="text-text-600">Now you see me, now you don&#39;t.</p>
                    </div>
                    
                    <div className="space-y-2">
                        <h1 className="text-text-600 font-bold">Suggested Prompt</h1>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                            <div
                                className="p-4 flex-center justify-between gap-4 border-2 border-primary rounded-lg bg-white cursor-pointer"
                                onClick={() => handleGenerate("What is bigger, 9.9 or 9.11")}
                            >
                                <p>What is bigger, 9.9 or 9.11?</p>
                                <SendHorizontal />
                            </div>
                            <div
                                className="p-4 flex-center justify-between gap-4 border-2 border-primary rounded-lg bg-white cursor-pointer"
                                onClick={() => handleGenerate("Tell me about aliens invading Earth")}
                            >
                                <p>Tell me about aliens invading Earth</p>
                                <SendHorizontal />
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="w-full p-2 bg-primary flex-center gap-2 text-primary-foreground rounded-lg absolute bottom-5">
                <TextareaAutosize
                    placeholder="Ask Ivan"
                    className="p-2 overflow-hidden bg-primary outline-none w-full"
                    minRows={1}
                    maxRows={5}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                ></TextareaAutosize>
                <SendHorizontal onClick={() => handleGenerate(inputValue)} className="cursor-pointer"/>
            </div>
        </div>
    )
}
import React, { ButtonHTMLAttributes, FC } from 'react'

import { VariantProps, cva } from 'class-variance-authority'
import { cn } from '@/utils/cn'

const buttonVariants = cva(
    'font-bold text-primary',
    {
        variants: {
            variant: {
                default: 'bg-primary text-primary-foreground rounded-md',
                outline: 'border-2 border-primary rounded-lg',
                danger: 'bg-white border-2 border-danger rounded-lg',
                success: 'bg-white border-2 border-success rounded-lg',
            },
            size: {
                default: 'px-5 py-2',
                sm: 'px-4 py-2',
            }
        },
        defaultVariants: {
            variant: "default",
            size: 'default'
        }
    }
)

interface ButtonProps 
    extends ButtonHTMLAttributes<HTMLButtonElement>, 
        VariantProps<typeof buttonVariants> { }

const Button: FC<ButtonProps> = ({ className, size, variant, ...props}) => {
    return (
        <button className={cn(buttonVariants({ variant, size, className }))} {...props} />
    )
}

export { Button, buttonVariants }
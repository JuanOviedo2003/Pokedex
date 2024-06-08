import React from 'react'

type Props = {
    color: string;
    text: string;
}

export default function Label({ color, text }: Props) {
    return (
        <div style={{ backgroundColor: color }} className='w-16 h-6 font-conden text-white text-center mr-2'>{text}</div>
    )
}
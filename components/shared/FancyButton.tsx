import React, { ReactNode } from 'react'

type Props = {
    className: string
    children: ReactNode
    onClick?: any
    variant?: "shadow" | "double-shadow" | "border-bottom"

}

const FancyButton = (props: Props) => {
    const { className, children, onClick, variant, ...rest } = props

    if (variant === "shadow") {
        return (
            <button onClick={onClick} className={`${className} p-3 border border-gray-300 mt-2 mb-4 focus:outline-none focus:border-gray-600 shadow-[0_0_40px_rgba(8,_112,_184,_0.7)] `} {...rest} >
                {children}
            </button>
        )
    } else if (variant === "double-shadow") {
        return (
            <button onClick={onClick} className={`${className} p-3 border border-gray-300 mt-2 mb-4 focus:outline-none focus:border-gray-600 shadow-[7px_7px_rgba(242,255,70,0.8)]`} {...rest} >
                {children}
            </button>
        )
    } else if (variant === "border-bottom") {
        return (
            <button onClick={onClick} className={`${className} p-3 mt-2 mb-4 border border-b-[8px] bg-[#01839b] border-[#b2beea]`} {...rest} >
                {children}
            </button>
        )
    } else {
        return (
            <button onClick={onClick} className={`${className} p-3 border border-gray-300 mt-2 mb-4 focus:outline-none focus:border-gray-600`} {...rest} >
                {children}
            </button>
        )
    }
}

export default FancyButton

// shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]

// shadow-[3px_2px_2px_2px_rgba(240,_46,_170,_0.4)]
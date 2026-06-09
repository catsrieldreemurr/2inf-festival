import { ReactNode } from "react";

interface SetProps{
    children?: ReactNode

    isBold?: boolean
    spacer?: boolean
    variant?: string
    isUnderscore?: boolean
    isItalic?: boolean
    isCentered?: boolean
    style?: string
}

export default function Typography({children, isBold, spacer, variant, isUnderscore, isItalic, isCentered, style}:SetProps){
    if(variant === "h1"){
        return <h1 className={`sm:text-4xl text-3xl ${isBold && 'font-bold'} ${spacer && 'mt-5'} ${isUnderscore && 'underline'} ${isItalic && 'italic'} ${isCentered && 'text-center'} ${style}`}>{children}</h1>
    }
    else if(variant === "h2"){
        return <h2 className={`sm:text-3xl text-2xl ${isBold && 'font-bold'} ${spacer && 'mt-5'} ${isUnderscore && 'underline'} ${isItalic && 'italic'} ${isCentered && 'text-center'} ${style}`}>{children}</h2>
    }
    else if (variant === "h3"){
        return <h3 className={`sm:text-2xl text-xl ${isBold && 'font-bold'} ${spacer && 'mt-5'} ${isUnderscore && 'underline'} ${isItalic && 'italic'} ${isCentered && 'text-center'} ${style}`}>{children}</h3>
    }
    else if (variant === "h4"){
        return <h4 className={`sm:text-xl text-lg ${isBold && 'font-bold'} ${spacer && 'mt-5'} ${isUnderscore && 'underline'} ${isItalic && 'italic'} ${isCentered && 'text-center'} ${style}`}>{children}</h4>
    }

    else {
        return <p className={`sm:text-md ${isBold && 'font-bold'} ${spacer && 'mt-5'} ${isUnderscore && 'underline'} ${isItalic && 'italic'} ${isCentered && 'text-center'} ${style}`}>{children}</p>
    }
}
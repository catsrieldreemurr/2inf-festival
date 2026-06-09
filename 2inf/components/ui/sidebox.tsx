import Image from "next/image"
import { Children, ReactNode } from "react"

interface SetProps{
    children?: ReactNode
    direction?: string
    src: string
    alt: string
    size?: number
    textDirection?: string
}

export default function Sidebox({children, src, direction, size, textDirection, alt}:SetProps){
    if (direction === "right"){
        return (
            <div className="flex flex-col-reverse sm:flex-row justify-center items-center gap-5 sm:gap-10 mt-10 ">
                <div className={`flex flex-col sm:w-120 w-[90%] text-center ${textDirection === "right" ? 'sm:text-right' : "sm:text-center"} wrap-break-word`}>
                    {children}
                </div>

                <Image src={src} height={size || 250} width={size || 250} alt={alt} className="rounded-lg"></Image>
            </div>
        )
    }
    
    else {
        return (
            <div className="flex flex-col sm:flex-row justify-center items-center gap-5 sm:gap-10 mt-10">
                <Image src={src} height={size || 250} width={size || 250} alt={alt} className="rounded-lg"></Image>
                
                <div className={`flex flex-col sm:w-120 w-[90%] text-center ${textDirection === "right" ? 'sm:text-right' : "sm:text-center"} wrap-break-word`}>
                    {children}
                </div>

                
            </div>
        )
    }
        
    
}
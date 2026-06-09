import Image from "next/image"
import { ReactNode } from "react"

interface SetProps{
    src: string
    imageAlt: string
    children: ReactNode
}

export default function AssignIcon({src, imageAlt, children}:SetProps){
    return (
        <div className="flex flex-row justify-center items-center gap-5">
            <Image src={src} height={25} width={25} alt={imageAlt}></Image>
            <div>{children}</div>
        </div>
    )
}
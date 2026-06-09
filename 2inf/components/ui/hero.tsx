import { ReactNode } from "react"

interface SetProps{
    children?: ReactNode
    href: string
}

export default function Hero({children, href}:SetProps){
    return (<div className="relative h-[50rem] w-full flex items-center justify-center bg-black/40 border-b-5 border-gray-600">
            <div className={`absolute inset-0 bg-[url(${href})] bg-cover bg-center opacity-100 -z-10`}></div>

            {children}
        </div>)
}
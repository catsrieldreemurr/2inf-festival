import { ReactNode } from "react"

interface SetProps{
    children?: ReactNode
}

export default function FooterBox({children}:SetProps){
    return (
        <div className="w-full sm:w-1/3 flex justify-center items-start gap-5 pt p-5">
            <div className="flex flex-col justify-center items-center">
                {children}
            </div>
        </div>
    )
}
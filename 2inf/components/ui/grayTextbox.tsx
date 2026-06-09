import { ReactNode } from "react";

interface SetProps{
    children?: ReactNode
    isTop?: boolean
}

export default function GrayTextbox({children, isTop}:SetProps){
    return (
        <div className={`text-center p-5 bg-gray-200 rounded-xl sm:w-1/3 m-5 ${isTop && "mt-10"}`}>
            {children}
        </div>
    )
}
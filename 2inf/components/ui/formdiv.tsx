import { ReactNode } from "react";

interface setprops{
    children?: ReactNode
}

export default function FormDiv({children}:setprops){
    return( 
        <div className="text-center flex flex-col items-center gap-2">
            {children}
        </div>
    )
}
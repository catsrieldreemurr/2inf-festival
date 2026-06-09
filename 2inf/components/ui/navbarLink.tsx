import Link from "next/link";
import { ReactNode } from "react";
import Typography from "./typography";

interface SetProps{
    children?: ReactNode
    href: string
}

export default function ({children, href}:SetProps) {
    return ( 
        <Link href={href} className="hover:bg-gray-200 p-2 rounded-xl">
            <Typography>{children}</Typography>
        </Link>
    )
}
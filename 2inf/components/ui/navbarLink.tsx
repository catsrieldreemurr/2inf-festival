import Link from "next/link";
import { ReactNode } from "react";
import Typography from "./typography";

interface SetProps{
    children?: ReactNode
    href: string
}

export default function ({children, href}:SetProps) {
    return ( 
        <Link href={href}>
            <Typography>{children}</Typography>
        </Link>
    )
}
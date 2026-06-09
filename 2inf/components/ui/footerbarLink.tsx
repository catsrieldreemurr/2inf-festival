import Link from "next/link"
import { ReactNode } from "react"
import Typography from "./typography"

interface SetProps{
    href: string
    children?: ReactNode
}

export default function FooterLink({href, children}:SetProps){
    return (
        <Link href={href} className="hover:bg-slate-700 p-1 rounded-lg"><Typography>{children}</Typography></Link>
    )
}
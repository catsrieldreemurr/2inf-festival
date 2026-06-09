import Link from "next/link";
import Typography from "./typography";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Button } from "./button";
import Image from "next/image";
import NavbarLink from "./navbarLink";


export default function Navbar(){
    return (
        <nav className="bg-white sticky top-0 z-5 border-b-5 border-gray-600">
            <div className="flex justify-between p-4">
                <Typography variant="h2" isBold>2INF-Festivalen</Typography>

                <div className="sm:flex flex-row gap-6 items-center justify-center hidden">
                    <NavbarLink href="/">Om Festivalen</NavbarLink>
                    <NavbarLink href="/">Program og Gjester</NavbarLink>
                    <NavbarLink href="/">Kart</NavbarLink>
                </div>

                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant={"ghost"} className="sm:hidden flex">
                            <Image src={"/menu.png"} alt="Menu" height={25} width={25}></Image>
                        </Button>
                    </PopoverTrigger>

                    <PopoverContent>
                        <div className="flex flex-col gap-5 text-center">
                            <NavbarLink href="/">Om Festivalen</NavbarLink>
                            <NavbarLink href="/">Program og Gjester</NavbarLink>
                            <NavbarLink href="/">Kart</NavbarLink>
                        </div>
                    </PopoverContent>
                </Popover>
            </div>
        </nav>
    )
}
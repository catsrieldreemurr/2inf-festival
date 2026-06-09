import Footerbar from "@/components/ui/footer";
import Hero from "@/components/ui/hero";
import Navbar from "@/components/ui/navbar";
import Typography from "@/components/ui/typography";
import Image from "next/image";

export default function Page(){
    return (
        <div>
            <Navbar></Navbar>
            <Hero href="/brickOffice.jpg">
                <Typography variant="h1" isBold>Kart og Område</Typography>
            </Hero>

            <div className="mt-5 flex justify-center items-center flex-col text-center p-5">
                <Image src={"/underconstruction.png"} alt="Under Construction..." height={500} width={500} className="border-3 border-black p-5"></Image>
                <Typography spacer variant="h4" isBold>Ooops! Denne siden er fortsatt under konstruksjon.</Typography>
                <Typography>Kom tilbake på et senere tidspunkt å se kartet.</Typography>
            </div>
           
            <Footerbar></Footerbar>
        </div>
    )
}
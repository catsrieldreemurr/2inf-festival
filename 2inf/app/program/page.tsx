import Hero from "@/components/ui/hero";
import Navbar from "@/components/ui/navbar";
import Typography from "@/components/ui/typography";

export default function Page(){
    return (
        <div>
            <Navbar></Navbar>
            <Hero href="/room.jpg">
                <Typography variant="h1" isBold>Program og Gjester</Typography>
            </Hero>
        </div>
    )
}
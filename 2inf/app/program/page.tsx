import Hero from "@/components/ui/hero";
import Navbar from "@/components/ui/navbar";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Typography from "@/components/ui/typography";

export default function Page(){
    return (
        <div>
            <Navbar></Navbar>
            <Hero href="/room.jpg">
                <Typography variant="h1" isBold>Program og Gjester</Typography>
            </Hero>

            <div className="flex justify-center m-5">
                <Tabs defaultValue="Program">
                    <TabsList variant={"line"}>
                        <TabsTrigger value="Program" className="text-xl">Workshops</TabsTrigger>
                        <TabsTrigger value="Foredrag" className="text-xl">Foredrag</TabsTrigger>
                        <TabsTrigger value="Bedrifter" className="text-xl">Bedrifter</TabsTrigger>
                    </TabsList>
                </Tabs>
            </div>
            
        </div>
    )
}
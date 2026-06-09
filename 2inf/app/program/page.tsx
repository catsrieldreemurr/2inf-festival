import Hero from "@/components/ui/hero";
import Navbar from "@/components/ui/navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Typography from "@/components/ui/typography";
import WorkshopSection from "@/components/ui/workshopsSection";

export default function Page(){
    return (
        <div>
            <Navbar></Navbar>
            <Hero href="/room.jpg">
                <Typography variant="h1" isBold>Program og Gjester</Typography>
            </Hero>

            <div className="flex justify-center m-5">
                <Tabs defaultValue="Workshops">
                    <TabsList variant={"line"}>
                        <TabsTrigger value="Workshops" className="text-xl">Workshops</TabsTrigger>
                        <TabsTrigger value="Foredrag" className="text-xl">Foredrag</TabsTrigger>
                        <TabsTrigger value="Bedrifter" className="text-xl">Bedrifter</TabsTrigger>
                    </TabsList>
                    <TabsContent value="Workshops"><WorkshopSection></WorkshopSection></TabsContent>
                </Tabs>
            </div>
            
        </div>
    )
}
import EditingArea from "@/components/ui/editingArea";
import Navbar from "@/components/ui/navbar";
import PreseentationSection from "@/components/ui/presentationSection";
import Typography from "@/components/ui/typography";

export default function Page(){
    return (
        <div>
            <Navbar></Navbar>

            <div className="text-center">
                <Typography variant="h1" isBold spacer>For Arrangører</Typography>
                <Typography variant="h2" spacer>Rediger Foredrag</Typography>
            </div>
            
            <div className="sm:flex justify-center p-5">
                <div className="sm:w-2/3">
                    <EditingArea></EditingArea>
                </div>

                <div className="sm:w-1/3">
                    <Typography isCentered variant="h3" isBold>Foredragsliste</Typography>
                    <PreseentationSection></PreseentationSection>
                </div>
            </div>
            
        </div>
    )
}
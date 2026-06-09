import Footerbar from "@/components/ui/footer"
import GrayTextbox from "@/components/ui/grayTextbox"
import Hero from "@/components/ui/hero"
import Navbar from "@/components/ui/navbar"
import Sidebox from "@/components/ui/sidebox"
import Typography from "@/components/ui/typography"
import Image from "next/image"

export default function Page() {
  return (
    <div>
        <Navbar></Navbar>
        <Hero href="/testpic.jpg">
            <Typography variant="h1" isBold>2INF-Festivalen 2027</Typography>
            <Typography>Innlandets beste Møtearena</Typography>
        </Hero>

        <div className="flex flex-col justify-center items-center text-center p-5">

          <Sidebox direction="left" src="/people_meeting.jpg" alt="A Picture of people meeting" size={400}>
            <Typography variant="h2" isBold>Om Festivalen</Typography>
            <Typography>2INF-Festivalen er en festival som er organisert i samarbeid med bedrifter og 2INF klasser over hele Innlandet Fylkeskommune.</Typography>
            <Typography spacer>Festivalen er et samarbeid mellom elever og lærere fra skoler over hele fylket, med målet å gjøre IT-Elever kjent med relevante bedrifter fra fylket.</Typography>
          </Sidebox>

          <Sidebox direction="right" src="/collaboration.jpg" alt="A picture of people meeting again" size={320}>
            <Typography variant="h2" isBold>Bedriftssamarbeid</Typography>
            <Typography>Vi er i samarbeid med over 20+ forskjellige IT-bedrifter som dekker alle områder fra Drift til Utvikling over hele fylket.</Typography>
            <Typography spacer>Dette er den ledende ordningen for å knytte viktige kontakter innen IT-området</Typography>
          </Sidebox>

          <GrayTextbox isTop>
            <Typography variant="h2" isBold>Over 200+ Registrerte Deltakere</Typography>
            <Typography>Vi har over 200+ Registrerte deltakere, både fra bedrifter og skoler gjennom hele fylket.</Typography>
          </GrayTextbox>

          <GrayTextbox>
            <Typography variant="h2" isBold>Hands-On Experience</Typography>
            <Typography>Lær direkte fra bedriftene gjennom forskjellige korte, veiledede læreløyper. </Typography>
          </GrayTextbox>
          
        </div>

        <Footerbar></Footerbar>
    </div>
  )
}

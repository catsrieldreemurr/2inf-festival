import Hero from "@/components/ui/hero"
import Navbar from "@/components/ui/navbar"
import Typography from "@/components/ui/typography"

export default function Page() {
  return (
    <div>
        <Navbar></Navbar>
        <Hero href="/testpic.jpg">
          <div className="text-white bg-black/75 p-5 rounded-xl text-center">
            <Typography variant="h1" isBold>2INF-Festivalen 2026</Typography>
            <Typography>Innlandets beste Møtearena</Typography>
          </div>
        </Hero>
    </div>
  )
}

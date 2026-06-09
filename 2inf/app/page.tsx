import Navbar from "@/components/ui/navbar"
import Typography from "@/components/ui/typography"

export default function Page() {
  return (
    <div>
        <Navbar></Navbar>
        <div className="relative h-[50rem] w-full flex items-center justify-center bg-black/40 border-b-5 border-gray-600">
          <div className="absolute inset-0 bg-[url(/testpic.jpg)] bg-cover bg-center opacity-100 -z-10"></div>
          

          <div className="text-white bg-black/75 p-5 rounded-xl text-center">
            <Typography variant="h1" isBold>2INF-Festivalen 2026</Typography>
            <Typography>Innlandets beste Møtearena</Typography>
          </div>
      </div>
    </div>
  )
}

import Navbar from "@/components/ui/navbar"

export default function Page() {
  return (
    <div>
        <div className="relative h-[50rem] w-full flex items-center justify-center bg-black/40"> 
          <div className="absolute inset-0 bg-[url(/testpic.jpg)] bg-cover bg-center opacity-100 -z-10"></div>

          <Navbar></Navbar>

          <div className="text-white bg-black/75 p-5">
            <h1 className="text-2xl">2INF-Festivalen 2026</h1>
          </div>
      </div>
    </div>
  )
}

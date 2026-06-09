export async function FetchData(){
    const req = await fetch("/api/readJSON")
    const newData = await req.json()

    console.log(newData)

    try{
        console.log(req.status)
        if(req.status === 200) {
            return (newData)
        } else {
            return (req.status)
        }
    } catch (err) {
        return(req.status)
    }
}
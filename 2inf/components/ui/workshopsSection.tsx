"use client"
import { useEffect, useState } from "react";

import { AllFetchedData } from "./interfaces";
import Typography from "./typography";

export default function WorkshopSection(){
    const [data, setData] = useState<AllFetchedData[] | null>(null)
    const [failed, setFailed] = useState(false)

    useEffect(() => {
        async function Getdata(){
            const req = await fetch("/api/readJSON")
            const newData = await req.json()

            console.log(newData)

            try{
                if(req.status === 200) {
                    setData(newData)
                    setFailed(false)
                } else {
                    setData([])
                    setFailed(req.status !== 200 || false)
                }
            } catch (err) {
                setFailed( true)
                setData([])
            }
        }

        Getdata()
    }, [])

    return (
    <div>
        {
            data ? <div className="flex flex-col gap-5 mt-5">
                {data.workshops.map((index, key) => {
                    return (
                        <div className="p-5 bg-gray-200 text-center" key={key}>
                            <Typography variant="h4" isBold>{index.tittel}</Typography>
                            <Typography>{index.forkunnskaper}</Typography>
                            <div>
                                <Typography>{index.startTid} - {index.sluttTid}</Typography>
                            </div>
                        </div>
                    )
                }) }
            </div> : 
            <div> 
                <h1>Something went wrong. Try again later.</h1>
            </div>
        }
        
    </div>
)
}
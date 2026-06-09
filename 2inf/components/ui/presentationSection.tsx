"use client"
import { useEffect, useState } from "react";

import { AllFetchedData } from "./interfaces";
import Typography from "./typography";
import { FetchData } from "./getData";

export default function PreseentationSection(){
    const [data, setData] = useState<AllFetchedData | null>(null)

    useEffect(() => {
        async function Getdata(){
            const result = await FetchData();
            setData(result)
        }

        Getdata()
    }, [])

    return (
    <div>
        {
            data ? <div className="flex flex-col gap-5 mt-5">
                {data.foredrag.map((index, key) => {
                    return (
                        <div className="p-5 bg-gray-200 text-center" key={key}>
                            <Typography variant="h4" isBold>{index.tittel}</Typography>
                            <Typography>{index.beskrivelse}</Typography>
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
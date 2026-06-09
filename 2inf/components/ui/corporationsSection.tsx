"use client"
import { useEffect, useState } from "react";

import { AllFetchedData } from "./interfaces";
import Typography from "./typography";
import { FetchData } from "./getData";
import Link from "next/link";

export default function CorporationsSection(){
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
                {data.bedrifter.map((index, key) => {
                    return (
                        <div className="p-5 bg-gray-200 text-center" key={key}>
                            <Typography variant="h4" isBold>{index.navn}</Typography>
                            <Typography>{index.beskrivelse}</Typography>

                            <Link href={index.nettside} className="text-blue-800 hover:text-blue-950">{index.nettside}</Link>

                            {index.harForedrag === false ? <Typography spacer>Har ikke Foredrag</Typography> : <Typography></Typography>}
                            
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
"use client"
import { useState } from "react"
import { Button } from "./button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./dialog"
import Typography from "./typography"

export default function DeleteLatest(){
    const [hasFailed, setfailed] = useState(false)
    const [hasSucceeded, setHasSucceeded] = useState(false)

    async function WriteWord() {
        try{
            const res = await fetch("/api/deleteLatest", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
            });

            const result = await res.json();

            if(result.status === 200 || 201){
                setHasSucceeded(true)
                setfailed(false)
            } else {
                setHasSucceeded(false)
                setfailed(true)
            }
            
        }
        catch (err){
            setHasSucceeded(false)
            setfailed(true)
        }
    };
    return (<Dialog>
        <DialogTrigger asChild>
            <Button className="p-5">Slett Nyest Foredrag</Button>
        </DialogTrigger>

        <DialogContent className="p-5">
            <DialogTitle>Slett Nyest Foredrag</DialogTitle>
            <Typography>Er du sikker på at du vil slette? Dette kan ikke bli angret!</Typography>

            {hasFailed && <div className="bg-red-200 border-2 border-red-800 text-red-800 p-5 mt-5">
                <Typography>Noe har gått galt. Prøv igjen senere.</Typography>
            </div>}

            {hasSucceeded && <div className="bg-green-200 border-2 border-green-800 text-green-800 p-5 mt-5">
                <Typography>Suksess! Manuelt Refresh siden for å se oppdaterte resultater.
                </Typography>    
            </div>}
            <Button disabled={hasSucceeded} onClick={() => {
                WriteWord();
            }}>Ja, slett nyest foredrag</Button>
        </DialogContent>
    </Dialog>)
}
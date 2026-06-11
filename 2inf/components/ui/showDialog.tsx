"use client"
import { useState } from "react"
import { Button } from "./button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./dialog"
import FormDiv from "./formdiv"
import { Input } from "./input"
import { InputGroup } from "./input-group"
import { Label } from "./label"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "./select"
import { Textarea } from "./textarea"
import Typography from "./typography"

// Strap in ladies and gentlemen, this is gonna be one HELL of a file

export default function ShowDialog(){
    let presName = ""
    let compName = ""
    let desc = ""
    const [room, setRoom] = useState("Auditorium A")
    let startTime = ""
    let stopTime = ""

    const [hasFailed, setHasFailed] = useState(false)
    const [isSuccesssful, setIsSuccessful] = useState(false)

    async function WriteWord() {
    if(presName !== "" && compName !== "" && desc !== "" && room !== "" && startTime !== "" && stopTime !== ""){
        setHasFailed(false)
        const res = await fetch("/api/addJSON", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            name: presName,
            compName: compName,
            desc: desc,
            room: room, 
            startTime: startTime,
            stopTime: stopTime
        })
    });

    if(res.status === 200 || 201){
        setIsSuccessful(true)
    }

    else if(res.status === 400){
        console.log("hi");
    }
    console.log(res);
    } else {
        setHasFailed(true)
    }
}
        return (
            <Dialog>
                    <DialogTrigger asChild>
                        <Button className="p-5">Nytt Foredrag</Button>
                    </DialogTrigger>

                    <DialogContent className="p-5">
                        <DialogTitle>Nytt Foredrag</DialogTitle>
                        
                        <form onSubmit={(e) => {
                            e.preventDefault();
                        }}>
                            <FormDiv>
                                <Label htmlFor="presentationName">Navn</Label>
                                <Input type="text" placeholder="Navn" id="presentationName" required onChange={(e) => {
                                    presName = e.target.value
                                }}></Input>
                                
                                <Label htmlFor="BedriftName">Bedriftsnavn</Label>
                                <Input type="text" placeholder="Bedriftsnavn" id="BedriftName" required onChange={(e) => {
                                    compName = e.target.value
                                }}></Input>
                                
                                <Label htmlFor="presentationDescription">Beskrivelse</Label>
                                <Textarea placeholder="Foredragsbeskrivelse" id="presentationDescription" required onChange={(e) => {
                                    desc = e.target.value
                                }}></Textarea>
                            </FormDiv>

                            <span className="p-5"></span>

                            <div className="flex gap-5 justify-center flex-col">
                                <FormDiv>
                                    <Label htmlFor="roomselect">Velg Rom</Label>
                                    <Select required value={room} onValueChange={(value) => {
                                        setRoom(value)
                                        console.log(value)
                                    }}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Auditorium x"></SelectValue>
                                        </SelectTrigger>
                                    
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value="Auditorium A">Auditorium A</SelectItem>
                                                <SelectItem value="Auditorium B">Auditorium B</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </FormDiv>

                                <div className="flex gap-5 justify-center">
                                <FormDiv>
                                    <Label htmlFor="setStart">Set Startstid</Label> 
                                    <Input type="time" required name="setStart" className="w-[10rem]" onChange={(e) => {
                                    startTime = e.target.value
                                }}></Input>
                                </FormDiv>

                                <FormDiv>
                                    <Label htmlFor="setStop">Set Sluttstid</Label> 
                                    <Input type="time" required name="setStop" className="w-[10rem]" onChange={(e) => {
                                    stopTime = e.target.value
                                }}></Input>
                                </FormDiv>
                                </div>

                            </div>

                            {hasFailed && <div className="bg-red-200 border-2 border-red-800 text-red-800 p-5 mt-5">
                                <Typography>Noe har gått galt. Prøv igjen senere.</Typography>
                            </div>}

                            {isSuccesssful && <div className="bg-green-200 border-2 border-green-800 text-green-800 p-5 mt-5">
                                <Typography>Suksess! Manuelt Refresh siden for å se oppdaterte resultater.
                                </Typography>    
                            </div>}
                            <div className="flex justify-center pt-5">
                                <Button onClick={() => {
                                    WriteWord();
                                }} disabled={isSuccesssful}>Lag Foredrag</Button>
                            </div>
                            
                        </form>
                    </DialogContent>
                </Dialog>
        )
}
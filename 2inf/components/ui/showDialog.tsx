"use client"
import { Button } from "./button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./dialog"
import FormDiv from "./formdiv"
import { Input } from "./input"
import { InputGroup } from "./input-group"
import { Label } from "./label"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "./select"
import { Textarea } from "./textarea"

interface setprop{
    variant: 1 | 2
}

// Strap in ladies and gentlemen, this is gonna be one HELL of a file

export default function ShowDialog({variant}:setprop){
    if(variant === 1){
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
                                <Input type="text" placeholder="Navn" name="presentationName" required></Input>
                                
                                <Label htmlFor="BedriftName">Bedriftsnavn</Label>
                                <Input type="text" placeholder="Bedriftsnavn" required></Input>
                                
                                <Label htmlFor="presentationDescription">Beskrivelse</Label>
                                <Textarea placeholder="Foredragsbeskrivelse" required></Textarea>
                            </FormDiv>

                            <span className="p-5"></span>

                            <div className="flex gap-5 justify-center flex-col">
                                <FormDiv>
                                    <Label htmlFor="roomselect">Velg Rom</Label>
                                    <Select name="roomselect" required>
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
                                    <Input type="time" required name="setStart" className="w-[10rem]"></Input>
                                </FormDiv>

                                <FormDiv>
                                    <Label htmlFor="setStop">Set Sluttstid</Label> 
                                    <Input type="time" required name="setStop" className="w-[10rem]"></Input>
                                </FormDiv>
                                </div>

                            </div>
                            <div className="flex justify-center pt-5">
                                <Button>Lag Foredrag</Button>
                            </div>
                            
                        </form>
                    </DialogContent>
                </Dialog>
        )
    }

}
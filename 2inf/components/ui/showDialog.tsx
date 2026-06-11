import { Button } from "./button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./dialog"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "./select"

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

                    <DialogContent>
                        <DialogTitle>Nytt Foredrag</DialogTitle>
                        
                        <form>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Rom"></SelectValue>
                                </SelectTrigger>
                            
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="Auditorium A">Auditorium A</SelectItem>
                                        <SelectItem value="Auditorium B">Auditorium B</SelectItem>
                                </SelectGroup>
                                </SelectContent>
                            </Select>
                        </form>
                    </DialogContent>
                </Dialog>
        )
    }

}
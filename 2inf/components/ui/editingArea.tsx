import { Button } from "./button";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "./select";
import Typography from "./typography";
import { Dialog, DialogContent, DialogTrigger } from "./dialog";
import ShowDialog from "./showDialog";
import DeleteLatest from "./deleteUI";

export default function EditingArea(){
    return (
        <div>
            <Typography variant="h3" isBold isCentered>Muligheter</Typography>
            <div className="flex justify-center gap-5 p-5">
                <ShowDialog></ShowDialog>
                <DeleteLatest></DeleteLatest>
            </div>


        </div>

    )
}
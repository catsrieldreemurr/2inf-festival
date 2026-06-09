const fs = require('fs').promises;
import { NextResponse } from 'next/server';

export async function GET(){
    const dat = await fs.readFile('./app/datasett.json', 'utf8', (err:Error, data:object) => {
        if (err){
            console.error('Error reading file', err);
            return JSON.stringify({SuccessStatus: `Something went wrong. Error: ${err.message}`})
            
        } else{
            return data
        }
    })

    return new NextResponse(dat)
}




 // I love being able to reuse old code :P #DeveloperLife
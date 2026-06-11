import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';

export async function POST() {
    try {

        console.log("YEAAH!")
        const filePath = './app/datasett.json';

        const fileContent = await fs.readFile(filePath, 'utf8');
        const jsonData = JSON.parse(fileContent);

        jsonData.foredrag.pop()

        await fs.writeFile(filePath, JSON.stringify(jsonData, null, 2));
        return NextResponse.json({SuccessStatus: 'Successfully deleted data'}, {status: 200});

    } catch (err: any) {
        console.error("Error writing to file:", err.message);
        return NextResponse.json(
            {SuccessStatus: `Something went wrong. Error: ${err.message}`}, {status: 500}
        );
    }
}
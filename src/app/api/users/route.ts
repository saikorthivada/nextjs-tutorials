import { headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    // console.log(req.headers.get('authorization'));

    // console.log(headers());
    const data = {
        sample: 'sai'
    }
    return new Response(JSON.stringify(data), {
        status: 200,
        headers: {
            "content-type": "text/plain",
            "data": 'kahhjsgahjgsjahgs'
        }
    })
}
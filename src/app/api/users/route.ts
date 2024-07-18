import { NextRequest, NextResponse } from "next/server";
import { Users } from "./user.meta";

export async function GET() {
    return new Response(JSON.stringify(Users), {
        headers: {
            "content-type":"application/json"
        },
        status: 200,
        statusText: 'Successfully fetched'
    });
}

export async function POST(req: NextRequest, response: NextResponse) {
    const result = await req.json();
    console.log('Im ready', result);
    Users.push(result);
    return new Response(JSON.stringify(result), {
        headers: {
            "content-type": "application/json"
        },
        status: 201,
        statusText: 'Created Successfully'
    })
}
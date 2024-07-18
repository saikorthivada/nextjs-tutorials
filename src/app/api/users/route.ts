import { NextRequest, NextResponse } from "next/server";
import { Users } from "./user.meta";

export async function GET(req: NextRequest) {
    const filter = req.nextUrl.searchParams.get('filter');
    console.log(filter);
    let finalUsers = Users;
    if (filter) {
        finalUsers = Users.filter((obj) => obj.name.includes(filter));
    }
    return new Response(JSON.stringify(finalUsers), {
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
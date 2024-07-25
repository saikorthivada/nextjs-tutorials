import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    // console.log(req.cookies.clear());
    console.log(cookies().getAll());

    cookies().set("pageSize", "20");
    return new Response('Hai this is cookie session')
}
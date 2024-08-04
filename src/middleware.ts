import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
   
    if (req.nextUrl.pathname.startsWith('/post-login')) {
        const token = req.headers.get('Authorization');
        if (token) {
            return NextResponse.next();
        } else {
            return NextResponse.json('Un authorized', {
                headers: {
                    "content-type": "application/plaintext"
                }
            })
        }
    }
    return NextResponse.next();
}

// export const config = {
//     matcher: ['/users', '/login']
// }
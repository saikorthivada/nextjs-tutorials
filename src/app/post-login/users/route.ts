import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    console.log('Users request');
    return NextResponse.json({
        data: [
            {
                id: 1,
                name: 'sai'
            }
        ]
    })
}
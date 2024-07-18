import { NextRequest } from "next/server";
import { Users } from "../user.meta";

export async function GET(_: NextRequest, {params}: {params:{id: string}}) {
    const filteredData = Users.filter((obj: any) => obj.id === +params.id);
    if (filteredData.length) {
        // We have some data
        return new Response(JSON.stringify(filteredData[0]), {
            headers: {
                "content-type": "application/json"
            },
            status: 200,
            statusText: 'Get by id success'
        });
    } else {
       return new Response(JSON.stringify(null), {
        headers: {
            "content-type": "application/json"
        },
        status: 404,
        statusText: 'Get by id not found'
       })
    }
   
}
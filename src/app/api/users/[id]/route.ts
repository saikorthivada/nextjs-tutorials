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


export async function PATCH(req: NextRequest, {params}: {params: {id: string}}) {
    const id = +params.id;
    const payload = await req.json();

    const index = Users.findIndex((obj) => obj.id === id);
    if (index !== -1) {
        Users[index].name = payload.name;
        return new Response(JSON.stringify(Users[index]), {
            headers: {
                "content-type": "application/json"
            },
            status: 200,
            statusText: "Updated successfully"
        })
    } else {
        return new Response(JSON.stringify(null), {
            headers: {
                "content-type": "application/json"
            },
            status: 404,
            statusText: 'id does not found'
           })
    }
}

export async function PUT(req: NextRequest, {params}: {params: {id: string}}) {
    const id = +params.id;
    const payload = await req.json();

    const index = Users.findIndex((obj) => obj.id === id);
    if (index !== -1) {
        Users[index] = {...Users[index], ...payload};
        return new Response(JSON.stringify(Users[index]), {
            headers: {
                "content-type": "application/json"
            },
            status: 200,
            statusText: "Updated successfully"
        })
    } else {
        return new Response(JSON.stringify(null), {
            headers: {
                "content-type": "application/json"
            },
            status: 404,
            statusText: 'id does not found'
           })
    }
}


export async function DELETE(_: NextRequest, {params}: {params: {id: string}}) {
    const id = +params.id;
    const index = Users.findIndex((obj) => obj.id === id);
    if (index !== -1) {
        Users.splice(index, 1);
        return new Response(JSON.stringify(`${id} has been deleted successfully`), {
            status: 200,
            statusText: 'Successfully deleted'
        })
    } else {
        return new Response(JSON.stringify(null), {
            headers: {
                "content-type": "application/json"
            },
            status: 404,
            statusText: 'id does not found'
           })
    }
}

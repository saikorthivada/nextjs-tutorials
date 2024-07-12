import Link from "next/link";

export default function RightDefault() {
    return (
        <div  style={{border: '1px solid black', height: '200px', padding: '20px'}}>
           Right container
           <br></br><Link href={'/p-routes/right'}>Register</Link>
        </div>
    )
}
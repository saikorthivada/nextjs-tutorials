import Link from "next/link";

export default function LeftContainer() {
    return (
        <div style={{border: '1px solid black', height: '200px',  padding: '20px'}}>
            Left container
            <br></br>
            <Link href={'/p-routes/left'}>Login</Link>
        </div>
    )
}
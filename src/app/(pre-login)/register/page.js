"use client";
import { useRouter } from "next/navigation"

export default function RegisterUI() {
    const router = useRouter();
    const navigate = () => {
        // router.push('/login');
        // router.back();
        // router.forward();
        router.replace('/login');
    }
    return (
        <div>
            <h1>Register component</h1>
            <button onClick={navigate}>Register and Navigate</button>
        </div>
    )
}
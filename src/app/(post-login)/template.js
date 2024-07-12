"use client";
import Header from "@/components/header/Header";
import { useState } from "react";

export default function PostLoginLayout({children}) {

    const [count, setCount] = useState(0);
    return (
        <div>
            <h5>Template</h5>
            Count - {count}
            <div>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            </div>
            <Header />
            {children}
        </div>
    )
}
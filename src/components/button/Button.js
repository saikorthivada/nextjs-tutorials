"use client";
export default function Button() {
    const clickHandler = () => {
        console.log('Click handler');
    }
    return (
        <button onFocus={clickHandler}>Register</button>
    )
}
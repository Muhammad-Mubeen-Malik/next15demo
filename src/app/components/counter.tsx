"use client"
import { useState } from "react";

export const Counter = () => {
    const [count, setCount] = useState(0)
    console.log("clinet counter component")

    return<button onClick={()=>setCount(count + 1)}>clicked {count} times</button>
}
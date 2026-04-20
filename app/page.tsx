'use client'

import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        document.title = "McDonalds SA"
    }, []);

  return (
        <>
            <h1 className="md:text-6xl text-4xl leading-normal font-bold">Welcome at the McDonalds Shop</h1>

            <img loading="lazy" className="max-w-5xl min-w-xs rounded-3xl" src="/shop.jpg" alt="" />
        </>
    )
}
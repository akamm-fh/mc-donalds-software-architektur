"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
    const pathname = usePathname();

    const linkClass = (path: string) =>
        `leading-normal duration-200 text-xl md:text-3xl font-bold rounded-xl px-5 py-1.5 ${
            pathname === path ? "bg-button" : "bg-transparent hover:bg-button"
        }`;

    return (
        <ul className="flex flex-col sm:flex-row items-center sm:items-start gap-y-3 gap-x-5">
            <li className="inline-flex"><Link className={linkClass("/")} href="/">Home</Link></li>
            <li className="inline-flex"><Link className={linkClass("/pages/products")} href="/pages/products">Products</Link></li>
            <li className="inline-flex"><Link className={linkClass("/pages/cart")} href="/pages/cart">Cart</Link></li>
            <li className="inline-flex"><Link className={linkClass("/pages/orders")} href="/pages/orders">Orders</Link></li>
        </ul>
    );
}
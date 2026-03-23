import Link from "next/link";

export default function NotificationCard({message, link = null, linkText = null} : {message: string, link: string | null, linkText: string | null}){
    return(
        <dialog open className="fixed top-10 md:px-13 px-8 py-5 rounded-2xl border-none sm:mx-auto mx-6 my-0 bg-product-added flex flex-col gap-4 items-center">
            <p className="text-white font-bold md:text-4xl text-2xl text-center leading-normal">{message}</p>
            {link && linkText && <Link className="leading-normal duration-200 md:text-3xl text-xl font-bold w-fit rounded-xl px-5 py-1.5 bg-button hover:bg-button-hover text-black" href={link}>{linkText}</Link>}
        </dialog>
    )
}
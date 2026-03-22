import Link from "next/link";

export default function NotificationCard({message, link = null, linkText = null} : {message: string, link: string | null, linkText: string | null}){
    return(
        <dialog open className="fixed top-10 px-13 py-5 rounded-2xl border-none mx-auto my-0 bg-product-added flex flex-col gap-4 items-center">
            <p className="text-white font-bold text-4xl leading-normal">{message}</p>
            {link && linkText && <Link className="text-white leading-normal duration-200 text-3xl font-bold w-fit rounded-xl px-5 py-1.5 bg-transparent hover:bg-button hover:text-black" href={link}>{linkText}</Link>}
      </dialog>
    )
}
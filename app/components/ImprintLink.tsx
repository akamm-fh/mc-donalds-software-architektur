export default function ImprintLink({link} : {link: string}){
    return(
        <li className="overflow-hidden text-ellipsis whitespace-nowrap max-w-full"><a href={link}>{link}</a></li>
    )
}
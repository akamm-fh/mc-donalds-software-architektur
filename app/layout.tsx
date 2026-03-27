import './globals.css'
import './font.css'
import Nav from "@/components/Nav";
import Link from 'next/link';

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en">
            <body>
                <header className='shadow-hero flex flex-col justify-center items-center sm:min-h-[40vh] p-6 bg-[url(/hero.png)] bg-center bg-no-repeat bg-cover'>
                    <nav className='bg-nav py-5 px-8 md:py-8 md:px-12 rounded-3xl flex flex-col items-center sm:gap-8 gap-6'>
                        <img className='size-20 sm:size-28 md:size-39' src="/logo.png" alt="Logo" />

                        <Nav />
                    </nav>
                </header>
                
                <main className='flex flex-col md:gap-10 gap-6 lg:p-14 sm:p-8 p-5'>
                    {children}
                </main>

                <footer className='min-h-[20vh] bg-button flex flex-col sm:px-14 sm:py-10 px-10 py-6 justify-center items-center'>
                    <div className='flex flex-col gap-3 items-center'>
                        <p className='font-bold text-center md:text-4xl sm:text-2xl text-xl leading-normal'>Software Architektur - McDonalds</p>
                        <p className='md:text-xl sm:text-lg text-base leading-normal text-center'>by Andreas Kamm - FH Salzburg Project</p>
                        <Link href="/pages/imprint" className='italic font-bold md:text-lg text-s'>Imprint</Link>
                    </div>
                </footer>
            </body>
        </html>
    )
}
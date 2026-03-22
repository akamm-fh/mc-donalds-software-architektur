import './globals.css'
import './font.css'
import Nav from "@/components/Nav";

export default function RootLayout({children,}: {children: React.ReactNode}) {


    return (
        <html lang="en">
            <body>
                <header className='shadow-hero flex flex-col justify-center items-center h-[40vh] bg-[url(/hero.png)] bg-center bg-no-repeat bg-cover'>
                    <nav className='bg-nav py-8 px-16 rounded-3xl flex flex-col items-center gap-4'>
                        <img className='size-39' src="/logo.png" alt="Logo" />

                        <Nav />
                    </nav>
                </header>
                
                <main className='flex flex-col gap-12 p-14'>
                    {children}
                </main>

                <footer className='min-h-[20vh] bg-button flex flex-col px-14 py-10 justify-center items-center'>
                    <div className='flex flex-col gap-3 items-center'>
                        <p className='font-bold text-center text-4xl leading-normal'>Software Architektur - McDonalds</p>
                        <p className='text-xl leading-normal text-center'>by Andreas Kamm - FH Salzburg Project</p>
                    </div>
                </footer>
            </body>
        </html>
    )
}
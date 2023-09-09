import '@styles/globals.css';
import NavBar from "@components/main-nav";
import Header from '@components/header';
import { ThemeProvider } from "@/components/theme-provider"
import { terminus, nerdy, dyslexic } from '@lib/fonts';
import NextTopLoader from 'nextjs-toploader';

export const metadata = { 
    title: "code-snippets",
    description: "Share & Practice favorite Code Snippets of various languages"
}

const RootLayout = ( { children, session } ) => {

    return (
    <html lang='en' className={`${terminus.variable} ${nerdy.variable} ${dyslexic.variable}`}>
        <body className='relative flex min-h-screen flex-col'>  
            <div className='main'>
                {/*<div className="absolute w-full z-[3] h-full top-0 bg-gradient-to-tr from-indigo-400 to-blue-400 opacity-[0.2] rounded-md"/>*/}
                {<div className='bg_radial-blur'></div>}
                <div className="bg_grid"/>
            </div>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                <NextTopLoader color='#a37cf0'/>
                <Header/> 
                <div className='container py-2 z-0 flex items-center justify-center'>
                    {children}
                </div>
            </ThemeProvider>
        </body>
    </html>
    )
}

export default RootLayout;

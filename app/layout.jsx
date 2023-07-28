import '@styles/globals.css';
import NavBar from "@components/main-nav";
import Header
 from '@components/header';
export const metadata = { 
    title: "code-snippets",
    description: "Share favorite Code Snippets of various languages"
}

const RootLayout = ( { children, session } ) => {

    return (
    <html>
        <body className='relative flex min-h-screen flex-col'>  
       
        <div className='main'>
            <div className="absolute w-full z-[3] h-full top-0 bg-gradient-to-tr from-indigo-500 to bg-indigo-800 opacity-[0.2] rounded-md"/>
            <div className='bg_radial-blur'></div>
            <div className="bg_grid"/>
        </div>
            <Header/> 
        </body>
    </html>
    )
}

export default RootLayout;

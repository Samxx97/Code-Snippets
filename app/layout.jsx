import '@styles/globals.css';
import Provider from '@components/provider';
import NavBar from "@components/nav";

export const metadata = { 
    title: "code-snippets",
    description: "Share favorite Code Snippets of various languages"
}

const RootLayout = ( { children, session } ) => {

    return (
    <html>
        <body>
        <Provider session={session}>
                <div className="main">
                    <div className="gradient"/>
                </div>
                
                <div className='app'>
                    <NavBar/>
                    {children}
                </div>
        </Provider>
        </body>
    </html>
    )
}

export default RootLayout;

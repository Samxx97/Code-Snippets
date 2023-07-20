import '@styles/globals.css';
import Nav from '@components/Navbar';

export const metadata = { 
    title: "code-snippets",
    description: "Share favorite Code Snippets of various languages"
}

const RootLayout = ( { children } ) => {

    return (
    <html>
        <body>
            <div className="main">
                <div className="gradient"/>
            </div>

            <div className='app'>
                <Nav/>
                {children}
            </div>
        </body>
    </html>
    )
}

export default RootLayout;

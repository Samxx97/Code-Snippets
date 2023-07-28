import Link from "next/link";
import Image from "next/image";
import { signIn, signOut } from "next-auth/react"
import { icons } from "./icons"; 

const MainNav = () => {

    return (
        <nav className="flex-between justify-between w-full">
            <Link href="/" className="flex justify-center items-center" > 
                <icons.logo width={60} height={60}/> 
                <p className="max-sm:hidden font-sans font-semibold text-sm text-foreground tracking-wide"> Code Snippets </p>
            </Link>

        </nav>
    );
}

export default MainNav;
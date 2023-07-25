'use client'

import Link from "next/link";
import Image from "next/image";
import { signIn, signOut } from "next-auth/react"
import useSession from "../hooks/session";
import { useEffect, useState} from "react";

const NavBar = () => {

    const { session } = useSession()
    
    return (
        <nav className=" flex-between w-full mb-16 pt-3">
            <Link href="/" className="flex gap-2" > 
                <Image src="/assets/images/logo.svg"
                    alt="logo"
                    width={30}
                    height={30}
                    />
                <p className="logo_text"> Code Snippets </p>
            </Link>
            <div className="flex gap-3 md:gap-1">
                { session && session.user? (
                     <button className="outline_btn" onClick={(e) => { e.preventDefault(); signOut()}}> Sign out </button>
                    
                ) : (
                    <button className="black_btn" onClick={(e) => { e.preventDefault(); signIn()}}> Sign in </button>
                )}

            </div> 
        </nav>
    );
}

export default NavBar;
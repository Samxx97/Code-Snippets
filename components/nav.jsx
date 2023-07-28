'use client'

import Link from "next/link";
import Image from "next/image";
import { signIn, signOut } from "next-auth/react"
import useSession from "../hooks/session";
import { useEffect, useState} from "react";
import { icons } from "./icons"; 

const NavBar = () => {

    const { session } = useSession()

    return (
        <nav className="flex-between justify-between w-full mb-16">
            <Link href="/" className="flex justify-center items-center" > 
                <icons.logo width={80} height={80}/> 
                <p className="logo_text"> Code Snippets </p>
            </Link>
            
            <div className="flex gap-3 md:gap-5"> 
            { session && session.user? (
                    <Link href="/Profile">
                        <Image src={session.user.image}
                            alt="logo"
                            width={40}
                            height={40}
                            className="rounded-full"
                        />
                    </Link>    
            ) : (
                <button className="black_btn" onClick={(e) => { e.preventDefault(); signIn()}}> Sign in </button>
            )}
            </div> 


        </nav>
    );
}

export default NavBar;
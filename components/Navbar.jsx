
'use client'

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const Nav = () => {

    const [allowed, setAllowed] = useState(false)

    useEffect(() => {
        async function getData() {
            const result = await fetch("/api/people");
            const message = await result.json()
            console.log(message)
            return () => {}
        
        }
        getData()

    }, [allowed])

    return (
        <nav className=" flex-between w-full mb-16 pt-3">
            <Link href="assets/images/logo.svg" className="flex gap-2"> 
                <Image src="/assets/images/logo.svg"
                    width={30}
                    height={30}/>
                <p className="logo_text"> Code Snippets </p>
            </Link>
            <div>
                <button className="black_btn" onClick={() => { setAllowed(prevstate => ({ allowed: !prevstate})) }}> Sign in </button>
            </div> 
        </nav>
    );
}

export default Nav;
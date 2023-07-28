'use client'
import { useEffect, useState } from "react";
import { getProviders } from "next-auth/react"
import useSession from "@hooks/session";

const Home = () => {

    const [users, setUsers] = useState([])
    const { session } = useSession()

    async function execute() {
        console.log("fetching...")
        const result = await fetch("/api/users", {
            method: "GET",
        });
        const message = await result.json();
        setUsers(message.users)
        console.log(message.users)
    } 

    useEffect(() => {
        execute()
    }, [session])

    return (
    <>  
        <section className="w-full flex-col flex-center gap-4">
        </section>        
     </>

    )
}

export default Home;
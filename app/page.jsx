'use client'
import { useEffect, useState } from "react";
import { getProviders } from "next-auth/react"
import useSession from "@hooks/session";

const Home = () => {

    const [state, setState] = useState('fetch')
    const [users, setUsers] = useState([])
    const { session } = useSession()

    async function execute() {
        if (state == 'fetch') {
            console.log("fetching...")
            const result = await fetch("/api/users", {
                method: "GET",
            });
            const message = await result.json();
            setUsers(message.users)

        } else if (state == "create") {
            console.log("creating new user...")
             const result = await fetch("/api/users", {
                method: "POST", 
                body: JSON.stringify({name: "diana"})
            });
            const message = await result.json();
        }
        return () => {}
    }

    async function printProviders() {
        const providers = await getProviders()
        console.log("Providers", providers)
    }

    useEffect(() => {
        execute()
    }, [state])

    return (
    <>  
        <section className="w-full flex-col flex-center gap-4">
            <button className="black_btn" onClick={() => { setState('fetch') }}> Fetch Users </button>
            <button className="black_btn" onClick={() => { setState('create') }}> Create User </button>
            <ul className="flex-col flex-center gap-2">
                { session?.user && users && 
                    users.map((user, i) => (
                    <li className="p-2" id={user._id}> {user.name} </li>
                    ))}
            </ul>    
        </section>        
     </>

    )
}

export default Home;
'use client'

import { SessionProvider, getSession, useSession } from "next-auth/react";

const Profile  = () => {
    const { session } = useSession()
    
    return (
        <>
        { session?.user ? (
            <h1> hey nigger</h1>
            ): (
            <h1> Denied Access </h1>
        )}
        </>
    
    );
}

export default Profile ;
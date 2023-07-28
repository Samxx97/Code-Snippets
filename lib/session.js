import { getServerSession } from "next-auth";
import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";

// server side fetching of session 

export async function getSession() {

    return getServerSession(nextAuthOptions)
} 

export async function getCurrentUser() {
    const session = await getServerSession()
    return session?.user 
}

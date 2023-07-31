import Link from "next/link";
import Image from "next/image";
import { signIn, signOut } from "next-auth/react"
import { Button } from "./ui/button";

function UserProfile( { user } ) {
    return (
        <div className="flex gap-3 md:gap-5"> 
            { user? (
                    <Button 
                        variant="ghost"
                        className="flex h-full gap-2 px-2 bg-white bg-opacity-0 lg:px-4 hover:bg-muted hover:bg-opacity-10"
                    >
                        <Image src={user.image}
                            alt="logo"
                            width={26}
                            height={26}
                            className="rounded-full"
                        />
                        <p className="font-terminus text-sm font-bold whitespace-nowrap"> {user.name} </p>
                    </Button>
            ) : (
                <button className="black_btn" onClick={(e) => { e.preventDefault(); signIn()}}> Sign in </button>
            )}
        </div> 
    )

}

export default UserProfile;
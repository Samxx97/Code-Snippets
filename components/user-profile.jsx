import Link from "next/link";
import Image from "next/image";
import { signIn, signOut } from "next-auth/react"

function UserProfile( { user } ) {

    return (
        <div className="flex gap-3 md:gap-5"> 
            { user? (
                <Link href="/Profile">
                    <Image src={user.image}
                        alt="logo"
                        width={26}
                        height={26}
                        className="rounded-full"
                    />
                </Link>    
            ) : (
                <button className="black_btn" onClick={(e) => { e.preventDefault(); signIn()}}> Sign in </button>
            )}
        </div> 
    )

}

export default UserProfile;
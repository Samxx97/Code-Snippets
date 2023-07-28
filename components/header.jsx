
import { getCurrentUser } from "@lib/session"
import MainNav from "./main-nav";
import UserProfile from "./user-profile";

async function Header() {

    const user  = await getCurrentUser();

    return (
        <header className="sticky top-0 w-full z-40 dark:shadow-black shadow-slate-300 dark:bg-opacity-50 bg-background/5 backdrop-blur-lg">
            <div className="container flex h-14 items-center">
                <MainNav/>
                <UserProfile user={user}/>
            </div>
           
        </header>
    )

}

export default Header;
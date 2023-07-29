
import { getCurrentUser } from "@lib/session"
import MainNav from "./main-nav";
import UserProfile from "./user-profile";
import { ModeToggle } from "@/components/ui/mode-toggle" 

async function Header() {

    const user  = await getCurrentUser();

    return (
        <header className="sticky top-0 w-full z-40 dark:shadow-black shadow-slate-300 dark:bg-opacity-50 bg-background/5 backdrop-blur-lg">
            <div className="container flex h-14 items-center">
                <div className="flex-1 h-full">
                    <MainNav/>
                </div>
                <div className="flex items-center h-full space-x-2">
                    <ModeToggle/>
                    <UserProfile user={user}/>
                </div>    
            </div>
           
        </header>
    )

}

export default Header;
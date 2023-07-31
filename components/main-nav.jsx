'use client'
import Link from "next/link";
import { icons } from "./icons"; 
import { cn, isPathActive } from "@lib/utils";
import { usePathname } from 'next/navigation'

const MainNav = ( { items } ) => {
    const currentPath = usePathname()

    return (
        <nav className="flex items-center w-full max-h-14">
            <Link href="/" className="flex justify-center items-center mr-8" > 
                <icons.logo width={60} height={60} /> 
                <p className="max-sm:hidden font-terminus font-bold text-xl text-foreground tracking-wide">Code Snippets</p>
            </Link>
            <div className="flex justify-center items-center gap-3">
                { items.map((item) => 
                    item.href && (
                        <Link 
                         href={item.href} 
                         className={cn(
                            "flex items-center font-terminus font-bold text-lg text-foreground p-4 hover:bg-muted border-b-2 border-b-transparent",
                            isPathActive(currentPath, item.href) &&  "border-b-primary text-primary"
                         )}>
                          {item.title}
                        </Link>
                    )
                )}
                
            </div>

        </nav>
    );
}

export default MainNav;
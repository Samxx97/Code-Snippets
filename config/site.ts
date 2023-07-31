import { NavItem } from "@customTypes/nav";

interface SiteConfig {
    mainNav: NavItem[]
}

export const siteConfig: SiteConfig = {
    mainNav : [
        {  
            title: "Practice",
            href: "/practice"
        },

        {
            title: "Add Snippet",
            href: "/add-snippet"
        },

        {
            title: "Challenge",
            href: "/challenge"
        }
    ]
}
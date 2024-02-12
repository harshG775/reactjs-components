"use client"
import SidebarItem from "./components/SidebarItem";
const sideBarLinks = [
    {
        title: "dashboard",
        href: "/dashboard",
        haveSubMenu: false,
    },
    {
        title: "components",
        href: "/components",
        haveSubMenu: true,
        subMenu:[
            {
                title: "dialog",
                href: "/components/dialog",
                haveSubMenu: false,
            },
            {
                title: "breadcrumb",
                href: "/components/breadcrumb",
                haveSubMenu: false,
            },
            {
                title: "steps",
                href: "/components/steps",
                haveSubMenu: false,
            },
            {
                title: "accordion",
                href: "/components/accordion",
                haveSubMenu: false,
            },
        ]
    },
]
export default function SideNavbar({className,setIsSidebarOpen}:any) {
    return (
        <header className={`bg-neutral-900 ${className}`}>
            <div onClick={()=>setIsSidebarOpen(false)}>toggle</div>
            <nav>
                <ul className="sticky top-0 p-2">
                    {sideBarLinks.map((linkData) => (
                        <SidebarItem linkData={linkData} key={linkData.title}/>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
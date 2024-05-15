"use client"
import Link from "next/link";
function SidebarSubItem({linkData}:any) {
    return (
        <li>
            <Link href={linkData.href}>{linkData.title}</Link>
        </li>
    );
}
export default function SidebarItem({linkData}:any) {
    if (linkData.haveSubMenu) {
        return (
            <li>
                <Link href={linkData.href}>{linkData.title}</Link>
                <ul>
                    {linkData.subMenu.map((linkData:any) => (
                        <SidebarSubItem linkData={linkData} key={linkData.title}/>
                    ))}
                </ul>
            </li>
        );
        
    }
    return (
        <li>
            <Link href={linkData.href}>{linkData.title}</Link>
        </li>
    );
}
"use client"
import Link from "next/link";
import { PropsWithChildren } from "react";
import SideBarDrawer from "./SideBarDrawer";
import TopNavbar from "./TopNavbar";
import { sidebarState } from "@/store/zustand/sidebarState";

export default function ComponentsLayout({ children }: PropsWithChildren) {
    const linksData = {
        components: [
            {
                name: "Accordion",
                href: "/components/accordion",
            },
            {
                name: "Button",
                href: "/components/button",
            },
            {
                name: "Drawer",
                href: "/components/drawer",
            },
        ],
    };
    const closeDrawer = sidebarState((state) => state.close);
    return (
        <div className="grid lg:grid-cols-[auto_1fr]">
            <SideBarDrawer className=" bg-neutral-900">
                <ul>
                    {linksData.components.map((linkData) => (
                        <li key={linkData.name} onClick={()=>closeDrawer()}>
                            <Link href={linkData.href}
                                className="py-2 px-6 block text-sm font-semibold hover:bg-neutral-800"
                            >{linkData.name}</Link>
                        </li>
                    ))}
                </ul>
            </SideBarDrawer>
            <div>
                <TopNavbar/>
                {children}
            </div>
        </div>
    );
}

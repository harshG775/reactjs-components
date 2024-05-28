"use client"
import Link from "next/link";
import { PropsWithChildren } from "react";
// import TopNavbar from "./TopNavbar";
import { sidebarState } from "@/store/zustand/sidebarState";
import SideBarDrawer from "./SideBarDrawer";
import Icon from "@/lib/icons/lucide";

export default function SideBar({ children }: PropsWithChildren) {
    const linksData = {
        components: [
            {
                name: "Accordion",
                href: "/components/accordion",
            },
            {
                name: "Breadcrumb",
                href: "/components/breadcrumb",
            },
            {
                name: "Button",
                href: "/components/button",
            },
            {
                name: "Drawer",
                href: "/components/drawer",
            },
            {
                name: "Dialog",
                href: "/components/dialog",
            },
            {
                name: "Steps",
                href: "/components/steps",
            },
            {
                name: "Tabs",
                href: "/components/tabs",
            },
        ],
    };
    const closeDrawer = sidebarState((state) => state.close);
    const openDrawer = sidebarState((state) => state.open);
    return (
        <div className="grid lg:grid-cols-[auto_1fr]">
            <SideBarDrawer className=" bg-background">
                <ul>
                    {linksData.components.map((linkData) => (
                        <li key={linkData.name} onClick={()=>closeDrawer()}>
                            <Link href={linkData.href}
                                className="py-2 px-6 block text-sm font-semibold hover:bg-background/80"
                            >{linkData.name}</Link>
                        </li>
                    ))}
                </ul>
            </SideBarDrawer>
            <div>
                <div >
                    <button onClick={() => openDrawer()} className="p-2">
                        <Icon name="Menu" />
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
}

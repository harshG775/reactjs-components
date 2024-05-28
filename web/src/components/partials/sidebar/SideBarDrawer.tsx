"use client";

import { PropsWithChildren} from "react";
import Icon from "@/lib/icons/lucide";
import { cn } from "@/lib/utils"; 
import { sidebarState } from "@/store/zustand/sidebarState";

type SideBarDrawerType = PropsWithChildren & {
    className?: string;
};
export default function SideBarDrawer({
    children,
    className,
}: SideBarDrawerType) {
    const isDrawerOpen = sidebarState((state) => state.isOpen);
    const closeDrawer = sidebarState((state) => state.close);
    return (
        <>
            <nav
                className={cn(
                    `${
                        isDrawerOpen
                            ? "translate-x-0"
                            : "lg:translate-x-0 -translate-x-full"
                    } z-50 transition-transform duration-200 lg:static lg:h-screen fixed left-0 right-auto top-0 bottom-0`,
                    className
                )}
            >
                <div
                    role="button"
                    onClick={() => closeDrawer()}
                    className="flex justify-end items-center p-2"
                >
                    <Icon name="X" />
                </div>
                {children}
            </nav>
            {isDrawerOpen?
             <div  className={`${isDrawerOpen ? "bg-neutral-950/80 " : "collapse"} lg:collapse transition-colors duration-200 ease-out fixed inset-0  z-40`} onClick={() => closeDrawer()}></div>
            :""}
            
        </>
    );
}

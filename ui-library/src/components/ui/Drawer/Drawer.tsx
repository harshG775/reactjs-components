"use client";
import { cn } from "@/utils/cn";
import { cva } from "class-variance-authority";
type SideBarProps = {
    children: React.ReactNode;
    isDrawerOpen: boolean;
    setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
    className?: string;
    from: "left" | "right" | "top" | "bottom" | "bottomLeft" | "bottomRight" | "topLeft" | "topRight";
};
export default function Drawer(rest: SideBarProps) {
    const {
        children,
        isDrawerOpen,
        setIsDrawerOpen,
        className,
        from, 
        ...props
    } = rest;
    const drawerVariants = cva(
        "z-50 fixed transition bg-neutral-900 text-neutral-50 border border-neutral-50/20", 
        {
            variants: {
                from: {
                    left: `
                        ${isDrawerOpen ? "translate-x-0" : "-translate-x-full"}
                        top-0 right-auto bottom-0 left-0
                    `,
                    right: `
                        ${isDrawerOpen ? "-translate-x-0" : "translate-x-full"}
                        top-0 right-0 bottom-0 left-auto
                    `,
                    top: `
                        ${isDrawerOpen ? "translate-y-0" : "-translate-y-full"}
                        top-0 right-0 bottom-auto left-0
                    `,
                    bottom: `
                        ${isDrawerOpen ? "translate-y-0" : "translate-y-full"}
                        top-auto right-0 bottom-0 left-0
                    `,
                    bottomLeft: `
                        ${isDrawerOpen ? "translate-y-0 translate-x-0" : "translate-y-full -translate-x-full"}
                        top-auto bottom-0 left-0  right-auto
                    `,
                    bottomRight: `
                        ${isDrawerOpen ? "translate-y-0 translate-x-0" : "translate-y-full translate-x-full"}
                        top-auto bottom-0 left-auto  right-0
                    `,
                    topLeft: `
                        ${isDrawerOpen ? "translate-y-0 translate-x-0" : "-translate-y-full -translate-x-full"}
                        top-0 bottom-auto left-0  right-auto
                    `,
                    topRight: `
                        ${isDrawerOpen ? "translate-y-0 translate-x-0" : "-translate-y-full translate-x-full"}
                        top-0 bottom-auto left-auto  right-0
                    `,
                },
            },
            defaultVariants: {
                from: "bottom",
            },
        }
    );
    return (
        <>
            <div
                className={cn(drawerVariants({ from }), className)}
                {...props}
            >
                {children}
            </div>
            {isDrawerOpen?
            <div  className={` fixed inset-0 bg-neutral-950/50 z-40`} onClick={() => setIsDrawerOpen(false)}></div>
            :""}
        </>
    );
}



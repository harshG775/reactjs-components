"use client"
import { useState } from "react";
import LeftLinks from "./LeftLinks";
import MiddleLinks from "./MiddleLink";
import RightLinks from "./RightLinks";

const TopNavbarData = {
    logoData: {
        title: "Excite",
        // src: "https://flowbite.com/docs/images/logo.svg",
        href: "/home",
    },
    leftLinksData: {
        title: "Excite",
        // src: "https://flowbite.com/docs/images/logo.svg",
        href: "/home",
    },
    middleLinksData: [
        {
            title: "Home",
            href: "/home",
        },
        {
            title: "About",
            href: "/about",
        },
        {
            title: "Services",
            href: "/services",
            submenu: [
                {
                    title: "Services 1",
                    href: "/services",
                },
                {
                    title: "Services 2",
                    href: "/services",
                },
                {
                    title: "Services 3",
                    href: "/services",
                },
            ],
        },
        {
            title: "Contact",
            href: "/contact",
        },
    ],
    rightLinks: [
        {
            title: "Wish List",
            icon: "Heart",
            href: "/wishlist",
        },
        {
            title: "Cart",
            icon: "ShoppingCart",
            href: "/cart",
        },
    ],
};

export default function TopNavbar() {
    const {logoData, leftLinksData, middleLinksData, rightLinks } = TopNavbarData;
    const [open, setOpen] = useState(false);

    return (
        <header className="max-w-8xl mx-auto w-full h-14 flex items-center justify-between gap-2 p-2 bg-background border-b-2 border-b-primary/20">
            <LeftLinks
                leftLinksData={leftLinksData}
                setOpen={setOpen}
            />
            <MiddleLinks
                middleLinksData={middleLinksData}
                logoData={logoData}
                open={open}
                setOpen={setOpen}
            />
            <RightLinks
                rightLinks={rightLinks}
            />
        </header>
    );
}

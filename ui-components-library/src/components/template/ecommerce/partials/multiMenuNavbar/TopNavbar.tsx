"use client";
import Icon from "@/components/icons/lucide";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const TopNavbarData = {
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

type LeftLinksPropsType = {
    leftLinksData: {
        title: string;
        href: string;
        src?: string;
    };
    setOpen: any;
};
function LeftLinks({ leftLinksData, setOpen }: LeftLinksPropsType) {
    return (
        <ul className="flex">
            <li
                onClick={() => setOpen(true)}
                role="button"
                className="grid place-content-center lg:hidden pr-2"
            >
                <button>
                    <Icon name="Menu" className="hover:text-primary w-7 h-7" />
                </button>
            </li>
            <li>
                <Link
                    href={leftLinksData.href}
                    className="flex gap-1 justify-center items-center"
                >
                    {leftLinksData.src && (
                        <Image
                            width={100}
                            height={100}
                            src={leftLinksData.src}
                            alt="logo"
                            className="w-full"
                        />
                    )}
                    <span className="text-2xl font-bold">
                        {leftLinksData.title}
                    </span>
                </Link>
            </li>
        </ul>
    );
}

type MiddleLinksPropsType = {
    middleLinksData: {
        title: string;
        href: string;
        icon?: string;
        submenu?: { title: string; href: string; icon?: string }[];
    }[];
    open: boolean;
    setOpen: any;
};
function MiddleLinks({ middleLinksData, open, setOpen }: MiddleLinksPropsType) {
    return (
        <>
            {/* topBar */}
            <nav
                className={`lg:block hidden transition-transform ease-in-out 
            `}
            >
                <ul className={`flex justify-center items-center gap-2 `}>
                    {middleLinksData.map(
                        (link: { title: string; href: string }) => (
                            <li>
                                <Link
                                    href={link.href}
                                    key={link.title}
                                    className="relative overflow-hidden group h-10 flex justify-center flex-row items-center hover:text-primary font-medium"
                                >
                                    {link.title}
                                    <span className="bg-primary absolute bottom-0 w-full h-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-300"></span>
                                </Link>
                            </li>
                        )
                    )}
                </ul>
            </nav>


            {/* sideBar for large screen */}
            <nav
                className={`lg:hidden z-50 fixed top-0 left-0 bottom-0 min-w-60 ${
                    open ? "-translate-x-[0%]" : "-translate-x-[110%]"
                } transition-transform ease-in-out bg-neutral-50 border-r-2 border-primary/20
            `}
            >
                <div className="h-14 border-b-2 border-b-primary/20 flex justify-end px-4">
                    <button onClick={() => setOpen(false)}>
                        <Icon name="X" className="hover:text-primary w-7 h-7 " />
                    </button>
                </div>
                <ul className={`flex flex-col justify-center `}>
                    {middleLinksData.map(
                        (link: { title: string; href: string }) => (
                            <li>
                                <Link
                                    href={link.href}
                                    key={link.title}
                                    className="w-full relative overflow-hidden group h-10 flex justify-center flex-row items-center hover:text-primary font-medium"
                                >
                                    {link.title}
                                    <span className="bg-primary absolute bottom-0 w-full h-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-300"></span>
                                </Link>
                            </li>
                        )
                    )}
                </ul>
            </nav>
            <span
                onClick={() => setOpen(false)}
                className={`
                ${open ? "block" : "hidden"} 
                lg:hidden  z-10 fixed inset-0 bg-neutral-950/20
                
                `}
            ></span>
        </>
    );
}

type RightLinksPropsType = {
    rightLinks: { title: string; icon: any; href: string }[];
};
function RightLinks({ rightLinks }: RightLinksPropsType) {
    return (
        <ul className="flex gap-2">
            {rightLinks.map(
                (link: { title: string; icon: any; href: string }) => (
                    <li key={link.title} className="flex items-center">
                        <Link
                            href={link.href}
                            className="grid place-content-center "
                            title={link.title}
                        >
                            <Icon
                                name={link.icon}
                                className="w-10 h-10 p-2.5 rounded-full items-center text-primary hover:bg-primary hover:text-white"
                            />
                            {/* <span>{link.title}</span> */}
                        </Link>
                    </li>
                )
            )}
            <li className="flex items-center">
                <Link
                    className="bg-primary hover:opacity-80 transition-opacity text-white rounded-md px-4 py-2 font-semibold"
                    href={"login"}
                >
                    Login
                </Link>
            </li>
        </ul>
    );
}
export default function TopNavbar() {
    const { leftLinksData, middleLinksData, rightLinks } = TopNavbarData;
    const [open, setOpen] = useState(false);

    return (
        <header className="max-w-8xl mx-auto w-full h-14 flex items-center justify-between gap-2 p-2 border-b-2 border-b-primary/20">
            <LeftLinks leftLinksData={leftLinksData} setOpen={setOpen} />
            <MiddleLinks
                middleLinksData={middleLinksData}
                open={open}
                setOpen={setOpen}
            />
            <RightLinks rightLinks={rightLinks} />
        </header>
    );
}

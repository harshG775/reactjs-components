import Icon from "@/components/icons/lucide";
import Image from "next/image";
import Link from "next/link";

type MiddleLinksPropsType = {
    middleLinksData: {
        title: string;
        href: string;
        icon?: string;
        submenu?: { title: string; href: string; icon?: string }[];
    }[];
    open: boolean;
    setOpen: any;
    logoData: {
        title: string;
        src?: string;
        href: string;
    }
};
export default function MiddleLinks({
    middleLinksData,
    open,
    setOpen,
    logoData,
}: MiddleLinksPropsType) {
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
                            <li key={link.title}>
                                <Link
                                    href={link.href}
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
                } transition-transform ease-in-out bg-background border-r-2 border-primary/20
            `}
            >
                <div className="h-14 border-b-2 border-b-primary/20 flex justify-end items-center px-4">
                    <div className="flex-1">
                        <Link
                            href={logoData.href}
                            className="flex gap-1 justify-center items-center"
                        >
                            {logoData.src && (
                                <Image
                                    width={100}
                                    height={100}
                                    src={logoData.src}
                                    alt="logo"
                                    className="w-full"
                                />
                            )}
                            <span className="text-2xl font-bold">
                                {logoData.title}
                            </span>
                        </Link>
                    </div>
                    <button onClick={() => setOpen(false)}>
                        <Icon
                            name="X"
                            className="hover:text-primary w-7 h-7 "
                        />
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

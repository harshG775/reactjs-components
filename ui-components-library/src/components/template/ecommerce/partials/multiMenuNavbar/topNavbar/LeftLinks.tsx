import Icon from "@/components/icons/lucide";
import Image from "next/image";
import Link from "next/link";

type LeftLinksPropsType = {
    leftLinksData: {
        title: string;
        href: string;
        src?: string;
    };
    setOpen: any;
};
export default function LeftLinks({
    leftLinksData,
    setOpen,
}: LeftLinksPropsType) {
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

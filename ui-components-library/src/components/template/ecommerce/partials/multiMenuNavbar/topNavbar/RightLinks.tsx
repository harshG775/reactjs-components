import Icon from "@/components/icons/lucide";
import Link from "next/link";

type RightLinksPropsType = {
    rightLinks: { title: string; icon: any; href: string }[];
};
export default function RightLinks({ rightLinks }: RightLinksPropsType) {
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
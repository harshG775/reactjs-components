"use client"
import Link from "next/link"
// import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";

function Crumb(props: any) {
    const {crumb, index, crumbs} = props
    if (crumbs.length-1!==index ) {
        return (
            <>
                <li className="capitalize flex items-center text-xs text-gray-400 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:focus:text-blue-500">
                    <Link href={crumb.link}>
                        {crumb.label}
                    </Link>
                </li>
                /{/* <Icon className="text-lg" icon={"iconamoon:arrow-right-2-light"}/> */}
            </>
        )
    }
    return (
        <li className="capitalize inline-flex items-center text-xs font-semibold text-gray-800 truncate dark:text-gray-200">
            {crumb.label}
        </li>
    )
}
export default function Breadcrumb_1() {
        const pathname = usePathname();

        const pathnames = pathname.split('/').filter(Boolean); // remove empty strings
        
        let breadcrumbs: any = [];
        let path = '';
    
        pathnames.forEach((name, i) => {
        if (i === 0) {
            path += `/${name}`;
            breadcrumbs.push({ label: name, link: path });
        } else {
            path += `/${name}`;
            breadcrumbs.push({ label: name, link: path });
        }
        });
    
	return (
		<ol
			className="flex items-center flex-wrap p-2 border-y border-gray-200 dark:border-gray-700"
			aria-label="Breadcrumb">
            {breadcrumbs.map((crumb:any, index:number) => (
                <Crumb key={index} crumb={crumb} index={index} crumbs={breadcrumbs}/>
            ))}
		</ol>
	);
}

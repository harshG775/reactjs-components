"use client";

import Link from "next/link";
import { useState } from "react";

function DropDownCrumb({pathObject}:any) {
    const [open, setOpen] = useState(false);
    return(
        <li className="relative">
            <button className="px-4" onClick={() => setOpen(!open)}>:</button>
            <ul className="absolute top-full left-0 grid grid-cols-1 p-2">
                {open && pathObject.map((crumb:any, i:number) => {
                        if (i !== 0 && i !< pathObject.length - 2) {
                            return (
                                <Link key={i} href={crumb.link}>{crumb.label}</Link>
                            )
                        }
                })}
            </ul>
        </li>
    )
}

export default function Breadcrumb_2() {
    // const paths = usePathname();
    const paths = "home/dashboard/components/docs/breadcrumb/example";
    // const paths = "home/dashboard/components/docs";
    const pathsArray = paths.split("/").filter(Boolean);
    const pathObject = pathsArray.map((name, i) => {
        return {
            label: name,
            link: `/${pathsArray.slice(0, i + 1).join("/")}`,
        };
    });
    // console.log(pathObject);
    return (
        <ul className="flex gap-2">
            {pathObject.length <=3 ? pathObject.map((crumb, i) =>(
                <li key={i}>
                    <Link
                        className="capitalize text-blue-500"
                        href={crumb?.link}
                    >
                        {crumb?.label}
                    </Link>
                </li>
            )):
            <>
                <li>
                    <Link
                        className="capitalize text-blue-500"
                        href={pathObject[0]?.link}
                    >
                        {pathObject[0]?.label}
                    </Link>
                </li>
                <DropDownCrumb pathObject={pathObject}/>
                <li>
                    <Link href={pathObject[pathObject.length - 2]?.link}>{pathObject[pathObject.length - 2]?.label}</Link>
                </li>
                <li>{pathObject[pathObject.length - 1]?.label}</li>
            </>
            }
        </ul>
    );
}

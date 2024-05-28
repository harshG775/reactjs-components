"use client";
import Icon from "@/lib/icons/lucide";
import React, { PropsWithChildren, useState } from "react";

export function Accordion({ children }: PropsWithChildren) {
    return <ul>{children}</ul>;
}

type AccordionItemPropsTypes = PropsWithChildren & {
    active: number;
    setActive: any;
    id: number | string;
    title: string;
};
export function AccordionItem({
    children,
    id,
    active,
    setActive,
    title,
}: AccordionItemPropsTypes) {
    const handleToggleDeep = (act: number | string) => {
        if (active == act) {
            return setActive(-1);
        }

        setActive(act);
    };
    const isActive = active === id;
    return (
        <li>
            <button
                onClick={() => handleToggleDeep(id)}
                className="w-full p-1 grid grid-cols-[1fr,auto] items-center select-none"
            >
                {title}
                <Icon
                    name="ChevronDown"
                    className={`${
                        isActive ? "rotate-180" : "rotate-0"
                    } transition-transform duration-100
                    w-4 h-4
                    `}
                />
            </button>
            <div
                className={`
            w-full grid
            ${isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
            transition-[grid-template-rows] duration-200 ease-out border-b border-b-neutral-50/20
        `}
            >
                <div className=" overflow-hidden">{children}</div>
            </div>
        </li>
    );
}
export default function Accordion_() {
    const [active, setActive] = useState(-1);

    return (
        <Accordion>
            <AccordionItem
                title="title 1"
                id={1}
                active={active}
                setActive={setActive}
            >
                Yes. It adheres to the WAI-ARIA design pattern.
                Yes. It adheres to the WAI-ARIA design pattern.
                Yes. It adheres to the WAI-ARIA design pattern.
                Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionItem>
            <AccordionItem
                title="title 2"
                id={2}
                active={active}
                setActive={setActive}
            >
                Yes. It comes with default styles that matches the other
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
            </AccordionItem>
            <AccordionItem
                title="title 3"
                id={3}
                active={active}
                setActive={setActive}
            >
                Yes. It&apos;s animated by default, but you can disable it if
                Yes. It&apos;s animated by default, but you can disable it if
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
            </AccordionItem>
        </Accordion>
    );
}

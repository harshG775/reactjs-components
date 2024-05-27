"use client";
import { useState } from "react";

function Tab({ tab, activeTab, setActiveTab }: any) {
    const { title, id } = tab;
    return (
        <li>
            <button
                className={` ${
                    activeTab === id
                        ? "bg-primary text-primary-foreground"
                        : " text-primary hover:bg-muted focus-visible:bg-muted"
                } focus-outline w-full pb-1 pt-2 h-6 sm:h-8 sm:text-sm text-xs rounded-md cursor-pointer font-medium uppercase flex items-center justify-center
            
            `}
                onClick={() => setActiveTab(id)}
            >
                {title}
            </button>
        </li>
    );
}
export default function Tabs({ tabData }: any) {
    const [activeTab, setActiveTab] = useState(tabData[0].id);
    const Render =tabData.find((tab: { id: number }) => tab.id === activeTab)?.content
    return (
        <>
            <ul className="max-w-8xl w-full mx-auto shadow-md g-primary-foreground/50 p-2 grid sm:gap-2 sm:grid-cols-[repeat(auto-fill,minmax(120px,1fr))]">
                {tabData.map((tab: { title: string; id: number }) => (
                    <Tab
                        key={tab.id}
                        tab={tab}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                    />
                ))}
            </ul>
            {Render}
        </>
    );
}

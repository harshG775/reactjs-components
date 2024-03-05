"use client";
import { useState } from "react";

function Tab({ tab, activeTab, setActiveTab }: any) {
    const { name, id } = tab;
    return (
        <div
            className={`p-1 sm:p-2 ${
                activeTab === id
                    ? "bg-neutral-900 text-white"
                    : "bg-white text-neutral-900"
            } shadow-md rounded-md cursor-pointer text-xs font-medium
            
            `}
            onClick={() => setActiveTab(id)}
        >
            {name}
        </div>
    );
}
export default function Tabs() {
    const [activeTab, setActiveTab] = useState(1);
    const tabData = [
        {
            id: 1,
            name: "Tab 1",
        },
        {
            id: 2,
            name: "Tab 2",
        },
        {
            id: 3,
            name: "Tab 3",
        },
        {
            id: 4,
            name: "Tab 4",
        },
    ];
    return (
        <div className={`bg-neutral-50 p-0.5 sm:p-2 grid gap-2 grid-cols-[repeat(auto-fill,minmax(80px,1fr))]`}>
            {tabData.map((tab) => (
                <Tab
                    key={tab.id}
                    tab={tab}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
            ))}
        </div>
    );
}

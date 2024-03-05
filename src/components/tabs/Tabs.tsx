"use client"
import { useState } from "react";

function Tab({ ...data }) {
    const { name } = data;
    return <div className="p-2">
        {name}
    </div>;
}
export default function Tabs() {
    const [activeTab, setActiveTab ] = useState(1);
    const tabData = [
        {
            id: 1,
            name: "Tab 1",
        },
        {
            id: 1,
            name: "Tab 1",
        },
    ];
    return (
        <div className=" min-w-screen w-full grid grid-cols-[repeat(auto-fill,minmax(80px,1fr))]">
            {tabData.map((data) => (
                <Tab key={data.id} {...data} activeTab={activeTab} setActiveTab={setActiveTab} />
            ))}
        </div>
    );
}

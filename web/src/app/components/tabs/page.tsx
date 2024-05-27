"use client";
import Tabs from "@/components/ui/tabs/Tabs";
export default function page() {
    return (
        <main>
            <Tabs
                tabData={["Tab 1", "Tab 2", "Tab 3"]}
                render={({ currentTab }: any) => {
                    return (
                        <div>
                            <h1 className="text-3xl">{currentTab}</h1>
                        </div>
                    );
                }}
            />
        </main>
    );
}

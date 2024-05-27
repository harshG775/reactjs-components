import Tabs from "@/components/ui/tabs/Tabs";
export default function page() {
    return (
        <main>
            <Tabs
                tabData={[
                    {
                        title: "Tab 1",
                        id: "tab-1",
                        content: (
                            <div>
                                <h1 className="text-3xl">Tab 1</h1>
                            </div>
                        ),
                    },
                    {
                        title: "Tab 2",
                        id: "tab-2",
                        content: (
                            <div>
                                <h1 className="text-3xl">Tab 2</h1>
                            </div>
                        ),
                    },
                ]}
            />
        </main>
    );
}

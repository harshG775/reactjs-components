import Tabs from "@/components/ui/tabs/Tabs";
export default function page() {
    return (
        <main>
            <Tabs
                tabData={[
                    {
                        title: "Tab One",
                        render: (
                            <div>
                                <h1 className="text-3xl">Tab 1</h1>
                            </div>
                        ),
                    },
                    {
                        title: "Tab Two",
                        render: (
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

import Tabs from "@/components/ui/tabs/Tabs";
export default function page() {
    return (
        <main>
            <section className="container mx-auto">
                <Tabs
                    tabData={[
                        {
                            title: "Tab One",
                            render: (
                                <div className="min-h-96 grid place-content-center font-bold border-2 bg-muted p-2">
                                    <h1 className="text-3xl">Tab 1</h1>
                                </div>
                            ),
                        },
                        {
                            title: "Tab Two",
                            render: (
                                <div className="min-h-96 grid place-content-center font-bold border-2 bg-muted p-2">
                                    <h1 className="text-3xl">Tab 2</h1>
                                </div>
                            ),
                        },
                        {
                            title: "Tab Three",
                            render: (
                                <div className="min-h-96 grid place-content-center font-bold border-2 bg-muted p-2">
                                    <h1 className="text-3xl">Tab 3</h1>
                                </div>
                            ),
                        },
                        {
                            title: "Tab Four",
                            render: (
                                <div className="min-h-96 grid place-content-center font-bold border-2 bg-muted p-2">
                                    <h1 className="text-3xl">Tab 4</h1>
                                </div>
                            ),
                        },
                    ]}
                />
            </section>
        </main>
    );
}

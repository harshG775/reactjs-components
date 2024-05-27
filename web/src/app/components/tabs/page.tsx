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
                                <div className="min-h-96 grid place-content-center border-2 bg-muted p-2">
                                    <h1 className="text-3xl font-bold">Tab 1</h1>
                                    <p className="mt-4">
                                        This is the content of Tab 1. It{"'"}s
                                        designed to demonstrate some basic
                                        layout and styling using Tailwind CSS.
                                    </p>
                                    <ul className=" mt-2">
                                        <li>Feature 1</li>
                                        <li>Feature 2</li>
                                        <li>Feature 3</li>
                                    </ul>
                                </div>
                            ),
                        },
                        {
                            title: "Tab Two",
                            render: (
                                <div className="min-h-96 grid place-content-center border-2 bg-muted p-2">
                                    <h1 className="text-3xl font-bold">Tab 2</h1>
                                    <p className="mt-4">
                                        This is the content of Tab 2. Here we
                                        have a simple text content with some
                                        different features listed below.
                                    </p>
                                    <ul className=" mt-2">
                                        <li>Detail A</li>
                                        <li>Detail B</li>
                                        <li>Detail C</li>
                                    </ul>
                                </div>
                            ),
                        },
                        {
                            title: "Tab Three",
                            render: (
                                <div className="min-h-96 grid place-content-center border-2 bg-muted p-2">
                                    <h1 className="text-3xl font-bold">Tab 3</h1>
                                    <p className="mt-4">
                                        This is the content of Tab 3. This tab
                                        provides additional information about
                                        the topic, with a list of advantages
                                        below.
                                    </p>
                                    <ul className=" mt-2">
                                        <li>Advantage X</li>
                                        <li>Advantage Y</li>
                                        <li>Advantage Z</li>
                                    </ul>
                                </div>
                            ),
                        },
                        {
                            title: "Tab Four",
                            render: (
                                <div className="min-h-96 grid place-content-center border-2 bg-muted p-2">
                                    <h1 className="text-3xl font-bold">Tab 4</h1>
                                    <p className="mt-4">
                                        This is the content of Tab 4. The final
                                        tab includes a summary and a conclusion
                                        about the information provided in the
                                        previous tabs.
                                    </p>
                                    <ul className=" mt-2">
                                        <li>Summary Point 1</li>
                                        <li>Summary Point 2</li>
                                        <li>Summary Point 3</li>
                                    </ul>
                                </div>
                            ),
                        },
                    ]}
                />
            </section>
        </main>
    );
}

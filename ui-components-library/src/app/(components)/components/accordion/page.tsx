import Accordion_ from "@/components/ui/accordion/Accordion";

export default function page() {
    return (
        <main className="max-w-7xl mx-auto">
            <div>
                <h2 className="py-4 font-bold text-4xl text-rose-600">
                    Accordion
                </h2>
                <p className="max-w-96 text-xl text-neutral-50/50 text-balance">
                    A vertically stacked set of interactive headings that each
                    reveal a section of content.
                </p>
            </div>
            <div className="border border-neutral-50/50 rounded-md p-12 grid place-content-center max-h-96 max-w-96 mx-auto overflow-y-auto">
                <Accordion_ />
            </div>
        </main>
    );
}

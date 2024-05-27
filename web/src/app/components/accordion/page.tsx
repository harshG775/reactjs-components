import BouncyAccordion from "@/components/accordion/BouncyAccordion";
import Accordion_ from "@/components/accordion/Accordion";

export default function page() {
    return (
        <main className="container mx-auto space-y-10">
            <section className="grid place-content-center">
                <h1 className="text-2xl font-bold">simple Accordion</h1>
                <Accordion_ />
            </section>
            <section className="grid place-content-center">
                <h1 className="text-2xl font-bold">Bouncy Accordion</h1>
                <BouncyAccordion />
            </section>
        </main>
    );
}
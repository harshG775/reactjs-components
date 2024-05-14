import Button from "@/components/ui/buttons/Button";

export default function page() {
    return (
        <main className="max-w-7xl mx-auto">
            <div>
                <h1 className="py-4 font-bold text-4xl text-rose-600">Button</h1>
                <p className="max-w-96 text-xl text-neutral-50/50 text-balance">Displays a button or a component that looks like a button.</p>
            </div>
            <div className="border border-neutral-50/50 rounded-md p-12 grid gap-4 place-content-center max-h-96 max-w-96 mx-auto overflow-y-auto">
                <Button variant="primary">
                    button
                </Button>
                <Button variant="secondary">
                    button
                </Button>
                <Button variant="success">
                    button
                </Button>
                <Button variant="danger">
                    button
                </Button>
                <Button variant="warning">
                    button
                </Button>
            </div>
        </main>
    );
}
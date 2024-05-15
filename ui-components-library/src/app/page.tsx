import Button from "@/components/ui/buttons/Button";
import Link from "next/link";

export default function Home() {
    return (
        <main className="grid place-content-center min-h-screen">
            <h1 className="font-bold text-4xl text-rose-600">Components</h1>
            <p className="max-w-96 text-xl text-neutral-50/50 text-balance">
                Beautifully designed components that you can copy and paste into
                your apps. Accessible. Customizable. Open Source.
            </p>
            <div>
                <Link href={"/components/accordion"}>
                    <Button className="bg-rose-600 transition-colors duration-100">
                        Get Started
                    </Button>
                </Link>
            </div>
        </main>
    );
}

`

`
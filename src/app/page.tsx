import Link from "next/link";

export default function Home() {
    return (
        <main className="grid place-content-center min-h-screen">
            <h1 className="font-bold text-4xl text-rose-600">Components</h1>
            <p className="max-w-96 text-xl text-neutral-50/50">
                Beautifully designed components that you can copy and paste into
                your apps. Accessible. Customizable. Open Source.
            </p>
            <div>
                <Link href={"/components"} className="rounded-md w-32 h-10 bg-rose-700 grid place-content-center">
                    Get Started
                </Link>
            </div>
        </main>
    );
}

`

`
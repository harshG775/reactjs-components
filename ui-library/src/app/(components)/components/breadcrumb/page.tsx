import Breadcrumb_1 from "@/components/ui/breadcrumbs/Breadcrumb_1";
import Breadcrumb_2 from "@/components/ui/breadcrumbs/Breadcrumb_2";


export default function page() {
    return (
        <main className="grid place-content-center">
            <Breadcrumb_1 />
            <Breadcrumb_2 />
        </main>
    );
}
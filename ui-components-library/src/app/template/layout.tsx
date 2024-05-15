import TopNavbar from "@/components/template/ecommerce/partials/multiMenuNavbar/TopNavbar";

export default function templatesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <TopNavbar/>
            {children}
            <footer>footer</footer>
        </>
    );
}

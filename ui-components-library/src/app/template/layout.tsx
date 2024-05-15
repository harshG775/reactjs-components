import TopNavbar from "@/components/template/ecommerce/partials/multiMenuNavbar/topNavbar/TopNavbar";

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

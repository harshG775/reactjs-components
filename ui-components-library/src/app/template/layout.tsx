import NavBarBanner from "@/components/template/ecommerce/partials/multiMenuNavbar/NavBarBanner/NavBarBanner";
import TopNavbar from "@/components/template/ecommerce/partials/multiMenuNavbar/topNavbar/TopNavbar";

export default function templatesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <NavBarBanner
                contactInfo={{
                    email: "user123@example.com",
                    phone: "123456789",
                }}
                banner="Free shipping, 30-day return or refund guarantee."
            />
            <TopNavbar className="sticky top-0" />
            {children}
            <footer>footer</footer>
        </>
    );
}

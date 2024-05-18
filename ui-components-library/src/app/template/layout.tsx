"use client"
import NavBarBanner from "@/components/template/ecommerce/partials/multiMenuNavbar/NavBarBanner/NavBarBanner";
import TopNavbar from "@/components/template/ecommerce/partials/multiMenuNavbar/topNavbar/TopNavbar";
import { useEffect, useState } from "react";

export default function TemplatesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [darkMode, setDarkMode] = useState(false);
    useEffect(() => {
        // <html lang="en" data-theme="light">
        document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
    })

    return (
        <>
            <button className="fixed bottom-4 right-4" onClick={() => setDarkMode(!darkMode)}>Dark Mode</button>
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

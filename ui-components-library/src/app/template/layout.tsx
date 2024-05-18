"use client"
import Icon from "@/components/icons/lucide";
import NavBarBanner from "@/components/template/ecommerce/partials/multiMenuNavbar/NavBarBanner/NavBarBanner";
import TopNavbar from "@/components/template/ecommerce/partials/multiMenuNavbar/topNavbar/TopNavbar";
import { useEffect, useState } from "react";

export default function TemplatesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [theme, setTheme] = useState(false);
    useEffect(() => {
        // <html lang="en" data-theme="light">
        document.documentElement.setAttribute("data-theme", theme ? "dark" : "light");
    })

    return (
        <>
            <button className="fixed bottom-4 right-4" onClick={() => setTheme(!theme)}>
                <Icon name="SunMoon" className="w-8 h-8 p-2 shadow-sm hover:shadow-md rounded-full shadow-primary items-center bg-primary hover:text-primary hover:bg-white transition-all duration-300" />
            </button>
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

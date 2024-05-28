import TanstackQuery from "@/lib/TanstackQuery";
import { cn } from "@/lib/utils";
import React from "react";
import ThemeHandler from "../ui/ThemeHandler";

type RootLayoutProps = {
    children: React.ReactNode;
    className?: string;
    theme: string;
};
export default function Layout({ theme, children, ...rest }: RootLayoutProps) {
    const { className } = rest;
    return (
        <html lang="en" color-scheme={theme}>
            <body
                {...rest}
                className={cn(
                    `min-h-screen bg-background font-sans antialiased ${theme}`,
                    className
                )}
            >
                <TanstackQuery>
                    {children}
                    <ThemeHandler currentTheme={theme} />
                </TanstackQuery>
            </body>
        </html>
    );
}

import ComponentsLayout from "@/components/layouts/ComponentsLayout";
import type { Metadata } from "next";
import { PropsWithChildren, ReactElement } from "react";

export const metadata: Metadata = {
    title: "components",
    description: "components",
};

export default function RootLayout({
    children,
}: PropsWithChildren<{}>): ReactElement {
    return <ComponentsLayout>{children}</ComponentsLayout>;
}

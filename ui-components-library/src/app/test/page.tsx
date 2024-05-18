"use client";
import { useState } from "react";
// import DrawerTest from "./Drawer";
import Button from "@/components/ui/buttons/Button";

export default function TestPage() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    return (
        <>
            {/* <DrawerTest
                isDrawerOpen={isDrawerOpen}
                setIsDrawerOpen={setIsDrawerOpen}
                className="h-96"
            >
                some data
            </DrawerTest> */}
            <Button onClick={() => setIsDrawerOpen(true)}>Drawer</Button>
        </>
    );
}

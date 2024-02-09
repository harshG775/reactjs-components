"use client";
import { useState } from "react";
import Dialog from "@/components/dialog/Dialog";
export default function DialogPage() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Dialog {...{ isOpen, setIsOpen }}>
            some data
        </Dialog>
    );
}
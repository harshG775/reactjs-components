"use client"
import { sidebarState } from "@/store/zustand/sidebarState";
import Button from "../ui/buttons/Button";
import Icon from "../icons/lucide";

export default function TopNavbar() {
    const openDrawer = sidebarState((state) => state.open);
    return (
        <nav>
            <button onClick={() => openDrawer()}>
                <Icon name="Menu"/>
            </button>
        </nav>
    );
}

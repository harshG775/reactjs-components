"use client";
import Drawer from "@/components/Drawer/Drawer";
import { useState } from "react";
export default function Page() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isDrawerOpenRight, setIsDrawerOpenRight] = useState(false);
    const [isDrawerOpenTop, setIsDrawerOpenTop] = useState(false);
    const [isDrawerOpenBottom, setIsDrawerOpenBottom] = useState(false);
    return (
        <main className="p-4 grid place-content-center gap-2">
            <Drawer
                from="left"
                isDrawerOpen={isDrawerOpen}
                setIsDrawerOpen={setIsDrawerOpen}
            >
                <ul className=" min-w-60">
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                </ul>
            </Drawer>
            <button
                className=" rounded-lg px-6 py-2 bg-blue-500 text-white"
                onClick={() => setIsDrawerOpen(true)}
            >
                left
            </button>

            <Drawer
                from="right"
                isDrawerOpen={isDrawerOpenRight}
                setIsDrawerOpen={setIsDrawerOpenRight}
            >
                <ul className=" min-w-60">
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                </ul>
            </Drawer>
            <button
                className=" rounded-lg px-6 py-2 bg-blue-500 text-white"
                onClick={() => setIsDrawerOpenRight(true)}
            >
                right
            </button>

            <Drawer
                from="top"
                isDrawerOpen={isDrawerOpenTop}
                setIsDrawerOpen={setIsDrawerOpenTop}
            >
                <ul className=" min-w-60">
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                </ul>
            </Drawer>
            <button
                className=" rounded-lg px-6 py-2 bg-blue-500 text-white"
                onClick={() => setIsDrawerOpenTop(true)}
            >
                Top
            </button>

            <Drawer
                from="bottom"
                isDrawerOpen={isDrawerOpenBottom}
                setIsDrawerOpen={setIsDrawerOpenBottom}
            >
                <ul className=" min-w-60">
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                </ul>
            </Drawer>
            <button
                className=" rounded-lg px-6 py-2 bg-blue-500 text-white"
                onClick={() => setIsDrawerOpenBottom(true)}
            >
                Bottom
            </button>
        </main>
    );
}

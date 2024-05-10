"use client";
import Drawer from "@/components/Drawer/Drawer";
import { useState } from "react";
export default function Page() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isDrawerOpenRight, setIsDrawerOpenRight] = useState(false);
    const [isDrawerOpenTop, setIsDrawerOpenTop] = useState(false);
    const [isDrawerOpenBottom, setIsDrawerOpenBottom] = useState(false);
    const [isDrawerOpenBottomLeft, setIsDrawerOpenBottomLeft] = useState(false);
    const [isDrawerOpenBottomRight, setIsDrawerOpenBottomRight] = useState(false);
    const [isDrawerOpenTopLeft, setIsDrawerOpenTopLeft] = useState(false);
    const [isDrawerOpenTopRight, setIsDrawerOpenTopRight] = useState(false);
    return (
        <main className="p-4 grid place-content-center gap-2">
            <Drawer
                from="left"
                isDrawerOpen={isDrawerOpen}
                setIsDrawerOpen={setIsDrawerOpen}
            >
                <ul className=" min-w-60 min-h-60">
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
                <ul className=" min-w-60 min-h-60">
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
                <ul className=" min-w-60 min-h-60">
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
                <ul className=" min-w-60 min-h-60">
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
            <Drawer
                from="bottomLeft"
                isDrawerOpen={isDrawerOpenBottomLeft}
                setIsDrawerOpen={setIsDrawerOpenBottomLeft}
                className=" p-4 rounded-tr-2xl"
            >
                <ul className=" min-w-60 min-h-60">
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                </ul>
            </Drawer>
            <button
                className=" rounded-lg px-6 py-2 bg-blue-500 text-white"
                onClick={() => setIsDrawerOpenBottomLeft(true)}
            >
                BottomLeft
            </button>
            <Drawer
                from="bottomRight"
                isDrawerOpen={isDrawerOpenBottomRight}
                setIsDrawerOpen={setIsDrawerOpenBottomRight}
                className=" p-4 rounded-tl-2xl"
            >
                <ul className=" min-w-60 min-h-60">
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                </ul>
            </Drawer>
            <button
                className=" rounded-lg px-6 py-2 bg-blue-500 text-white"
                onClick={() => setIsDrawerOpenBottomRight(true)}
            >
                BottomRight
            </button>
            <Drawer
                from="topLeft"
                isDrawerOpen={isDrawerOpenTopLeft}
                setIsDrawerOpen={setIsDrawerOpenTopLeft}
                className=" p-4 rounded-br-2xl"
            >
                <ul className=" min-w-60 min-h-60">
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                </ul>
            </Drawer>
            <button
                className=" rounded-lg px-6 py-2 bg-blue-500 text-white"
                onClick={() => setIsDrawerOpenTopLeft(true)}
            >
                TopLeft
            </button>
            <Drawer
                from="topRight"
                isDrawerOpen={isDrawerOpenTopRight}
                setIsDrawerOpen={setIsDrawerOpenTopRight}
                className=" p-4 rounded-bl-2xl"
            >
                <ul className=" min-w-60 min-h-60">
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                </ul>
            </Drawer>
            <button
                className=" rounded-lg px-6 py-2 bg-blue-500 text-white"
                onClick={() => setIsDrawerOpenTopRight(true)}
            >
                TopRight
            </button>
        </main>
    );
}

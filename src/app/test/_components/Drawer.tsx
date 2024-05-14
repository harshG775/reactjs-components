"use client";
import { useState } from "react";

export default function Drawer() {
    const [isOpen, setIsOpen] = useState(false);
    const [dragging, setDragging] = useState(false);
    const [pos, setPos] = useState({ x: 0, y: 0 });

    const onMouseDown = (e: any) => {
        setDragging(true);
    };

    const onMouseUp = (e: any) => {
        setDragging(false);
        if (pos.x >= 120) {
            setIsOpen(true);
            return
        }
        // if (pos.x <= 120) {
        //     setIsOpen(false);
        //     return
        // }
    };
    const onDragStart = (e: any) => {
        if (dragging) {
            if (e.clientX >=230) {
                setPos((pre) => {
                    return { x: pre.x, y: pre.y };
                });
                return
            }
            setPos((pre) => {
                return { x: e.clientX-210, y: e.clientY-240 };
            });
        }
    };
    return (
        <>
            <div
                className="w-full h-60 bg-neutral-900"
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
                onMouseMove={onDragStart}
            >
                <div
                    style={{
                        transform: `${dragging ? `translateX(${pos.x}px)` : isOpen ? `translateX(0px)` : `translateX(-100%)`}`,
                    }}
                    
                    className={`select-none w-60 min-h-60 bg-slate-600 transition-transform`}
                >
                    <div>link</div>
                    <div>link</div>
                    <div>link</div>
                    <div>link</div>
                </div>
            </div>
            <div onClick={() => setIsOpen((pre) => !pre)}>toggle</div>
        </>
    );
}

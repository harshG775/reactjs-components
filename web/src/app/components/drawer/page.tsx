"use client";
import Drawer from "@/components/ui/Drawer/Drawer";
import Button from "@/components/ui/buttons/Button";
import Icon from "@/lib/icons/lucide";
import { useState } from "react";

export default function DrawerPage() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isDrawerOpenRight, setIsDrawerOpenRight] = useState(false);
    const [isDrawerOpenTop, setIsDrawerOpenTop] = useState(false);
    const [isDrawerOpenBottom, setIsDrawerOpenBottom] = useState(false);
    const [isDrawerOpenBottomLeft, setIsDrawerOpenBottomLeft] = useState(false);
    const [isDrawerOpenBottomRight, setIsDrawerOpenBottomRight] =
        useState(false);
    const [isDrawerOpenTopLeft, setIsDrawerOpenTopLeft] = useState(false);
    const [isDrawerOpenTopRight, setIsDrawerOpenTopRight] = useState(false);

    return (
        <main className="max-w-7xl mx-auto">
            <div className="grid place-content-center">
                <h2 className="py-4 font-bold text-4xl text-rose-600">
                    Drawer
                </h2>
                <p className="max-w-96 text-xl text-balance">
                    A drawer component for React.
                </p>
            </div>
            <div className=" border rounded-md p-12 grid gap-4 sm:grid-cols-2 place-content-center max-h-96 max-w-96 mx-auto overflow-y-auto">
                <Drawer
                    from="left"
                    isDrawerOpen={isDrawerOpen}
                    setIsDrawerOpen={setIsDrawerOpen}
                >
                    <ul className=" min-w-60 min-h-60">
                        <li className="flex justify-end p-2" onClick={()=>setIsDrawerOpen(false)}>
                            <Icon name="X" className="hover:text-primary"/>
                        </li>
                        <li className="text-center border-t hover:bg-primary/40 hover:text-primary-foreground p-2" onClick={()=>setIsDrawerOpen(false)}>1</li>
                        <li className="text-center border-t hover:bg-primary/40 hover:text-primary-foreground p-2" onClick={()=>setIsDrawerOpen(false)}>2</li>
                        <li className="text-center border-t hover:bg-primary/40 hover:text-primary-foreground p-2" onClick={()=>setIsDrawerOpen(false)}>3</li>
                        <li className="text-center border-t hover:bg-primary/40 hover:text-primary-foreground p-2" onClick={()=>setIsDrawerOpen(false)}>4</li>
                    </ul>
                </Drawer>
                <Button variant="primary" onClick={() => setIsDrawerOpen(true)}>
                    left
                </Button>

                <Drawer
                    from="right"
                    isDrawerOpen={isDrawerOpenRight}
                    setIsDrawerOpen={setIsDrawerOpenRight}
                >
                    <ul className=" min-w-60 min-h-60">
                        <li className="flex justify-end p-2" onClick={()=>setIsDrawerOpenRight(false)}>
                            <Icon name="X" className="hover:text-primary"/>
                        </li>
                        <li className="text-center border-t hover:bg-primary/40 hover:text-primary-foreground p-2" onClick={()=>setIsDrawerOpenRight(false)}>1</li>
                        <li className="text-center border-t hover:bg-primary/40 hover:text-primary-foreground p-2" onClick={()=>setIsDrawerOpenRight(false)}>2</li>
                        <li className="text-center border-t hover:bg-primary/40 hover:text-primary-foreground p-2" onClick={()=>setIsDrawerOpenRight(false)}>3</li>
                        <li className="text-center border-t hover:bg-primary/40 hover:text-primary-foreground p-2" onClick={()=>setIsDrawerOpenRight(false)}>4</li>
                    </ul>
                </Drawer>
                <Button
                    variant="primary"
                    onClick={() => setIsDrawerOpenRight(true)}
                >
                    right
                </Button>

                <Drawer
                    from="top"
                    isDrawerOpen={isDrawerOpenTop}
                    setIsDrawerOpen={setIsDrawerOpenTop}
                >
                    <ul className=" min-w-60 min-h-60">
                        <li className="flex justify-end p-2" onClick={()=>setIsDrawerOpenTop(false)}>
                            <Icon name="X" className="hover:text-primary"/>
                        </li>
                        <li className="text-center border-t hover:bg-primary/40 hover:text-primary-foreground p-2" onClick={()=>setIsDrawerOpenTop(false)}>1</li>
                        <li className="text-center border-t hover:bg-primary/40 hover:text-primary-foreground p-2" onClick={()=>setIsDrawerOpenTop(false)}>2</li>
                        <li className="text-center border-t hover:bg-primary/40 hover:text-primary-foreground p-2" onClick={()=>setIsDrawerOpenTop(false)}>3</li>
                        <li className="text-center border-t hover:bg-primary/40 hover:text-primary-foreground p-2" onClick={()=>setIsDrawerOpenTop(false)}>4</li>
                    </ul>
                </Drawer>
                <Button
                    variant="primary"
                    onClick={() => setIsDrawerOpenTop(true)}
                >
                    Top
                </Button>

                <Drawer
                    from="bottom"
                    isDrawerOpen={isDrawerOpenBottom}
                    setIsDrawerOpen={setIsDrawerOpenBottom}
                >
                    <ul className=" min-w-60 min-h-60">
                        <li className="flex justify-end p-2" onClick={()=>setIsDrawerOpenBottom(false)}>
                            <Icon name="X" className="hover:text-primary"/>
                        </li>
                        <li className="text-center border-t hover:bg-primary/40 hover:text-primary-foreground p-2" onClick={()=>setIsDrawerOpenBottom(false)}>1</li>
                        <li className="text-center border-t hover:bg-primary/40 hover:text-primary-foreground p-2" onClick={()=>setIsDrawerOpenBottom(false)}>2</li>
                        <li className="text-center border-t hover:bg-primary/40 hover:text-primary-foreground p-2" onClick={()=>setIsDrawerOpenBottom(false)}>3</li>
                        <li className="text-center border-t hover:bg-primary/40 hover:text-primary-foreground p-2" onClick={()=>setIsDrawerOpenBottom(false)}>4</li>
                    </ul>
                </Drawer>
                <Button
                    variant="primary"
                    onClick={() => setIsDrawerOpenBottom(true)}
                >
                    Bottom
                </Button>
                <Drawer
                    from="topLeft"
                    isDrawerOpen={isDrawerOpenTopLeft}
                    setIsDrawerOpen={setIsDrawerOpenTopLeft}
                    className=" p-4 rounded-br-2xl"
                >
                    <ul className=" min-w-60 min-h-60">
                        <li className="flex justify-end p-2" onClick={()=>setIsDrawerOpenTopLeft(false)}>
                            <Icon name="X" className="hover:text-primary"/>
                        </li>
                        <li className="text-center border-t hover:bg-primary/40 hover:text-primary-foreground p-2" onClick={()=>setIsDrawerOpenTopLeft(false)}>1</li>
                        <li className="text-center border-t hover:bg-primary/40 hover:text-primary-foreground p-2" onClick={()=>setIsDrawerOpenTopLeft(false)}>2</li>
                        <li className="text-center border-t hover:bg-primary/40 hover:text-primary-foreground p-2" onClick={()=>setIsDrawerOpenTopLeft(false)}>3</li>
                        <li className="text-center border-t hover:bg-primary/40 hover:text-primary-foreground p-2" onClick={()=>setIsDrawerOpenTopLeft(false)}>4</li>
                    </ul>
                </Drawer>
                <Button
                    variant="primary"
                    onClick={() => setIsDrawerOpenTopLeft(true)}
                >
                    TopLeft
                </Button>
                <Drawer
                    from="topRight"
                    isDrawerOpen={isDrawerOpenTopRight}
                    setIsDrawerOpen={setIsDrawerOpenTopRight}
                    className=" p-4 rounded-bl-2xl"
                >
                    <ul className=" min-w-60 min-h-60">
                        <li className="flex justify-end p-2" onClick={()=>setIsDrawerOpenTopRight(false)}>
                            <Icon name="X" className="hover:text-primary"/>
                        </li>
                        <li className="text-center border-t hover:bg-primary/40 hover:text-primary-foreground p-2" onClick={()=>setIsDrawerOpenTopRight(false)}>1</li>
                        <li className="text-center border-t hover:bg-primary/40 hover:text-primary-foreground p-2" onClick={()=>setIsDrawerOpenTopRight(false)}>2</li>
                        <li className="text-center border-t hover:bg-primary/40 hover:text-primary-foreground p-2" onClick={()=>setIsDrawerOpenTopRight(false)}>3</li>
                        <li className="text-center border-t hover:bg-primary/40 hover:text-primary-foreground p-2" onClick={()=>setIsDrawerOpenTopRight(false)}>4</li>
                    </ul>
                </Drawer>
                <Button
                    variant="primary"
                    onClick={() => setIsDrawerOpenTopRight(true)}
                >
                    TopRight
                </Button>
                <Drawer
                    from="bottomLeft"
                    isDrawerOpen={isDrawerOpenBottomLeft}
                    setIsDrawerOpen={setIsDrawerOpenBottomLeft}
                    className=" p-4 rounded-tr-2xl"
                >
                    <ul className=" min-w-60 min-h-60">
                        <li className="flex justify-end p-2" onClick={()=>setIsDrawerOpenBottomLeft(false)}>
                            <Icon name="X" className="hover:text-primary"/>
                        </li>
                        <li className="text-center border-t hover:bg-primary/40 hover:text-primary-foreground p-2" onClick={()=>setIsDrawerOpenBottomLeft(false)}>1</li>
                        <li className="text-center border-t hover:bg-primary/40 hover:text-primary-foreground p-2" onClick={()=>setIsDrawerOpenBottomLeft(false)}>2</li>
                        <li className="text-center border-t hover:bg-primary/40 hover:text-primary-foreground p-2" onClick={()=>setIsDrawerOpenBottomLeft(false)}>3</li>
                        <li className="text-center border-t hover:bg-primary/40 hover:text-primary-foreground p-2" onClick={()=>setIsDrawerOpenBottomLeft(false)}>4</li>
                    </ul>
                </Drawer>
                <Button
                    variant="primary"
                    onClick={() => setIsDrawerOpenBottomLeft(true)}
                >
                    BottomLeft
                </Button>
                <Drawer
                    from="bottomRight"
                    isDrawerOpen={isDrawerOpenBottomRight}
                    setIsDrawerOpen={setIsDrawerOpenBottomRight}
                    className=" p-4 rounded-tl-2xl"
                >
                    <ul className=" min-w-60 min-h-60">
                        <li className="flex justify-end p-2" onClick={()=>setIsDrawerOpenBottomRight(false)}>
                            <Icon name="X" className="hover:text-primary"/>
                        </li>
                        <li className="text-center border-t hover:bg-primary/40 hover:text-primary-foreground p-2" onClick={()=>setIsDrawerOpenBottomRight(false)}>1</li>
                        <li className="text-center border-t hover:bg-primary/40 hover:text-primary-foreground p-2" onClick={()=>setIsDrawerOpenBottomRight(false)}>2</li>
                        <li className="text-center border-t hover:bg-primary/40 hover:text-primary-foreground p-2" onClick={()=>setIsDrawerOpenBottomRight(false)}>3</li>
                        <li className="text-center border-t hover:bg-primary/40 hover:text-primary-foreground p-2" onClick={()=>setIsDrawerOpenBottomRight(false)}>4</li>
                    </ul>
                </Drawer>
                <Button
                    variant="primary"
                    onClick={() => setIsDrawerOpenBottomRight(true)}
                >
                    BottomRight
                </Button>
            </div>
        </main>
    );
}

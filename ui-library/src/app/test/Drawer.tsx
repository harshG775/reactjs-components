// "use client";
// import { cn } from "@/utils/cn";
// import React, { useEffect, useRef, useState } from "react";
// type SideBarProps = {
//     children: React.ReactNode;
//     isDrawerOpen: boolean;
//     setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
//     className?: string;
// };
// export default function DrawerTest(rest: SideBarProps) {
//     const { children, isDrawerOpen, setIsDrawerOpen, className, ...props } =rest;


        

//     const drawerRef = useRef(null)
//     useEffect(() => {
//         if (!drawerRef.current) return;
//         const drawer:HTMLElement = drawerRef.current;
//         const isMouseDown = false;
//         let pos1 = 0;
//         let pos2 = 0;
//         let pos3 = 0;
//         let pos4 = 0;

//         const onMouseDown = (e) => {
//             e = e || window.event;
//             e.preventDefault();
//             // get the mouse cursor position at startup:
//             pos3 = e.clientX;
//             pos4 = e.clientY;
//             // document.onmouseup = closeDragElement;
//             // // call a function whenever the cursor moves:
//             // document.onmousemove = elementDrag;
//         };
//         const onMouseUp = () => {
//         };
//         const onMouseMove = (e:any) => {
//             e = e || window.event;
//             e.preventDefault();
//             // calculate the new cursor position:
//             pos1 = pos3 - e.clientX;
//             pos2 = pos4 - e.clientY;
//             pos3 = e.clientX;
//             pos4 = e.clientY;

//             // set the element's new position:
//             drawer.style.top = (drawer.offsetTop - pos2) + "px";
//             drawer.style.left = (drawer.offsetLeft - pos1) + "px";
//         }
//         drawer.addEventListener("mousemove", onMouseMove);
//         // clean up function
//     })
//     return (
//         <div>
//             <div
//                 ref={drawerRef}
//                 className={cn(
//                     `z-50 fixed bg-neutral-900 text-neutral-50 border border-neutral-50/20
//                  right-0 left-0 bottom-0 top-auto
//             `,
//                     className
//                 )}
//                 {...props}
//             >
//                 {children}
//             </div>
//             {isDrawerOpen ? (
//                 <div
//                     className={` fixed inset-0 bg-neutral-950/50 z-40`}
//                     // onClick={() => setIsDrawerOpen(false)}
//                 ></div>
//             ) : (
//                 ""
//             )}
//         </div>
//     );
// }

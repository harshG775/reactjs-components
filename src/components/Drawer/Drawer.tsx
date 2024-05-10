"use client";
import { cn } from "@/utils/cn";
type SideBarProps = {
    children: React.ReactNode;
    isDrawerOpen: boolean;
    setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
    className?: string;
    from: "left" | "right" | "top" | "bottom"| "bottomLeft" | "bottomRight" | "topLeft" | "topRight";
};
export default function Drawer(props: SideBarProps) {
    const {
        children,
        isDrawerOpen,
        setIsDrawerOpen,
        className,
        from = "left",
    } = props;
    const direction = {
        left: `
        ${isDrawerOpen ? "translate-x-0" : "-translate-x-full"}
        top-0 right-auto bottom-0 left-0
    `,
        right: `
        ${isDrawerOpen ? "-translate-x-0" : "translate-x-full"}
        top-0 right-0 bottom-0 left-auto
    `,
        top: `
        ${isDrawerOpen ? "translate-y-0" : "-translate-y-full"}
        top-0 right-0 bottom-auto left-0
    `,
        bottom: `
        ${isDrawerOpen ? "translate-y-0" : "translate-y-full"}
        top-auto right-0 bottom-0 left-0
    `,
        bottomLeft: `
        ${isDrawerOpen ? "translate-y-0 translate-x-0" : "translate-y-full -translate-x-full"}
        top-auto bottom-0 left-0  right-auto
    `,
    bottomRight: `
        ${isDrawerOpen ? "translate-y-0 translate-x-0" : "translate-y-full translate-x-full"}
        top-auto bottom-0 left-auto  right-0
    `,
    topLeft: `
        ${isDrawerOpen ? "translate-y-0 translate-x-0" : "-translate-y-full -translate-x-full"}
        top-0 bottom-auto left-0  right-auto
    `,
    topRight: `
        ${isDrawerOpen ? "translate-y-0 translate-x-0" : "-translate-y-full translate-x-full"}
        top-0 bottom-auto left-auto  right-0
    `,
    };

    return (
        <>
            <aside
                className={`
                ${cn(
                    "z-50 fixed transition bg-neutral-900 text-neutral-50",
                    className
                )}
                ${direction[from]}
            `}
            >
                {children}
            </aside>
            {isDrawerOpen?
            <div  className={` fixed inset-0 bg-neutral-950/50 z-40`} onClick={() => setIsDrawerOpen(false)}></div>
            :""}
        </>
    );
}





// function Example() {
//     const [isDrawerOpen, setIsDrawerOpen] = useState(false);
//     return (
//         <div>
//             <button
//                 type="button"
//                 onClick={() => setIsDrawerOpen(!isDrawerOpen)}
//             >
//                 trigger
//             </button>
//             <Drawer
//                 isDrawerOpen={isDrawerOpen}
//                 setIsDrawerOpen={setIsDrawerOpen}
//                 from="bottom"
//             >
//                 <div>test data</div>
//                 <div>test data</div>
//                 <div>test data</div>
//                 <div>test data</div>
//                 <div>test data</div>
//             </Drawer>
//         </div>
//     );
// }

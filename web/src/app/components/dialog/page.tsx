import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog/Dialog";

export default function DialogPage() {
    return (
        <main>
            <Dialog>
                <DialogTrigger>open</DialogTrigger>
                <DialogContent className="rounded-sm border-2 border-primary/20">
                    <div className="rounded-t-sm flex justify-between p-2  border-b-2 border-primary/20">
                        <h1 className="font-bold">Edit profile</h1>
                        <DialogTrigger className="text-sm">close</DialogTrigger>
                    </div>
                    <div className="p-2 ">
                        <p className="text-sm text-foreground/80 max-w-64">Make changes to your profile here. Click save when you{"'"}re done..</p>
                        <ul className="p-2 grid gap-4
                            [&>li]:max-w-64 [&>li]:grid [&>li]:grid-cols-2
                        ">
                            <li>
                                <label className="text-sm text-foreground/80 font-bold" htmlFor="name">Name</label>
                                <input className="outline outline-primary/50 rounded-sm" type="text" id="name"/>
                            </li>
                            <li>
                                <label className="text-sm text-foreground/80 font-bold" htmlFor="user-name">Username</label>
                                <input className="outline outline-primary/50 rounded-sm" type="text" id="user-name"/>
                            </li>
                            <li>
                                <div></div>
                                <button className="py-2 px-4 text-sm text-muted bg-primary font-bold rounded-md">Save changes</button>
                            </li>
                        </ul>
                    </div>
                </DialogContent>
            </Dialog>
            <div className="h-[200vh]"></div>
        </main>
    );
}

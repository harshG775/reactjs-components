import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/dialog/Dialog";

export default function DialogPage() {
    return (
        <main>
            <Dialog>
                <DialogTrigger>open</DialogTrigger>
                <DialogContent>
                    <DialogTrigger>close</DialogTrigger>
                    <div className="flex justify-end  p-2 border-t-2">
                        content
                    </div>
                </DialogContent>
            </Dialog>
            <div className="h-[200vh]"></div>
        </main>
    );
}

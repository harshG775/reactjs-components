"use client";
import React, {
    ReactNode,
    HtmlHTMLAttributes,
    createContext,
    useContext,
    useRef,
    useCallback,
} from "react";

/*
Dialog
**/
type DialogContextType = {
    toggleDialog: () => void;
    dialogRef: React.RefObject<HTMLDialogElement>;
};
const DialogContext = createContext<DialogContextType | null>(null);
export function Dialog({ children }: { children: ReactNode }) {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const toggleDialog = useCallback(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;
        if (dialog.open) {
            dialog.close();
        } else {
            dialog.showModal();
        }
    }, []);
    return (
        <DialogContext.Provider value={{ dialogRef, toggleDialog }}>
            {children}
        </DialogContext.Provider>
    );
}

export function useDialogContext() {
    return useContext(DialogContext);
}

/* 
DialogTrigger
**/
type DialogTriggerPropsType = HtmlHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
};
export function DialogTrigger({ children, ...rest }: DialogTriggerPropsType) {
    const { toggleDialog } = useDialogContext() ?? {};
    if (!toggleDialog) {
        throw new Error("DialogTrigger must be used within a Dialog component");
    }
    return (
        <button onClick={toggleDialog} {...rest}>
            {children}
        </button>
    );
}

/* 
DialogContent
**/
type DialogContentPropsType = HtmlHTMLAttributes<HTMLDialogElement> & {
    children: ReactNode;
};
export function DialogContent({ children, ...rest }: DialogContentPropsType) {
    const { dialogRef, toggleDialog } = useDialogContext() ?? {};
    if (!toggleDialog || !dialogRef) {
        throw new Error("DialogTrigger must be used within a Dialog component");
    }
    return (
        <dialog
            ref={dialogRef}
            {...rest}
            role="dialog"
            aria-modal="true"
            onClick={(e) => {
                e.stopPropagation();
                if (e.currentTarget === e.target && toggleDialog) {
                    toggleDialog();
                }
            }}
        >
            {children}
        </dialog>
    );
}

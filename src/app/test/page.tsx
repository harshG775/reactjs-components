import Button from "@/components/ui/Button";
import React from "react"
export default function page() {
    return (
        <div className="p-4 flex gap-4">
            <Button variant="primary">
                Sign up
            </Button>
            <Button variant="secondary">
                back
            </Button>
            <Button variant="danger">
                delete
            </Button>
            <Button variant="success">
                save
            </Button>
            <Button variant="warning">
                warning
            </Button>
        </div>
    );
}
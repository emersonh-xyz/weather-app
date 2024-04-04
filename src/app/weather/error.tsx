'use client';

import { Button } from "@nextui-org/react";

export default function Error() {
    return (
        <div className="h-screen flex flex-col items-center justify-center text-6xl gap-2">
            <h1>Something went terribly wrong 😭</h1>
            <Button className="animate-pulse" onClick={() => window.location.href = "/"}>Back to safety</Button>
        </div>
    )
}
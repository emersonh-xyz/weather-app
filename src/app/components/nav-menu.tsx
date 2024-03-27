'use client';

import { Input } from "@/components/ui/input";

export default function NavMenu() {
    return (
        <div className="flex items-start justify-between px-8 xl:px-64 sm:px-16 pt-5">
            <div>
                <Input placeholder="Enter a location" />
            </div>
            <h1 className="font-bold text-white text-2xl">Weather App</h1>
        </div>
    )
}
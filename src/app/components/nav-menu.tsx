'use client';

import { Input } from "@/components/ui/input";

export default function NavMenu() {
    return (
        <div className="flex items-start justify-between px-72 pt-5">
            <div>
                <Input placeholder="Enter a location" />
            </div>
            <h1 className="font-bold text-white text-2xl">Weather App</h1>
        </div>
    )
}
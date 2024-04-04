'use client'

import { useState } from "react";
import { Autocomplete, AutocompleteItem, Input } from "@nextui-org/react";
import OpenWeatherMap from "openweathermap-ts";
import { useRouter } from "next/navigation";

type FieldState = {
    selectedKey: React.Key | null;
    inputValue: string;
    locations: any[];
};

export default function SearchComponent() {

    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const router = useRouter();

    // search for location using the search term on openweather api
    const searchLocation = async (value: string) => {
        // split comma separated values
        const location = value.split(',')
        setCity(location[0])
        setState(location[1])

    }

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            router.push(`/weather?city=${city}&state=${state}`)
        }}>
            <Input classNames={{}} variant='faded' placeholder="Enter a location" className="w-[300px] border-b-blue-600" onChange={(e) => searchLocation(e.target.value)} />
            {city?.length > 0 && !state && <p className="mt-2 text-sm bg-slate-200 p-2 text-orange-400">Invalid input</p>}
        </form>

    )
}


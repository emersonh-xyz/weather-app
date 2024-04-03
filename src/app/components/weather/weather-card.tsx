'use client';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Sun } from "lucide-react";
import { useEffect, useState } from "react";
import OpenWeatherMap from 'openweathermap-ts';
import getWeatherByCity from "@/app/util/weather";
import { CurrentResponse } from "openweathermap-ts/dist/types";

export default function WeatherCard({ city, state }: { city: string, state: string }) {

    const [cityWeather, setCityWeather] = useState<CurrentResponse>();
    const [geoLocation, setGeoLocation] = useState<any>();

    const openWeather = new OpenWeatherMap({
        apiKey: '8cd1dcd8bb1f10d32c6b16980f7fcafb'
    });


    async function getWeatherByCity(city: string) {
        const data = await openWeather.getCurrentWeatherByCityName({
            cityName: city,
            state: 'north carolina'
        });
        console.log(data);
        return data;

    }


    useEffect(() => {

        getWeatherByCity(city).then(data =>
            setCityWeather(data)
        );

    }, [city])

    return (
        <Card className="h-full flex flex-col justify-center">
            <CardHeader className="items-center">
                <CardTitle className="text-xl">{cityWeather?.name}, {state}</CardTitle>
            </CardHeader>
            <CardContent className="items-start justify-center flex gap-10">
                <Sun className="w-20 h-20" />
                <div>
                    <h1 className="text-4xl font-bold">{cityWeather?.main.temp}</h1>
                    {cityWeather?.weather.map((weather) => {
                        return (
                            <h2 className="text-sm">{weather.icon}</h2>
                        )

                    })}
                    <h2 className="text-sm"></h2>
                </div>
            </CardContent>
            <CardFooter className="flex justify-between">
            </CardFooter>
        </Card>
    )
}
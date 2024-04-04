
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import OpenWeatherMap from 'openweathermap-ts';
import Image from "next/image";

export default async function WeatherCard({ city, state }: { city: string, state: string }) {

    const openWeather = new OpenWeatherMap({
        apiKey: '8cd1dcd8bb1f10d32c6b16980f7fcafb'
    });

    const cityWeather = await openWeather.getCurrentWeatherByCityName({
        cityName: city,
        state: state
    });

    console.log(cityWeather)

    const weather = cityWeather.weather[0]

    return (
        <Card className="h-full flex flex-col justify-center bg-blue-500 border-none drop-sahdow-md drop-shadow-md text-white animate-in transition-all">
            <CardHeader className="items-start">
                <CardTitle className="text-md animate-in font-medium">{cityWeather?.name}, {state}</CardTitle>
            </CardHeader>
            <CardContent className="items-start flex justify-start">
                <Image key={weather.id} className="antialiased" width={75} height={75} src={`http://openweathermap.org/img/wn/${weather.icon}.png`} alt={weather.description} />
                <div>
                    <h1 className="text-4xl font-bold">{Math.floor(cityWeather?.main.temp!)}°</h1>
                    <h2 className="text-md">{weather.description}</h2>
                </div>
            </CardContent>
        </Card>
    )
}
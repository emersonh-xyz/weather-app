import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Sun } from "lucide-react";



export default function WeatherCard({ location, temperature, rainChance }: { location: string, temperature: number, rainChance: number }) {
    return (
        <Card className="">
            <CardHeader className="items-center">
                <CardTitle className="text-3xl">{location}</CardTitle>
            </CardHeader>
            <CardContent className="items-start justify-between flex gap-10">
                <Sun className="w-20 h-20" />
                <div>
                    <h1 className="text-4xl font-bold">{temperature}</h1>
                    <h2 className="text-sm">{rainChance}% chance of rain</h2>
                </div>
            </CardContent>
            <CardFooter className="flex justify-between">
            </CardFooter>
        </Card>
    )
}
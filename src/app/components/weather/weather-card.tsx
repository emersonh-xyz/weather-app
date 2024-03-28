import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Sun } from "lucide-react";



export default function WeatherCard({ location, temperature, high, low }: { location: string, temperature: number, high: number, low: number }) {
    return (
        <Card className="h-full flex flex-col justify-center">
            <CardHeader className="items-center">
                <CardTitle className="text-3xl">{ location }</CardTitle>
            </CardHeader>
            <CardContent className="items-start justify-center flex gap-10">
                <Sun className="w-20 h-20" />
                <div>
                    <h1 className="text-4xl font-bold">{ temperature }°</h1>
                    <h2 className="text-sm">High: { high }</h2>
                    <h2 className="text-sm">Low: { low }</h2>
                </div>
            </CardContent>
            <CardFooter className="flex justify-between">
            </CardFooter>
        </Card>
    )
}
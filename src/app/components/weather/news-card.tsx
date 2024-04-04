import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import { LocateIcon } from "lucide-react";

export default function NewsCard({ data }: any) {

    const severityColor = (() => {
        switch (data.properties.severity) {
            case 'Minor':
                return 'text-green-500';
            case 'Moderate':
                return 'text-yellow-500';
            case 'Severe':
                return 'text-red-500';
            default:
                return 'text-gray-500';
        }
    })();

    // Rest of the code...


    return (
        <Card className="drop-shadow-md">
            <CardHeader>
                {data.properties.headline}
            </CardHeader>
            <CardContent>
                <div className="flex flex-col justify-between gap-1">
                    <p className="text-sm flex items-center gap-2 text-neutral-700 dark:text-neutral-400">{data.properties.areaDesc}</p>
                    <p className={`text-sm font-bold ${severityColor} `}>{data.properties.severity}</p>
                </div>
            </CardContent>
        </Card>
    )
}
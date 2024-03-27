import WeatherCard from "../components/weather/weather-card";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Details() {
  return (
    <div className="h-screen flex flex-col">
      <div className="grid grid-rows-2 pt-4 px-8 sm:px-16 xl:px-64 pb-2 gap-4 grid-cols-1 md:grid-cols-3">
        <div className="row-span-2">
          <WeatherCard location="London" temperature={20} rainChance={30}/>
        </div>
        <div className="md:col-span-2">
          <Card className="h-full p-2.5 flex flex-col">
            <p>Hourly Forecast</p>
            <div className="flex gap-2 overflow-scroll justify-between grow">
              <div className="forecast-item"><p>10 a.m.</p></div>
              <div className="forecast-item"><p>10 a.m.</p></div>
              <div className="forecast-item"><p>10 a.m.</p></div>
              <div className="forecast-item"><p>10 a.m.</p></div>
              <div className="forecast-item"><p>10 a.m.</p></div>
              <div className="forecast-item"><p>10 a.m.</p></div>
              <div className="forecast-item"><p>10 a.m.</p></div>
              <div className="forecast-item"><p>10 a.m.</p></div>
              <div className="forecast-item"><p>10 a.m.</p></div>
              <div className="forecast-item"><p>10 a.m.</p></div>
              <div className="forecast-item"><p>10 a.m.</p></div>
              <div className="forecast-item"><p>10 a.m.</p></div>
            </div>
          </Card>
        </div>
        <div className="md:col-span-2">
          <Card className="h-full p-2.5 flex flex-col">
            <p>Week Forecast</p>
            <div className="flex gap-2 overflow-scroll justify-between grow">
              <div className="forecast-item"><p>Wednesday</p></div>
              <div className="forecast-item"><p>Thursday</p></div>
              <div className="forecast-item"><p>Friday</p></div>
              <div className="forecast-item"><p>Saturday</p></div>
              <div className="forecast-item"><p>Sunday</p></div>
              <div className="forecast-item"><p>Monday</p></div>
              <div className="forecast-item"><p>Tuesday</p></div>
            </div>
          </Card>
        </div>
      </div>
      <div className="bg-[#5BB8EB] w-full grow">
        <div className="grid md:grid-cols-6 grid-cols-2 grid-rows-2 px-8 sm:px-16 xl:px-64 pt-2 gap-4">
          <Card className="col-span-2 p-2.5 details-card">
            <p>Hi</p>
          </Card>
          <Card className="details-card">
            <p>hi</p>
          </Card>
          <Card className="details-card">
            <p>hi</p>
          </Card>
          <Card className="details-card">
            <p>hi</p>
          </Card>
          <Card className="details-card">
            <p>hi</p>
          </Card>
          <Card className="col-span-2 details-card">
            <p>Hi</p>
          </Card>
          <Card className="details-card">
            <p>hi</p>
          </Card>
          <Card className="details-card">
            <p>hi</p>
          </Card>
          <Card className="details-card">
            <p>hi</p>
          </Card>
          <Card className="details-card">
            <p>hi</p>
          </Card>
        </div>
      </div>
    </div>
  )
}
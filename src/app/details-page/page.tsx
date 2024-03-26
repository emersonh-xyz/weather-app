import WeatherCard from "../components/weather/weather-card";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Details() {
  return (
    <div className="">
      <div className="grid grid-cols-3 grid-rows-2 pt-4 px-8">
        <div className="row-span-2">
          <WeatherCard location="London" temperature={20} rainChance={30} />
        </div>
        <div className="col-span-2">
          <Card>
            <p>Hourly Forecast</p>
            <div className="grid grid-cols-12 overflow-x-auto">
              <div></div>
            </div>
          </Card>
        </div>
        <div className="col-span-2">
          <Card>
            <p>Week Forecast</p>
            <div className="grid grid-cols-12">
              <div><p>10 a.m.</p></div>
              <div><p>10 a.m.</p></div>
              <div><p>10 a.m.</p></div>
              <div><p>10 a.m.</p></div>
              <div><p>10 a.m.</p></div>
              <div><p>10 a.m.</p></div>
              <div><p>10 a.m.</p></div>
              <div><p>10 a.m.</p></div>
              <div><p>10 a.m.</p></div>
              <div><p>10 a.m.</p></div>
              <div><p>10 a.m.</p></div>
              <div><p>10 a.m.</p></div>
            </div>
          </Card>
        </div>
      </div>
      <div className="bg-[#5BB8EB] w-full h-screen items-center flex">

      </div>
    </div>
  )
}
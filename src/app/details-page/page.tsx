import WeatherCard from "../components/weather/weather-card";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Details() {
  return (
    <div className="h-screen flex flex-col">
      <div className="grid grid-rows-3 md:grid-rows-2 pt-4 px-8 sm:px-16 xl:px-64 pb-2 gap-4 grid-cols-1 md:grid-cols-3">
        <div className="row-span-2">
          <WeatherCard location="London" temperature={20} high={24} low={16}/>
        </div>
        <div className="md:col-span-2">
          <Card className="h-full p-2.5 flex flex-col">
            <p>Hourly Forecast</p>
            <div className="flex gap-2 overflow-scroll overflow-y-hidden justify-between grow">
              <div className="forecast-item"><p>10 a.m.</p></div>
              <div className="forecast-item"><p>11 a.m.</p></div>
              <div className="forecast-item"><p>12 p.m.</p></div>
              <div className="forecast-item"><p>1 p.m.</p></div>
              <div className="forecast-item"><p>2 p.m.</p></div>
              <div className="forecast-item"><p>3 p.m.</p></div>
              <div className="forecast-item"><p>4 p.m.</p></div>
              <div className="forecast-item"><p>5 p.m.</p></div>
              <div className="forecast-item"><p>6 p.m.</p></div>
              <div className="forecast-item"><p>7 p.m.</p></div>
              <div className="forecast-item"><p>8 p.m.</p></div>
              <div className="forecast-item"><p>9 p.m.</p></div>
            </div>
          </Card>
        </div>
        <div className="md:col-span-2">
          <Card className="h-full p-2.5 flex flex-col">
            <p>Week Forecast</p>
            <div className="flex gap-2 overflow-scroll overflow-y-hidden justify-between grow">
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
        <div className="grid md:grid-cols-6 grid-cols-2 grid-rows-2 px-8 sm:px-16 xl:px-64 py-2 gap-4">
          <Card className="col-span-2 p-2.5 details-card">
            <p>Summary</p>
          </Card>
          <Card className="details-card">
            <p>Rain</p>
          </Card>
          <Card className="details-card">
            <p>Humidity</p>
          </Card>
          <Card className="details-card">
            <p>Clouds</p>
          </Card>
          <Card className="details-card">
            <p>Moon Phase</p>
          </Card>
          <Card className="col-span-2 details-card">
            <p>Sunrise and Sunset</p>
          </Card>
          <Card className="details-card">
            <p>Wind speed</p>
          </Card>
          <Card className="details-card">
            <p>Wind Direction</p>
          </Card>
          <Card className="details-card">
            <p>hi</p>
          </Card>
          <Card className="details-card">
            <p>UV Index</p>
          </Card>
        </div>
      </div>
    </div>
  )
}
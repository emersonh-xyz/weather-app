import { Sun,CloudSun,Cloudy,CloudDrizzle,CloudRain,CloudLightning,CloudFog,CloudSnow } from "lucide-react";

export default function DayPredictionElement({ weatherType, high, low, day }: { weatherType: string, high: number, low: number, day:string }) {
  const icons = {
    "clear sky":Sun,
    "few clouds":CloudSun,
    "scattered clouds":Cloudy,
    "broken clouds":Cloudy,
    "shower rain":CloudDrizzle,
    "rain":CloudRain,
    "thunderstorm":CloudLightning,
    "snow":CloudSnow,
    "mist":CloudFog
  };
  const WeatherIcon =  icons[weatherType];

  return (
    <>
    <div className="flex flex-col items-center w-[48px]">
      <p className="text-sm">{ day }</p>
      <WeatherIcon />
      <div className="flex">
        <p>{ high }°</p>
        <p>{ low }°</p>
      </div>
    </div>
    </>
  )
}
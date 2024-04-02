import { Sun,CloudSun,Cloudy,CloudDrizzle,CloudRain,CloudLightning,CloudFog,CloudSnow } from "lucide-react";

export default function HourPredictionElement({ weatherType, temperature, hour }: { weatherType: string, temperature: number, hour: number }) {
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
        <p className="text-sm">{ hour }</p>
        <WeatherIcon />
        <p>{ temperature }°</p>
      </div>
    </>
  )
}

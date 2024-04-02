import { Sun,CloudSun,Cloudy,CloudDrizzle,CloudRain,CloudLightning,CloudFog,CloudSnow } from "lucide-react";

export default function HourPredictionElement({ weatherType, temperature, hour }: { weatherType: string, temperature: number, hour: number }) {
  let weatherTypes = ["clear sky", "few clouds", "scattered clouds", "broken clouds", "shower rain", "rain", "thunderstorm", "snow", "mist"]
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
  }

  const getIcon(weatherName) => {
    return icons[weatherName];
  }

  return (
    <>
      <div>
        <p>{ hour }</p>
        <p>Icon</p>
        <p>{ temperature }°</p>
      </div>
    </>
  )
}

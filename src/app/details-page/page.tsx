import WeatherCard from "../components/weather/weather-card";

export default function Details() {
  return (
    <div>
      <WeatherCard location="London" temperature={20} rainChance={30} />
    </div>
  )
}
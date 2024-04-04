
import WeatherCard from "../components/weather/weather-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import OpenWeatherMap from "openweathermap-ts";
import Image from "next/image";
import { Button, Divider } from "@nextui-org/react";
import NewsCard from "../components/weather/news-card";
import { stat } from "fs";
import Link from "next/link";



export default async function Details({ searchParams }: { searchParams: { city: string, state: string } }) {

  console.log(searchParams)

  if (!searchParams.city || !searchParams.state) return (
    <div className="h-screen flex flex-col items-center justify-center text-6xl gap-2">
      <h1>No state or city found😭</h1>
      <Link href="/"><Button size="lg">Back to safety</Button></Link>
    </div>
  )

  const stateLabelValues = [
    { label: 'Alabama', value: 'AL' },
    { label: 'Alaska', value: 'AK' },
    { label: 'American Samoa', value: 'AS' },
    { label: 'Arizona', value: 'AZ' },
    { label: 'Arkansas', value: 'AR' },
    { label: 'California', value: 'CA' },
    { label: 'Colorado', value: 'CO' },
    { label: 'Connecticut', value: 'CT' },
    { label: 'Delaware', value: 'DE' },
    { label: 'District of Columbia', value: 'DC' },
    { label: 'Florida', value: 'FL' },
    { label: 'Georgia', value: 'GA' },
    { label: 'Guam', value: 'GU' },
    { label: 'Hawaii', value: 'HI' },
    { label: 'Idaho', value: 'ID' },
    { label: 'Illinois', value: 'IL' },
    { label: 'Indiana', value: 'IN' },
    { label: 'Iowa', value: 'IA' },
    { label: 'Kansas', value: 'KS' },
    { label: 'Kentucky', value: 'KY' },
    { label: 'Louisiana', value: 'LA' },
    { label: 'Maine', value: 'ME' },
    { label: 'Maryland', value: 'MD' },
    { label: 'Massachusetts', value: 'MA' },
    { label: 'Michigan', value: 'MI' },
    { label: 'Minnesota', value: 'MN' },
    { label: 'Mississippi', value: 'MS' },
    { label: 'Missouri', value: 'MO' },
    { label: 'Montana', value: 'MT' },
    { label: 'Nebraska', value: 'NE' },
    { label: 'Nevada', value: 'NV' },
    { label: 'New Hampshire', value: 'NH' },
    { label: 'New Jersey', value: 'NJ' },
    { label: 'New Mexico', value: 'NM' },
    { label: 'New York', value: 'NY' },
    { label: 'North Carolina', value: 'NC' },
    { label: 'North Dakota', value: 'ND' },
    { label: 'Ohio', value: 'OH' },
    { label: 'Oklahoma', value: 'OK' },
    { label: 'Oregon', value: 'OR' },
    { label: 'Pennsylvania', value: 'PA' },
    { label: 'Puerto Rico', value: 'PR' },
    { label: 'Rhode Island', value: 'RI' },
    { label: 'South Carolina', value: 'SC' },
    { label: 'South Dakota', value: 'SD' },
    { label: 'Tennessee', value: 'TN' },
    { label: 'Texas', value: 'TX' },
    { label: 'Utah', value: 'UT' },
    { label: 'Vermont', value: 'VT' },
    { label: 'Virgin Islands', value: 'VI' },
    { label: 'Virginia', value: 'VA' },
    { label: 'Washington', value: 'WA' },
    { label: 'West Virginia', value: 'WV' },
    { label: 'Wisconsin', value: 'WI' },
    { label: 'Wyoming', value: 'WY' },
  ];

  // get forecast using openweather api using fetch
  const weeklyForecastData = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchParams.city},${searchParams.state}&appid=${process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY}`)
  const weeklyForecast = await weeklyForecastData.json();


  const openWeather = new OpenWeatherMap({
    apiKey: '8cd1dcd8bb1f10d32c6b16980f7fcafb'
  });

  const cityWeather = await openWeather.getCurrentWeatherByCityName(
    {
      cityName: searchParams.city,
      state: searchParams.state
    }
  );


  const forecast = await openWeather.getThreeHourForecastByCityName({
    cityName: searchParams.city,
    state: searchParams.state
  })

  // remove spaces from the start if any and convert to lowercase
  searchParams.state = searchParams.state.trim().toLowerCase();
  const stateAbbreviation = stateLabelValues.find((state) => state.label.toLowerCase() === searchParams.state)?.value;

  searchParams.city = searchParams.city.charAt(0).toUpperCase() + searchParams.city.slice(1);

  const newsData = await fetch(`https://api.weather.gov/alerts/active?area=${stateAbbreviation}`)
  const news = await newsData.json();
  const weather = cityWeather?.weather[0];

  return (
    <div className="h-screen flex flex-col">
      <div className="grid grid-rows-3 md:grid-rows-2 pt-4 px-8 sm:px-16 xl:px-64 pb-2 gap-4 grid-cols-1 md:grid-cols-3 mb-2">
        <div className="row-span-2">
          <Card className="h-full flex flex-col items-start justify-center bg-[#3B82F6] border-none drop-sahdow-md drop-shadow-md text-white animate-in transition-all">
            <CardHeader className="">
              <CardTitle className="text-5xl animate-in font-medium">{searchParams.city}, {stateAbbreviation}</CardTitle>
            </CardHeader>
            <CardContent className="items-center flex justify-start gap-2">
              <Image key={weather.id} className="antialiased" width={100} height={100} src={`http://openweathermap.org/img/wn/${weather.icon}.png`} alt={weather.description} />
              <div>
                <h1 className="text-4xl font-bold">{Math.floor(cityWeather?.main.temp!)}°</h1>
                <h2 className="text-md">{weather.description}</h2>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="md:col-span-2 ">
          <Card className="p-3.5 flex flex-col bg-[#3B82F6] drop-shadow-md shadow-md border-none text-white text-lg justify-center ">
            <p className="text-2xl">3 Hour Forecast</p>
            <Divider className="mb-4 mt-2" />
            <div className="flex gap-8 overflow-scroll overflow-y-hidden items-start justify-start h-32">
              {forecast.list.map((day: any, idx: number) => {
                const weatherDay = new Date(day.dt * 1000).getDay();
                // get today's day;
                const today = new Date().getDay();
                // get todays day + 3 hours
                const todayPlus3Hours = new Date().getHours() + 3;
                console.log(todayPlus3Hours)

                if (weatherDay !== today && todayPlus3Hours <= 24) return;
                return (
                  <Card key={idx} className=" dark:text-white text-sm drop-shadow-md shadow-md  text-black bg-slate-300 dark:bg-card ">
                    <CardContent>
                      <div className="flex items-center gap-2">
                        <Image key={day.weather[0].id} className="antialiased w-12 h-12" width={75} height={75} src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`} alt={day.weather[0].description} />
                        <h2 className="text-xs truncate">{Math.floor(day.main.temp)}°</h2>
                      </div>
                      <h1 className="xs truncate">{day.weather[0].description.charAt(0).toUpperCase() + day.weather[0].description.slice(1)}</h1>
                      <h1 className="text-xs truncate">{new Date(day.dt * 1000).toLocaleTimeString()}</h1>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </Card>
        </div>
        <div className="md:col-span-2">
          <Card className="p-3.5 flex flex-col bg-[#3B82F6] drop-shadow-md shadow-md border-none text-white text-lg justify-center ">
            <p className="text-2xl">Week Forecast</p>
            <Divider className="mb-4 mt-2" />
            <div className="flex gap-8 overflow-scroll overflow-y-hidden items-start justify-start h-32">
              {forecast.list.map((day: any, idx: number) => {
                const dayOfWeek = new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' });
                // only show every 8th item...
                if (idx % 8 !== 0) return;

                return (
                  <Card key={idx} className="border-none dark:text-white text-black bg-slate-300 dark:bg-card">
                    <CardContent>
                      <div className="flex items-center gap-2">
                        <Image key={day.weather[0].id} className="antialiased w-12 h-12" width={75} height={75} src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`} alt={day.weather[0].description} />
                        <h2 className="text-xs truncate">{Math.floor(day.main.temp)}°</h2>
                      </div>
                      <h1 className="text-xs">{dayOfWeek}</h1>
                      <h2 className="text-xs truncate">{day.weather[0].description.charAt(0).toUpperCase() + day.weather[0].description.slice(1)}</h2>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </Card>
        </div>
      </div >
      <div className="bg-blue-600 w-full grow py-2 px-8 sm:px-16 xl:px-64 hero">
        <div className="mb-4">
          <Card className="dark:text-white text-black text-2xl font-medium p-2 items-center flex justify-center">🏙️ {searchParams.city} Weather</Card>
        </div>
        <div className="grid md:grid-cols-6 grid-cols-2 grid-rows-2  gap-4 ">
          <Card className="col-span-2 details-card">
            <p>☀️ Sunrise and Sunset</p>
            <p>{new Date(cityWeather.sys.sunrise * 1000).toLocaleString()}</p>
            <p>{new Date(cityWeather.sys.sunset * 1000).toLocaleString()}</p>
          </Card>
          <Card className="details-card">
            <p>🌧️ Rain</p>
            <p>{cityWeather.clouds.all}</p>
          </Card>
          <Card className="details-card">
            <p>😥 Humidity</p>
            <p>{cityWeather.main.humidity}</p>
          </Card>
          <Card className="details-card">
            <p>☁️ Clouds</p>
            <p>{cityWeather.clouds.all}</p>
          </Card>

          <Card className="details-card">
            <p>💨 Wind speed</p>
            <p>{cityWeather.wind.speed}mph</p>
          </Card>
          <Card className="details-card">
            <p>Wind Direction</p>
            <p>{cityWeather.wind.deg}°</p>
          </Card>

          <Card className="details-card">
            <p>🌡️ Pressure</p>
            <p>{cityWeather.main.pressure}</p>
          </Card>
        </div>

        <div className="mt-4">
          <Card className="text-white text-2xl font-medium p-2 items-center flex justify-center text-dark dark:text-white">⚠️ {news.title}</Card>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 mt-2">
            {news.features ? news.features?.map((news: any) => {
              return (
                <NewsCard data={news} />
              )
            }) :
              <div className="h-screen flex items-center justify-center text-4xl">News not found :(</div>
            }
          </div>
        </div>

      </div>
    </div >
  )
}
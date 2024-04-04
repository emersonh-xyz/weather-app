import { Card } from "@/components/ui/card";
import WeatherCard from "./components/weather/weather-card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import NewsCard from "./components/weather/news-card";
import Link from "next/link";

export default async function Home() {

  const cities = [
    // use random cities and states
    { city: "Charlotte", state: "North Carolina" },
    { city: "New York", state: "New York" },
    { city: "Los Angeles", state: "California" },
    { city: "Miami", state: "Florida" },
    { city: "Chicago", state: "Illinois" },
    { city: "Houston", state: "Texas" },
    { city: "Phoenix", state: "Arizona" },
    { city: "Philadelphia", state: "Pennsylvania" },
    { city: "San Antonio", state: "Texas" },
    { city: "San Diego", state: "California" },

  ]

  const newsData = await fetch('https://api.weather.gov/alerts/active?area=NC')
  const news = await newsData.json();

  return (
    <main className="flex flex-col items-start justify-between ">
      <section className="h-auto flex items-start container py-10 px-20 ">
        <Carousel opts={{
          align: "start",
        }}
          className="w-full p-2" >
          <CarouselContent >
            {cities.map((city) => {
              return (
                <CarouselItem className="lg:basis-1/5" key={city.city}>
                  <Link href={`/weather?city=${city.city}&state=${city.state}`}><WeatherCard city={city.city} state={city.state} /></Link>
                </CarouselItem>
              )
            })}
          </CarouselContent >
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
      <section className="bg-blue-600 w-full h-screen hero">
        <div className="px-8 sm:px-16 xl:px-64 py-2">
          <Card className="text-white text-2xl font-medium p-2 items-center flex justify-center text-dark dark:text-white">⚠️ {news.title}</Card>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {news.features?.map((news: any) => {
              return (
                <NewsCard data={news} />
              )
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

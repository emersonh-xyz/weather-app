import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Sun } from 'lucide-react'
import Image from "next/image";
import WeatherCard from "./components/weather/weather-card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col items-start justify-between ">
      <section className="h-auto flex items-start container py-10">

        <Carousel opts={{
          align: "start",
        }}
          className="w-full" >
          <CarouselContent >
            <CarouselItem className="lg:basis-1/4"><Link href="/details-page"><WeatherCard location="London" temperature={20} rainChance={30} /></Link> </CarouselItem >
            <CarouselItem className="lg:basis-1/4"><WeatherCard location="New York" temperature={25} rainChance={20} /></CarouselItem >
            <CarouselItem className="lg:basis-1/4"><WeatherCard location="Paris" temperature={30} rainChance={10} /></CarouselItem >
            <CarouselItem className="lg:basis-1/4"><WeatherCard location="Berlin" temperature={15} rainChance={40} /></CarouselItem >
            <CarouselItem className="lg:basis-1/4"><WeatherCard location="Tokyo" temperature={25} rainChance={20} /></CarouselItem >
          </CarouselContent >
          <CarouselPrevious />
          <CarouselNext />

        </Carousel>

      </section>
      <section className="bg-[#5BB8EB] w-full h-screen items-center flex">

      </section>
    </main>
  );
}

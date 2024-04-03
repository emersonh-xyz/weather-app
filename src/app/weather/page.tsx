'use client';

import WeatherCard from "../components/weather/weather-card";
import { Card } from "@/components/ui/card";
import HourPredictionElement from "../components/weather/hour-prediction-element";
import DayPredictionElement from "../components/weather/day-prediction";
import { useSearchParams } from 'next/navigation'
import { useEffect } from "react";



export default function Details() {

  const searchParams = useSearchParams();

  const city = searchParams.get('city');
  const state = searchParams.get('state');

  useEffect(() => {

  }, [])


  if (!city || !state) return (<div>City and State not found</div>)

  return (
    <div className="h-screen flex flex-col">
      <div className="grid grid-rows-3 md:grid-rows-2 pt-4 px-8 sm:px-16 xl:px-64 pb-2 gap-4 grid-cols-1 md:grid-cols-3">
        <div className="row-span-2">
          <WeatherCard city={city} state={state} />
        </div>
        <div className="md:col-span-2">
          <Card className="h-full p-2.5 flex flex-col">
            <p>Hourly Forecast</p>
            <div className="flex gap-2 overflow-scroll overflow-y-hidden justify-between grow">
              <HourPredictionElement weatherType={"clear sky"} temperature={30} hour={10} />
              <HourPredictionElement weatherType={"clear sky"} temperature={30} hour={10} />
              <HourPredictionElement weatherType={"clear sky"} temperature={30} hour={10} />
              <HourPredictionElement weatherType={"clear sky"} temperature={30} hour={10} />
              <HourPredictionElement weatherType={"clear sky"} temperature={30} hour={10} />
              <HourPredictionElement weatherType={"clear sky"} temperature={30} hour={10} />
              <HourPredictionElement weatherType={"clear sky"} temperature={30} hour={10} />
              <HourPredictionElement weatherType={"clear sky"} temperature={30} hour={10} />
              <HourPredictionElement weatherType={"clear sky"} temperature={30} hour={10} />
              <HourPredictionElement weatherType={"clear sky"} temperature={30} hour={10} />
              <HourPredictionElement weatherType={"clear sky"} temperature={30} hour={10} />
              <HourPredictionElement weatherType={"clear sky"} temperature={30} hour={10} />
            </div>
          </Card>
        </div>
        <div className="md:col-span-2">
          <Card className="h-full p-2.5 flex flex-col">
            <p>Week Forecast</p>
            <div className="flex gap-2 overflow-scroll overflow-y-hidden justify-between grow">
              <DayPredictionElement weatherType={"clear sky"} high={50} low={40} day={"Friday"} />
              <DayPredictionElement weatherType={"clear sky"} high={50} low={40} day={"Friday"} />
              <DayPredictionElement weatherType={"clear sky"} high={50} low={40} day={"Friday"} />
              <DayPredictionElement weatherType={"clear sky"} high={50} low={40} day={"Friday"} />
              <DayPredictionElement weatherType={"clear sky"} high={50} low={40} day={"Friday"} />
              <DayPredictionElement weatherType={"clear sky"} high={50} low={40} day={"Friday"} />
              <DayPredictionElement weatherType={"clear sky"} high={50} low={40} day={"Friday"} />
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
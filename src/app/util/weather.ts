import OpenWeatherMap from 'openweathermap-ts';

const openWeather = new OpenWeatherMap({
    apiKey: '8cd1dcd8bb1f10d32c6b16980f7fcafb'
});


export default async function getWeatherByCity(city: string) {
    const data = await openWeather.getCurrentWeatherByCityName({
        cityName: city
    });
    return data;
}
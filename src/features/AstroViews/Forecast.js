export default function Forecast({ forecast, astro }) {
  return (
    <div>
      <h2>Forecast</h2>
      <img src={forecast.condition.icon} alt="Forecast emoji"></img>
      <h3>
        {forecast.avgtemp_f.toFixed(0)}°F / {forecast.avgtemp_c.toFixed(0)}°C
      </h3>
      <h4>{forecast.condition.text}</h4>
      <ul>
        <li>Humidity: {forecast.avghumidity}%</li>
        <li>UV Index: {forecast.uv}</li>
        <li>Sunrise: {astro.sunrise}</li>
        <li>Sunset : {astro.sunset}</li>
      </ul>
    </div>
  );
}

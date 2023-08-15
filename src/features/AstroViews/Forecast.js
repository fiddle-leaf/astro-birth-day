export default function Forecast({ forecast, astro }) {
  return (
    <div className="forecast-day">
      <h3>Forecast</h3>
      <div className="desc">
        <figure className="icon">
          <img src={forecast.condition.icon} alt="Forecast emoji"></img>
        </figure>
        <div>
          <h4>
            {forecast.avgtemp_f.toFixed(0)}°F / {forecast.avgtemp_c.toFixed(0)}
            °C
          </h4>
          <h5>{forecast.condition.text}</h5>
        </div>
      </div>
      <ul>
        <li>Humidity: {forecast.avghumidity}%</li>
        <li>UV Index: {forecast.uv}</li>
        <li>Sunrise: {astro.sunrise}</li>
        <li>Sunset : {astro.sunset}</li>
      </ul>
    </div>
  );
}

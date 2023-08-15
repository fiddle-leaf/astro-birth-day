export default function ForecastView({ user }) {
  const birthday = new Date(user.birthday);

  return (
    <output>
      <h2 id="username">{user.name}</h2>
      <div id="location">
        <p>
          <strong>Birthday: </strong>
          {birthday.toLocaleString()}
        </p>
        <p>
          <strong>Location: </strong>
          {user.location}
        </p>
      </div>
      
      <div>
        <h2>Forecast</h2>
        <img src={user.forecast.condition.icon} alt="Forecast emoji"></img>
        <h3>
          {user.forecast.avgtemp_f.toFixed(0)}°F /{" "}
          {user.forecast.avgtemp_c.toFixed(0)}°C
        </h3>
        <h4>{user.forecast.condition.text}</h4>
        <ul>
          <li>Humidity: {user.forecast.avghumidity}%</li>
          <li>UV Index: {user.forecast.uv}</li>
          <li>Sunrise: {user.astro.sunrise}</li>
          <li>Sunset : {user.astro.sunset}</li>
        </ul>
      </div>
      <div>
        <h2>Moon Data</h2>
        <span>{user.moonphase.emoji}</span>
        <h3>{user.astro.moon_phase}</h3>
        <h4>{user.astro.moon_illumination}% Illumination</h4>
        <ul>
          <li>Moonrise: {user.astro.moonrise}</li>
          <li>Moonset: {user.astro.moonset}</li>
        </ul>
      </div>
    </output>
  );
}

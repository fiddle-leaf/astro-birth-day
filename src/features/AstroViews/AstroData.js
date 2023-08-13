import Forecast from "./Forecast";

const months = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function AstroData({ user }) {
  const name = user.user.name;
  const date = new Date(user.user.birthdate);
  //const birthday = user.user.birthdate;
  const forecast = user.data.forecast.forecastday[0];
  const astrology = forecast.astro;
  const dayForecast = forecast.day;
  const location = user.data.location;

  console.log(date.toDateString());

  return (
    <article className="astro-data">
      <p className="forecast">
        {date.toDateString()}
        <br />
        {date.toLocaleTimeString()}
        <br />
        Timezone: {location.tz_id}
      </p>
      <Forecast data={dayForecast} location={location} />
    </article>
  );
}

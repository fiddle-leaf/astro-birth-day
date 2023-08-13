export default function Forecast({ data, location }) {
  console.log(data.condition.icon);
  return (
    <div>
      <h3>Forecast</h3>
      <img src={data.condition.icon} alt="weather icon"></img>
      <h4>
        {Math.floor(data.avgtemp_f)}°F/{Math.floor(data.avgtemp_c)}°C
        <br /> <i>{data.condition.text}</i> <br />
        {location.name}, {location.region}, {location.country}
      </h4>
    </div>
  );
}

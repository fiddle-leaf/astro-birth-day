import "react-loading-skeleton/dist/skeleton.css";
import * as unicodeEmoji from "unicode-emoji";
import { selectInfo, setStatus } from "../info/infoSlice";
import { useSelector } from "react-redux";
import { useState } from "react";
import Forecast from "./Forecast";
import MoonData from "./MoonData";

const user = (state) => {
  return Object.assign({}, state);
};

export default function AstroView({ dispatch }) {
  const info = useSelector(selectInfo);
  const [users, setUsers] = useState([]);

  console.log(info);

  let moonEmoji = unicodeEmoji
    .getEmojisGroupedBy("category")
    ["animals-nature"].filter(({ keywords }) => {
      return keywords.includes("moon");
    });

  //extract data from info
  const newUser = user({
    name: info.user.name,
    location: `${info.data.location.name}, ${info.data.location.region}, ${info.data.location.country}`,
    coordinates: { lat: info.data.location.lat, lon: info.data.location.lon },
    birthday: info.user.birthdate,
    forecast: info.data.forecast.forecastday[0].day,
    astro: info.data.forecast.forecastday[0].astro,
  });

  let moonphase = moonEmoji.filter(({ description }) => {
    const moonphase = newUser.astro.moon_phase.toLowerCase();

    return description.includes(moonphase);
  });

  //console.log(location);

  newUser.moonphase = moonphase[0];

  console.log(newUser);

  return (
    <article>
      <output>
        <h2 id="username">{user.name}</h2>
        <div id="location">
          <p>
            <strong>Birthday: </strong>
            {Date(user.birthday).toLocaleString()}
          </p>
          <p>
            <strong>Location: </strong>
            {user.location}
          </p>
        </div>
        <div id="forecast">
          <Forecast forecast={user.forecast} astro={user.astro} />
          <MoonData astro={user.astro} moonphase={user.moonphase} />
        </div>
      </output>
    </article>
  );
}

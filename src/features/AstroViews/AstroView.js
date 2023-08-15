import "react-loading-skeleton/dist/skeleton.css";
import * as unicodeEmoji from "unicode-emoji";
import { selectInfo, setStatus } from "../info/infoSlice";
import { useSelector } from "react-redux";
//import { useState } from "react";
import Forecast from "./Forecast";
import MoonData from "./MoonData";

const user = (state) => {
  return Object.assign({}, state);
};

export default function AstroView({ dispatch }) {
  const info = useSelector(selectInfo);
  //const [users, setUsers] = useState([]);
  let birthday = new Date(info.user.birthdate);

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
    birthday: birthday,
    forecast: info.data.forecast.forecastday[0].day,
    astro: info.data.forecast.forecastday[0].astro,
  });

  let moonphase = moonEmoji.filter(({ description }) => {
    const moonphase = newUser.astro.moon_phase.toLowerCase();

    return description.includes(moonphase);
  });

  //console.log(location);

  newUser.moonphase = moonphase[0];

  return (
    <article>
      <output>
        <h2 className="username">{newUser.name}</h2>
        <div className="user-info">
          <div className="birthday">
            <h5>Birthday</h5>
            {newUser.birthday.toLocaleString()}
          </div>
          <div className="location">
            <h5>Location</h5>
            {newUser.location}
          </div>
        </div>
        <button type="reset" onClick={() => dispatch(setStatus("idle"))}>
          Reset
        </button>
        <div className="forecast">
          <Forecast forecast={newUser.forecast} astro={newUser.astro} />
          <MoonData astro={newUser.astro} moonphase={newUser.moonphase} />
        </div>
      </output>
    </article>
  );
}

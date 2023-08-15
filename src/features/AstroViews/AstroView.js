import "react-loading-skeleton/dist/skeleton.css";
import * as unicodeEmoji from "unicode-emoji";
import Emoji from "./Emoji";
import { selectInfo, setStatus } from "../info/infoSlice";
import { useSelector } from "react-redux";
import ForecastView from "./ForecastView";
import { useState } from "react";

const user = (state) => {
  return Object.assign({}, state);
};

export default function AstroView({ dispatch }) {
  const info = useSelector(selectInfo);
  const [users, setUsers] = useState([]);

  let moonEmoji = unicodeEmoji
    .getEmojisGroupedBy("category")
    ["animals-nature"].filter(({ keywords }) => {
      return keywords.includes("moon");
    });

  //extract data from info
  const newUser = user({
    name: info.user.name,
    location: `${info.data.location.name}, ${info.data.location.region}, ${info.data.location.country}`,
    birthday: info.user.birthdate,
    forecast: info.data.forecast.forecastday[0].day,
    astro: info.data.forecast.forecastday[0].astro,
  });

  let moonphase = moonEmoji.filter(({ description }) => {
    const moonphase = newUser.astro.moon_phase.toLowerCase();

    return description.includes(moonphase);
  });

  //console.log(location);

  moonphase = moonphase[0];

  return (
    <article>
      <ForecastView />
      <div>
        <button type="reset" onClick={() => dispatch(setStatus("idle"))}>
          Reset
        </button>
      </div>
    </article>
  );
}

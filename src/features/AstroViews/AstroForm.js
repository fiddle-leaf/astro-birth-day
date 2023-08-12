import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function AstroForm({ info, setInfo, location }) {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    name: "Matthew",
    birthdate: "01-13-2023",
    location: "Salt Lake City, UT",
  });

  //console.log(data, info);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    const dataList = Object.keys(data);

    for (let item of dataList) {
      item === "location" || item === "birthdate"
        ? dispatch(location(data))
        : dispatch(setInfo(data));
    }
  };

  return (
    <article>
      <form class="astro-form">
        <div>
          <label>Enter name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            value={data.name}
            placeholder="Naar Selene"
          ></input>
        </div>
        <div>
          <label>Birth Date and Time</label>
          <input
            type="datetime-local"
            name="birthdate"
            id="birthdate"
            onChange={handleChange}
            value={data.birthdate}
          ></input>
        </div>
        <div>
          <label>Birth Location</label>
          <input
            type="text"
            name="location"
            id="location"
            onChange={handleChange}
            value={data.location}
            placeholder="City, State, Country"
          ></input>
        </div>
        <div id="buttons">
          <button type="button" onClick={handleClick}>
            Enter
          </button>
          <button type="reset">Reset</button>
        </div>
      </form>
    </article>
  );
}

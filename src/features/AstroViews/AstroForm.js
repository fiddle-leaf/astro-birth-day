import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function AstroForm({ setInfo, location, dispatch }) {
  const [data, setData] = useState({
    name: "",
    birthdate: "",
    location: "",
  });

  //console.log(data);

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
      <form className="astro-form">
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
          <label>Enter Birth Date and Time</label>
          <input
            type="datetime-local"
            name="birthdate"
            id="birthdate"
            onChange={handleChange}
            value={data.birthdate}
          ></input>
        </div>
        <div>
          <label>Enter Birth Location</label>
          <input
            type="text"
            name="location"
            id="location"
            onChange={handleChange}
            value={data.location}
            placeholder="City, State, or Country"
          ></input>
        </div>
        <span className="buttons">
          <button type="button" onClick={handleClick}>
            Enter
          </button>
          <button
            type="reset"
            onClick={() => setData({ name: "", birthdate: "", location: "" })}
          >
            Reset
          </button>
        </span>
      </form>
    </article>
  );
}

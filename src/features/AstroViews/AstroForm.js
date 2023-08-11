import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function AstroForm({ info, setInfo, location }) {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    name: "",
    birthdate: "",
    location: "",
  });

  console.log(data, info);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    const dataList = Object.keys(data);

    for (let item of dataList) {
      switch (item) {
        case "location":
        case "birthdate":
          dispatch(location(data));
          break;

        default:
          dispatch(setInfo(data));
      }
    }
  };

  return (
    <article>
      <form id="astro-form">
        <div>
          <label>Enter name:</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            value={data.name}
          ></input>
        </div>
        <div>
          <label>Birth Date and Time:</label>
          <input
            type="datetime-local"
            name="birthdate"
            id="birthdate"
            onChange={handleChange}
            value={data.birthdate}
          ></input>
        </div>
        <div>
          <label>Birth Location:</label>
          <input
            type="text"
            name="location"
            id="location"
            onChange={handleChange}
            value={data.location}
          ></input>
        </div>
        <button type="button" onClick={handleClick}>
          Enter
        </button>
      </form>
    </article>
  );
}

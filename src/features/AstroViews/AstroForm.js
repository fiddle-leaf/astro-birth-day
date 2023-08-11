import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function AstroForm ({info, setInfo, location, moon}) {
    const dispatch = useDispatch();
    const [data, setData] = useState({
        name: "",
        birthdate: "",
        location: ""
    })

    console.log(data, info);

    const handleChange = e => {
        setData(
            {...data,
            [e.target.name]: e.target.value}
        )
    }

    const handleClick = () => {
        const dataList = Object.keys(data);

        for (let item of dataList){
            switch (item) {
                case "name":
                    dispatch(setInfo(data));
                    break;
                
                case "location":
                    dispatch(location(data));
                    break;

                case "birthdate":
                    dispatch(moon(data));
                    break;
                
                default:
                    dispatch(setInfo(data))
                    break;
            }
        }

    }

    return ( 
        <article>
            <form id="astro-form">
                <div>
                    <label>
                        Enter name:
                    </label>
                    <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={handleChange}
                    value={data.name}></input>
                </div>
                <div>
                    <label>
                        Birth Date and Time:
                    </label>
                    <input
                    type="datetime-local"
                    name="birthdate"
                    id="birthdate"
                    onChange={handleChange}
                    value={data.birthdate}></input>
                </div>
                <div>
                    <label>
                        Birth Location:
                    </label>
                    <input
                    type="text"
                    name="location"
                    id="location"
                    onChange={handleChange}
                    value={data.location}></input>
                </div>
                <button 
                    type="button"
                    onClick={handleClick}>
                        Enter
                    </button>
            </form>
        </article>
     );
}
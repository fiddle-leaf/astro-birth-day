import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setInfo,
  selectUserInfo,
  dataAsync
} from '../features/astroSlice.js'

import AstroView from "./AstroView";

export default function AstroForm() {
  const userInfo = useSelector(selectUserInfo);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({})

  console.log(userInfo.userInfo, userData);

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value})
    };

    const handleClick = (e) => {
      e.preventDefault();
      dispatch(setInfo(userData));
    }

    return (
        <form>
          <div>
            <span>
              <label for="name">
                Enter name:
              </label>
              <input
                name="name"
                placeholder="Jane Doe"
                onChange={handleChange} />
            </span>
          </div>
            <div>
              <span>
                <label for="birthday">Enter date and time:</label>
              </span>
              <span>
                <input 
                  type="datetime-local"
                  name="birthday"
                  onChange={handleChange}></input>
              </span>
              <span>
                <label for="location">
                  Birth Location:
                </label>
                <input
                  name="location"
                  placeholder="City, State"
                  onChange={handleChange}>
                </input>
              </span>
            </div>
            <div>
              <input 
                type="submit" 
                value="enter"
                onClick={handleClick} />
            </div>
            <AstroView user={userInfo} />
        </form>
      );
}
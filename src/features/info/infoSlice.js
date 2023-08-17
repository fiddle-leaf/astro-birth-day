import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  data: {},
  status: "idle", //finite states
};

const today = new Date();

//API future request accepts date 14-300 days from today
const two_weeks_date = new Date();
two_weeks_date.setDate(today.getDate() + 14);
let two_weeks = new Date(two_weeks_date);
console.log(two_weeks_date);

//location Async from input

//moonphase Async from birthdate
export const locationAsync = createAsyncThunk(
  "info/fetchLocation",
  async (info) => {
    const location = info.location.split(",").join("%20");
    const birthday = info.birthdate.split("T")[0];
    const datetime = new Date(info.birthdate);

    let time =
      datetime > two_weeks
        ? "future"
        : datetime < two_weeks && datetime > today
        ? "forecast"
        : "history";

    console.log(time, today, two_weeks, datetime);

    const apiKey = "61cbd6e17eaa421db1f62842231108";

    const url = `https://api.weatherapi.com/v1/${time}.json?&key=${apiKey}&q=${location}&dt=${birthday}`;

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "61cbd6e17eaa421db1f62842231108",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };

    const response = await fetch(url, options);

    const data = await response.json();

    return data;
  }
);

export const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    setInfo: (state, action) => {
      state.user = action.payload;
    },
    setStatus: (state) => {
      state.status = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(locationAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(locationAsync.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(locationAsync.rejected, (state, action) => {
        state.status = "error";
      });
  },
});

export const { setInfo, setStatus } = infoSlice.actions;

export const selectInfo = (state) => state.info;

export default infoSlice.reducer;

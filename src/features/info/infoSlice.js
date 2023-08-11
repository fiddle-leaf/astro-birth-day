import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchLocation } from "./infoAPI";

const initialState = {
  user: {},
  data: {},
  status: "idle", //finite states
};

//location Async from input

//moonphase Async from birthdate
export const locationAsync = createAsyncThunk(
  "info/fetchLocation",
  async (info) => {
    const location = info.location.split(",").join("%20");
    const datetime = info.birthdate.split("T");
    console.log(datetime);
    const apiKey = "61cbd6e17eaa421db1f62842231108";

    const url = `https://api.weatherapi.com/v1/astronomy.json?&key=${apiKey}&q=${location}&dt=${datetime[0]}`;

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
      state.info = action.payload;
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

export const { setInfo } = infoSlice.actions;

export const selectInfo = (state) => state.info;

export default infoSlice.reducer;

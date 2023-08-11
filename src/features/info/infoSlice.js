import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchLocation } from "./infoAPI";

const initialState = {
    data: {},
    status: 'idle', //finite states
    error: '' | null
}

//location Async from input
export const locationAsync = createAsyncThunk(
    'info/fetchLocation',
    async (info) => {
        const url = fetchLocation(info.location);
        //console.log(url);

        const options = {
            method: 'GET',
          };

        const response = await fetch(url, options);
        
        const data = await response.json();
        return data.features[0].properties;
    }
);

//moonphase Async from birthdate
export const moonAsync = createAsyncThunk(
    'info/fetchMoon',
    async (info) => {
        const datetime = info.birthdate.split("T")
        console.log(datetime);
        const url = 'https://astronomy.p.rapidapi.com/api/v2/studio/moon-phase';
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': '8de5a0a3acmsh7e90d1dac7df58dp1098dejsn79112c5240e0',
                'X-RapidAPI-Host': 'astronomy.p.rapidapi.com'
            },
            body: {
                format: 'png',
                observer: {
                    date: '2020-11-01',
                    latitude: 6.56774,
                    longitude: 79.88956
                },
                style: {
                    backgroundColor: 'red',
                    backgroundStyle: 'stars',
                    headingColor: 'white',
                    moonStyle: 'sketch',
                    textColor: 'red'
                },
                view: {
                    type: 'portrait-simple'
                }
            }
        }

        const response = await fetch(url, options);
        
        const data = await response.json();
        console.log(data);
    }
);

export const infoSlice = createSlice({
    name: 'info',
    initialState,
    reducers: {
        setInfo: (state, action) => {
            state.data = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(locationAsync.pending, (state) => {
            state.status = 'loading';
            })
        .addCase(locationAsync.fulfilled, (state, action) => {
            state.status = 'success';
            state.data.location = action.payload;
        })
        .addCase(locationAsync.rejected, (state, action) => {
            state.status = 'error';
        });
    },
})

export const { setInfo } = infoSlice.actions;

export const selectData = (state) => state.info.data;

export const selectStatus = (state) => state.info.status;

export default infoSlice.reducer;
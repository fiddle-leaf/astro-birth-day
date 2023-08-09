import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
	userInfo: {}, 		//objs with userInfo properties for fetching API data
	status: 'idle'		// || 'loading', 'success', 'error'
}

/**
 * ASTROLOGER API Url & Options
 */

const url = 'https://astrologer.p.rapidapi.com/api/v3/birth-chart';

const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': '8260a3bfacmsh24be7a1b18bf1aap152171jsndb9a3c4dd648',
		'X-RapidAPI-Host': 'astrologer.p.rapidapi.com'
	},
	body: {
		name: 'Test',
		year: 2000,
		month: 10,
		day: 10,
		hour: 10,
		minute: 10,
		longitude: 45,
		latitude: 45,
		city: 'Roma',
		timezone: 'Europe/Rome',
		language: 'IT'
	}
};

export const dataAsync = createAsyncThunk(
	'astroData/fetchData',
	async () => {
		const response = await fetch(url, options);
		return response.data;
	}
);

export const dataSlice = createSlice({
	name: 'astroData',
	initialState,
	reducers: {
		setInfo: (state, action) => {
			state.userInfo = action.payload
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(dataAsync.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(dataAsync.fulfilled,
				(state, action) => {
					state.status = 'success';
					state.userInfo = action.payload
				})
	}
});

export const { setInfo } = dataSlice.actions;

export const selectUserInfo = (state) => state.astroData

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

export default dataSlice.reducer;

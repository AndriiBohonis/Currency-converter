import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Api } from '../API'
import { IResponse } from '../Type'

export const getCurrency = createAsyncThunk<IResponse[], unknown, { rejectValue: string }>(
	'getCurrency',
	async function (_, { rejectWithValue }) {
		const response = await Api.getExchangeRate()
		if (!response.data) {
			rejectWithValue('')
		}

		return response.data
	}
)

const initialState = {
	request: [] as IResponse[],
	loading: false,
	error: '' as string | undefined,
}

const exchangeSlice = createSlice({
	name: 'exchange',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(getCurrency.pending, state => {
				state.loading = true
			})
			.addCase(getCurrency.fulfilled, (state, action) => {
				state.loading = false
				state.request = action.payload?.filter(
					item => item.cc === 'USD' || item.cc === 'EUR' || item.cc === 'GBP' || item.cc === 'PLN'
				)
			})
			.addCase(getCurrency.rejected, (state, action) => {
				state.loading = false
				state.error = action.error.message
			})
	},
})
export default exchangeSlice.reducer

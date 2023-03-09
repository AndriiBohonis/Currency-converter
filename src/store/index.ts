import { configureStore } from '@reduxjs/toolkit'
import exchangeSlice from './exchangeRateSlice'
export const store = configureStore({
	reducer: {
		currency: exchangeSlice,
	},
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

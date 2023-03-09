import { useEffect, useRef, useState } from 'react'
import { useAppDispatch } from '../hook'
import { getCurrency } from '../store/exchangeRateSlice'
import { Currency } from './Currency'

import '../App.css'

const App = () => {
	const dispatch = useAppDispatch()
	const [valueFrom, setValueFrom] = useState<number>(0)
	const [valueTo, setValueTo] = useState<number>(0)
	const [currencyTo, setCurrencyTo] = useState(1)
	const [currencyFrom, setCurrencyFrom] = useState(1)
	const inputRef = useRef<HTMLInputElement>()

	useEffect(() => {
		dispatch(getCurrency(''))
		if (inputRef.current) {
			inputRef.current?.focus()
		}
	}, [])

	useEffect(() => {
		if (valueFrom) onChangeValueFrom(valueFrom)
	}, [currencyFrom])

	useEffect(() => {
		if (valueTo) onChangeValueTo(valueTo)
	}, [currencyTo])

	const onChangeCurrencyFrom = (value: number) => {
		setCurrencyFrom(value)
	}
	const onChangeCurrencyTo = (value: number) => {
		setCurrencyTo(value)
	}

	const onChangeValueFrom = (value: number) => {
		setValueFrom(value)
		const crossCurs = currencyFrom / currencyTo
		setValueTo(crossCurs * value)
	}
	const onChangeValueTo = (value: number) => {
		const crossCurs = currencyTo / currencyFrom
		setValueTo(value)
		setValueFrom(crossCurs * value)
	}

	return (
		<section className='app'>
			<Currency
				title='В мене є'
				value={valueFrom}
				onChangeValue={onChangeValueFrom}
				onChangeCurrency={onChangeCurrencyFrom}
				inputRef={inputRef}
			/>
			<Currency
				title='Я отримаю'
				value={valueTo}
				onChangeValue={onChangeValueTo}
				onChangeCurrency={onChangeCurrencyTo}
			/>
		</section>
	)
}

export default App

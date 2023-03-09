import { FC } from 'react'
import { useAppSelector } from '../hook'
interface ICurrency {
	onChangeValue: (num: number) => void
	value: number
	onChangeCurrency: (num: number) => void
	title: string
	inputRef?: any
}
export const Currency: FC<ICurrency> = ({
	onChangeValue,
	value,
	onChangeCurrency,
	title,
	inputRef,
}) => {
	const { request, error } = useAppSelector(state => state.currency)
	if (error) {
		console.log(alert)
		alert(error)
	}
	return (
		<section className='section_block'>
			<h2 className='title'>{title}</h2>
			<div className='calculate_block'>
				<input
					className='input'
					onChange={e => onChangeValue(+e.target.value)}
					value={+value.toFixed(2)}
					type='number'
					ref={inputRef}
				/>
				<select className='select' onChange={e => onChangeCurrency(+e.target.value)}>
					<option value={1}>UA</option>
					{request.map(i => (
						<option key={i.r030} value={i.rate}>
							{i.cc}
						</option>
					))}
				</select>
			</div>
		</section>
	)
}

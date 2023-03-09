import axios from 'axios'
import { IResponse } from '../Type'

export const Api = {
	getExchangeRate() {
		return axios.get<IResponse[]>(
			'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json?'
		)
	},
}

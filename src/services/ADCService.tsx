import { ADCRequest, ADCResponse } from './../models/index';
export class ADCService {
	private static url = '/datacloud/snapshot/rest/v2/select';

	public static sendRequest(request: ADCRequest): Promise<ADCResponse> {
		const searchParams = (() => {
			const temp: string[] = [];
			Object.keys(request).forEach(key => temp.push([encodeURIComponent(key), encodeURIComponent(request[key])].join('=')));
			return temp.join('&');
		})();
		return fetch(this.url, {
			headers: {
				Accept: 'application/json, text/plain, */*',
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			credentials: 'same-origin',
			method: 'POST',
			body: searchParams
		}).then(data => data.json());
	}
}

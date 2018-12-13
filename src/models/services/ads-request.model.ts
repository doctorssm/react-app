// import { Company, Data, Languages } from '../index';
import { Languages } from '../core';

export class ADCRequest {
	[key: string]: string;
	constructor(public formula: string, public identifiers: string, public output: string, public lang: string = Languages.EN, public productId: string = 'TRFVIEWS:CPVIEWS') { }
}

// export interface IDataService {
// 	getAsReported(company: Company, query: string[]): Promise<{ data: Data[], height: number }>;
// 	getStandardized(company: Company, query: string[]): Promise<{ data: Data[], height: number }>;
// }

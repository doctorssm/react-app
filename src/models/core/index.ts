export enum Languages {
	EN = 'en-US',
	JA = 'ja-JP',
	ZH = 'zh-CN',
	RU = 'ru-RU',
	KO = 'ko-KR'
}

export type ADCResponse = {
	r: {
		r?: string;
		v?: string;
		t?: string;
		h?: string;
	}[][];
};

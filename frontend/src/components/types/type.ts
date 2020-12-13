export interface IUsers {
	advances: number;
	data: any;
	declines: number;
	latestData: any;
	time: string;
	trdValueSum: string;
	trdValueSumMil: string;
	trdVolumesum: string;
	trdVolumesumMil: string;
	unchanged: number;
}

export interface IStock {
	cAct: string;
	dayEndClose: string;
	high: string;
	iislPercChange: string;
	iislPtsChange: string;
	low: string;
	ltP: string;
	mPC: string;
	mVal: string;
	ntP: string;
	open: string;
	per: string;
	previousClose: string;
	ptsC: string;
	symbol: string;
	trdVol: string;
	trdVolM: string;
	wkhi: string;
	wkhicm_adj: string;
	wklo: string;
	wklocm_adj: string;
	xDt: string;
	yPC: string;
}
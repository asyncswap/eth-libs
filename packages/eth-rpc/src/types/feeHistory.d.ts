declare global {
	// misc
	export interface FeeHistoryResults {
		oldestBlock: Uint;
		baseFeePerGas: Uint[];
		baseFeePerBlobGas?: Uint[];
		gasUsedRatio: Ratio[];
		blobGasUsedRatio?: Ratio[];
		reward?: Uint[][];
	}
	export interface AccessListResult {
		accessList?: AccessListEntry[];
		error?: string;
		gasUsed?: Uint;
	}
}

export { };

declare global {
	export type DebugMethods = {
		debug_getRawHeader: { params: [BlockNumberOrTag]; result: Bytes };
		debug_getRawBlock: { params: [BlockNumberOrTag]; result: Bytes };
		debug_getRawTransaction: { params: [Hash32]; result: Bytes };
		debug_getRawReceipts: { params: [BlockNumberOrTag]; result: Bytes[] };
		debug_getBadBlocks: { params: []; result: BadBlock[] };
	};
}

export { };

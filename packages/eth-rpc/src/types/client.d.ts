declare global {
	// client.yaml
	export type SyncingStatus = Syncing | false;
	export interface Syncing {
		startingBlock?: Uint;
		currentBlock?: Uint;
		highestBlock?: Uint;
	}
}

export { };

declare global {
	// engine types
	export interface TransitionConfigurationV1 {
		terminalTotalDifficulty: Uint256;
		terminalBlockHash: Hash32;
		terminalBlockNumber: Uint64;
	}
}

export { };

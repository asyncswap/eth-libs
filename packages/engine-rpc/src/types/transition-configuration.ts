import type { Hash32, Uint64, Uint256 } from "@asyncswap/types";
// engine types
export interface TransitionConfigurationV1 {
	terminalTotalDifficulty: Uint256;
	terminalBlockHash: Hash32;
	terminalBlockNumber: Uint64;
}

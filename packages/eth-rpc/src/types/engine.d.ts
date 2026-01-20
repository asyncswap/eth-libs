declare global {
	// engine types
	export interface TransitionConfigurationV1 {
		terminalTotalDifficulty: Uint256;
		terminalBlockHash: Hash32;
		terminalBlockNumber: Uint64;
	}
	export enum PAYLOAD_STATUS {
		VALID = "VALID",
		INVALID = "INVALID",
		SYNCING = "SYNCING",
		ACCEPTED = "ACCEPTED",
		INVALID_BLOCK_HASH = "INVALID_BLOCK_HASH",
	}
	export interface PayloadStatusV1 {
		status: PAYLOAD_STATUS;
		latestValidHash?: Hash32;
		validationError?: string;
	}
	export interface RestrictedPayloadStatusV1 {
		status:
		| PAYLOAD_STATUS.VALID
		| PAYLOAD_STATUS.INVALID
		| PAYLOAD_STATUS.SYNCING;
		latestValidHash: Hash32;
		validationError: string;
	}
	export interface PayloadStatusNoInvalidBlockHash {
		status: Exclude<PAYLOAD_STATUS, PAYLOAD_STATUS.INVALID_BLOCK_HASH>;
		latestValidHash: Hash32;
		validationError: string;
	}
	export interface ExecutionPayloadV1 {
		parentHash: Hash32;
		feeRecipient: Address;
		stateRoot: Hash32;
		receiptsRoot: Hash32;
		logsBloom: Bytes256;
		prevRandao: Bytes32;
		blockNumber: Uint64;
		gasLimit: Uint64;
		gasUsed: Uint64;
		timestamp: Uint64;
		extraData: Bytes32;
		baseFeePerGas: Uint64;
		blockHash: Hash32;
		transactions: Bytes[];
	}
	export interface WithdrawalV1 {
		index: Uint64;
		validatorIndex: Uint64;
		address: Address;
		amount: Uint64;
	}
	export interface ExecutionPayloadV2 {
		parentHash: Hash32;
		feeRecipient: Address;
		stateRoot: Hash32;
		receiptsRoot: Hash32;
		logsBloom: Bytes256;
		prevRandao: Bytes32;
		blockNumber: Uint64;
		gasLimit: Uint64;
		gasUsed: Uint64;
		timestamp: Uint64;
		extraData: Bytes32;
		baseFeePerGas: Uint64;
		blockHash: Hash32;
		transactions: Bytes[];
		withdrawals: WithdrawalV1[];
	}
	export interface ExecutionPayloadV3 {
		parentHash: Hash32;
		feeRecipient: Address;
		stateRoot: Hash32;
		receiptsRoot: Hash32;
		logsBloom: Bytes256;
		prevRandao: Bytes32;
		blockNumber: Uint64;
		gasLimit: Uint64;
		gasUsed: Uint64;
		timestamp: Uint64;
		extraData: Bytes32;
		baseFeePerGas: Uint64;
		blockHash: Hash32;
		transactions: Bytes[];
		withdrawals: WithdrawalV1[];
		blobGasUsed: Uint64;
		excessBlobGas: Uint64;
	}
	export interface ExecutionPayloadV4 {
		parentHash: Hash32;
		feeRecipient: Address;
		stateRoot: Hash32;
		receiptsRoot: Hash32;
		logsBloom: Bytes256;
		prevRandao: Bytes32;
		blockNumber: Uint64;
		gasLimit: Uint64;
		gasUsed: Uint64;
		timestamp: Uint64;
		extraData: Bytes32;
		baseFeePerGas: Uint64;
		blockHash: Hash32;
		transactions: Bytes[];
		withdrawals: WithdrawalV1[];
		blobGasUsed: Uint64;
		excessBlobGas: Uint64;
		blockAccessList: Bytes;
	}
	export interface ExecutionPayloadBodyV1 {
		transactions: Bytes[];
		withdrawals?: WithdrawalV1[];
	}
	export interface BlobsBundleV1 {
		commitments: Bytes48[];
		proofs: Bytes48[];
		blobs: Bytes[];
	}
	export interface BlobsBundleV2 {
		commitments: Bytes48[];
		proofs: Bytes48[];
		blobs: Bytes[];
	}
}

export { };

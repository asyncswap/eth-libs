declare global {
	// forkchoice
	export interface ForkchoiceStateV1 {
		headBlockHash: Hash32;
		safeBlockHash: Hash32;
		finalizedBlockHash: Hash32;
	}
	export interface ForkchoiceUpdatedResponseV1 {
		payloadStatus: RestrictedPayloadStatusV1;
		payloadId?: Bytes8;
	}
	export interface PayloadAttributesV1 {
		timestamp: Uint64;
		prevRandao: Bytes32;
		suggestedFeeRecipient: Address;
	}
	export interface PayloadAttributesV2 {
		timestamp: Uint64;
		prevRandao: Bytes32;
		suggestedFeeRecipient: Address;
		withdrawals: WithdrawalV1[];
	}
	export interface PayloadAttributesV3 {
		timestamp: Uint64;
		prevRandao: Bytes32;
		suggestedFeeRecipient: Address;
		withdrawals: WithdrawalV1[];
		parentBeaconBlockRoot: Hash32;
	}
	export interface BlobAndProofV1 {
		blob: Bytes;
		proof: Bytes48;
	}
	export interface BlobAndProofV2 {
		blob: Bytes;
		proofs: Bytes48[];
	}
}

export { };

import type {
	Address,
	Bytes8,
	Bytes32,
	Hash32,
	Uint64,
} from "@asyncswap/types";
import type { RestrictedPayloadStatusV1, WithdrawalV1 } from "./payload";
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

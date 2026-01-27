import type { Bytes, Bytes48 } from "@asyncswap/types";
export interface BlobAndProofV1 {
	blob: Bytes;
	proof: Bytes48;
}
export interface BlobAndProofV2 {
	blob: Bytes;
	proofs: Bytes48[];
}

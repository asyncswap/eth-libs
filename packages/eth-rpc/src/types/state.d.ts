declare global {
	// state.yaml
	export interface AccountProof {
		address: Address;
		accountProof: Bytes;
		balance: Uint256;
		codeHash: Hash32;
		nonce: Uint64;
		storageHash: Hash32;
		storageProof: StorageProof;
	}
	export interface StorageProof {
		key: Bytes32;
		value: Uint256;
		proof: Bytes;
	}
}

export { };

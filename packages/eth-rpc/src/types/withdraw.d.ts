declare global {
	// withdrawal.yaml
	export interface Withdrawal {
		index: Uint64;
		validatorIndex: Uint64;
		address: Address;
		amount: Uint256;
	}
}

export { };

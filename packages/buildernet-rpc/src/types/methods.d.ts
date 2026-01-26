declare global {
	export type BuildernetMethodsSpec = {
		eth_sendBundle: {
			params: [BuildernetSendBundleParams];
			result: BuildernetSendBundleResult;
		};
		eth_sendRawTransaction: { params: [Hex]; result: Hash32 };
		buildernet_getFeeRefundTotalsByRecipient: {
			params: [Address];
			result: {
				pending: Hex;
				received: Hex;
				maxBlockNumber: Hex;
			};
		};
		buildernet_getFeeRefundsByRecipient: {
			params: [BuildernetGetFeeRefundsByRecipientParams];
			result: BuildernetGetFeeRefundsResult;
		};
		buildernet_getFeeRefundsByBlock: {
			params: [{ blockNumber: Hex }];
			result: BuildernetGetFeeRefundsResult;
		};
		buildernet_getFeeRefundsByBundle: {
			params: [BundleHash];
			result: BuildernetGetFeeRefundsResult;
		};
		buildernet_setFeeRefundRecipient: {
			params: [Address, Address];
			result: { from: Address; to: Address };
		};
		buildernet_getDelayedRefunds: {
			params: [BuildernetGetDelayedRefundsParams];
			result: BuildernetGetDelayedRefundsResult;
		};
		buildernet_getDelayedRefundTotalsByRecipient: {
			params: [BuildernetGetDelayedRefundTotalsByRecipientParams];
			result: BuildernetGetDelayedRefundTotalsByRecipientResult;
		};
	};
}

export { };

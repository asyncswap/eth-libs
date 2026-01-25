declare global {
	export type FlashbotsMethodsSpec = {
		eth_sendBundle: {
			params: [EthSendBundleParams];
			result: EthSendBundleResult;
		};
		eth_callBundle: {
			params: [EthCallBundleParams];
			result: EthCallBundleResult;
		};
		mev_sendBundle: {
			params: [MevSendBundleParams];
			result: MevSendBundleResult;
		};
		mev_simBundle: {
			params: [MevSimBundleParams, { parentBlock: Hash32 }];
			result: MevSimBundleResult;
		};
		eth_cancelBundle: {
			params: [EthCancelBundleParams];
			result: EthCancelBundleResult;
		};
		eth_sendPrivateTransaction: {
			params: [EthSendPrivateTransactionParams];
			result: EthSendPrivateTransactionResult;
		};
		eth_sendPrivateRawTransaction: {
			params: [EthSendPrivateRawTransactionParams];
			result: EthSendPrivateRawTransactionResult;
		};
		eth_cancelPrivateTransaction: {
			params: [EthCancelPrivateTransactioParams];
			result: EthCancelPrivateTransactionResult;
		};

		flashbots_getFeeRefundTotalsByRecipient: {
			params: GetFeeRefundTotalsByRecipientParams[];
			result: GetFeeRefundTotalsByRecipientResult;
		};
		flashbots_getFeeRefundsByRecipient: {
			params: [GetFeeRefundsByRecipientParams];
			result: GetFeeRefundsByRecipientResult;
		};
		flashbots_getFeeRefundsByBlock: {
			params: [GetFeeRefundsByBlockParams];
			result: GetFeeRefundsByBlockResult;
		};
		flashbots_getFeeRefundsByBundle: {
			params: [GetFeeRefundsByBundleParams];
			result: GetFeeRefundsByBundleResult;
		};
		flashbots_setFeeRefundRecipient: {
			params: [Address, Address];
			result: { from: Address; to: Address };
		};
		buildernet_getDelayedRefunds: {
			params: [GetDelayedRefundsParams];
			result: GetDelayedRefundsResult;
		};
		buildernet_getDelayedRefundTotalsByRecipient: {
			params: [GetDelayedRefundTotalsByRecipientParams];
			result: GetDelayedRefundTotalsByRecipientResult;
		};
		flashbots_getMevRefundTotalByRecipient: {
			params: [Address];
			result: { total: Hex };
		};
		flashbots_getMevRefundTotalBySender: {
			params: [Address];
			result: { total: Hex };
		};
	} & EthMethodsSpec;

	export enum BuilderNetMethods {
		eth_sendBundle = "eth_sendBundle",
		eth_sendRawTransaction = "eth_sendRawTransaction",
		buildernet_getFeeRefundTotalsByRecipient = "buildernet_getFeeRefundTotalsByRecipient",
		buildernet_getFeeRefundsByRecipient = "buildernet_getFeeRefundsByRecipient",
		buildernet_getFeeRefundsByBlock = "buildernet_getFeeRefundsByBlock",
		buildernet_getFeeRefundsByBundle = "buildernet_getFeeRefundsByBundle",
		buildernet_setFeeRefundRecipient = "buildernet_setFeeRefundRecipient",
		buildernet_getDelayedRefunds = "buildernet_getDelayedRefunds",
		buildernet_getDelayedRefundTotalsByRecipient = "buildernet_getDelayedRefundTotalsByRecipient",
	}
}

export { };

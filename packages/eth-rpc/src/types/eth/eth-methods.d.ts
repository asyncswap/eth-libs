declare global {
	export enum EthMethods {
		// eth/transaction
		eth_getTransactionByHash = "eth_getTransactionByHash",
		eth_getTransactionByBlockHashAndIndex = "eth_getTransactionByBlockHashAndIndex",
		eth_getTransactionReceipt = "eth_getTransactionReceipt",
		// eth/submit
		eth_sendTransaction = "eth_sendTransaction",
		eth_sendRawTransaction = "eth_sendRawTransaction",
		// eth/state
		eth_getBalance = "eth_getBalance",
		eth_getStorageAt = "eth_getStorageAt",
		eth_getTransactionCount = "eth_getTransactionCount",
		eth_getCode = "eth_getCode",
		eth_getProof = "eth_getProof",
		// eth/sign
		eth_sign = "eth_sign",
		eth_signTransaction = "eth_signTransaction",
		// eth/filter
		eth_newFilter = "eth_newFilter",
		eth_newBlockFilter = "eth_newBlockFilter",
		eth_newPendingTransactionFilter = "eth_newPendingTransactionFilter",
		eth_uninstallFilter = "eth_uninstallFilter",
		eth_getFilterChanges = "eth_getFilterChanges",
		eth_getFilterLogs = "eth_getFilterLogs",
		eth_getLogs = "eth_getLogs",
		// eth/feeMarket
		eth_gasPrice = "eth_gasPrice",
		eth_blobBaseFee = "eth_blobBaseFee",
		eth_maxPriorityFeePerGas = "eth_maxPriorityFeePerGas",
		eth_feeHistory = "eth_feeHistory",
		// eth/execute
		eth_call = "eth_call",
		eth_estimateGas = "eth_estimateGas",
		eth_createAccessList = "eth_createAccessList",
		eth_simulateV1 = "eth_simulateV1",
		// eth/client
		eth_chainId = "eth_chainId",
		eth_syncing = "eth_syncing",
		eth_coinbase = "eth_coinbase",
		eth_accounts = "eth_accounts",
		eth_blockNumber = "eth_blockNumber",
		net_version = "net_version",
		// eth/block
		eth_getBlockByHash = "eth_getBlockByHash",
		eth_getBlockByNumber = "eth_getBlockByNumber",
		eth_getBlockTransactionCountByHash = "eth_getBlockTransactionCountByHash",
		eth_getBlockTransactionCountByNumber = "eth_getBlockTransactionCountByNumber",
		eth_getUncleCountByBlockHash = "eth_getUncleCountByBlockHash",
		eth_getUncleCountByBlockNumber = "eth_getUncleCountByBlockNumber",
		eth_getBlockReceipts = "eth_getBlockReceipts",
	}
}

export { };

import { initializeRpcClient, JsonRpcClient } from "@msaki/jsonrpc";

export enum Methods {
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

export class EthExecutionClient {
	private client: JsonRpcClient;

	constructor(url: string) {
		this.client = initializeRpcClient(url);
	}

	// eth/transaction
	async eth_getTransactionByHash(
		transactioHash: Hash32,
	): Promise<NotFound | TransactionInfo> {
		return await this.client.call(Methods.eth_getTransactionByHash, [
			transactioHash,
		]);
	}
	async eth_getTransactionByBlockHashAndIndex(
		blockHash: Hash32,
		transactionIndex: Uint,
	): Promise<NotFound | TransactionInfo> {
		return await this.client.call(
			Methods.eth_getTransactionByBlockHashAndIndex,
			[blockHash, transactionIndex],
		);
	}
	async eth_getTransactionReceipt(
		transactionHash: Hash32,
	): Promise<NotFound | ReceiptInfo> {
		return await this.client.call(Methods.eth_getTransactionReceipt, [
			transactionHash,
		]);
	}

	// eth/submit
	async eth_sendTransaction(transaction: GenericTransaction): Promise<Hash32> {
		return await this.client.call(Methods.eth_sendTransaction, [transaction]);
	}
	async eth_sendRawTransaction(transaction: Bytes): Promise<Hash32> {
		return await this.client.call(Methods.eth_sendRawTransaction, [
			transaction,
		]);
	}
	// eth/state
	async eth_getBalance(
		address: Address,
		block: BlockNumberOrTagOrHash,
	): Promise<Uint> {
		return await this.client.call(Methods.eth_getBalance, [address, block]);
	}
	async eth_getStorageAt(
		address: Address,
		storageSlot: Bytes32,
		block: BlockNumberOrTagOrHash,
	): Promise<Bytes> {
		return await this.client.call(Methods.eth_getStorageAt, [
			address,
			storageSlot,
			block,
		]);
	}
	async eth_getTransactionCount(
		address: Address,
		block: BlockNumberOrTagOrHash,
	): Promise<Uint> {
		return await this.client.call(Methods.eth_getTransactionCount, [
			address,
			block,
		]);
	}
	async eth_getCode(
		address: Address,
		block: BlockNumberOrTagOrHash,
	): Promise<Bytes> {
		return await this.client.call(Methods.eth_getCode, [address, block]);
	}
	async eth_getProof(
		address: Address,
		storageKeys: Bytes32[],
		block: BlockNumberOrTagOrHash,
	): Promise<AccountProof> {
		return await this.client.call(Methods.eth_getProof, [
			address,
			storageKeys,
			block,
		]);
	}
	// eth/sign
	async eth_sign(address: Address, message: Bytes): Promise<Bytes65> {
		return await this.client.call(Methods.eth_sign, [address, message]);
	}
	async eth_signTransaction(transaction: GenericTransaction): Promise<Bytes> {
		return await this.client.call(Methods.eth_signTransaction, [transaction]);
	}
	// eth/filter
	async eth_newFilter(filter: Filter): Promise<Uint> {
		return await this.client.call(Methods.eth_newFilter, [filter]);
	}
	async eth_newBlockFilter(): Promise<Uint> {
		return await this.client.call(Methods.eth_newBlockFilter, []);
	}
	async eth_newPendingTransactionFilter(): Promise<Uint> {
		return await this.client.call(Methods.eth_newPendingTransactionFilter, []);
	}
	async eth_uninstallFilter(): Promise<Uint> {
		return await this.client.call(Methods.eth_uninstallFilter, []);
	}
	async eth_getFilterChanges(): Promise<FilterResults> {
		return await this.client.call(Methods.eth_getFilterChanges, []);
	}
	async eth_getFilterLogs(filterIdentifier: Uint): Promise<FilterResults> {
		return await this.client.call(Methods.eth_getFilterLogs, [
			filterIdentifier,
		]);
	}
	async eth_getLogs(filter: Filter): Promise<FilterResults> {
		return await this.client.call(Methods.eth_getLogs, [filter]);
	}
	// eth/feeMarket
	async eth_gasPrice(): Promise<Uint> {
		return await this.client.call(Methods.eth_gasPrice, []);
	}
	async eth_blobBaseFee(): Promise<Uint> {
		return await this.client.call(Methods.eth_blobBaseFee, []);
	}
	async eth_maxPriorityFeePerGas(): Promise<Uint> {
		return await this.client.call(Methods.eth_maxPriorityFeePerGas, []);
	}
	async eth_feeHistory(
		blockCount: Uint,
		newestBlock: BlockNumberOrTag,
		rewardPercentiles: number[],
	): Promise<FeeHistoryResults> {
		return await this.client.call(Methods.eth_feeHistory, [
			blockCount,
			newestBlock,
			rewardPercentiles,
		]);
	}
	// eth/execute
	async eth_call(
		transaction: GenericTransaction,
		block: BlockNumberOrTagOrHash,
	): Promise<Bytes> {
		return this.client.call(Methods.eth_call, [transaction, block]);
	}
	async eth_estimateGas(
		transaction: GenericTransaction,
		block: BlockNumberOrTag,
	): Promise<Uint> {
		return await this.client.call(Methods.eth_estimateGas, [
			transaction,
			block,
		]);
	}
	async eth_createAccessList(
		transaction: GenericTransaction,
		block: BlockNumberOrTag,
	): Promise<AccessListResult> {
		return await this.client.call(Methods.eth_createAccessList, [
			transaction,
			block,
		]);
	}
	async eth_simulateV1(
		payload: EthSimulatePayload,
		blockTag: BlockNumberOrTagOrHash,
	): Promise<EthSimulateResult> {
		return await this.client.call(Methods.eth_simulateV1, [payload, blockTag]);
	}
	// eth/client
	async eth_chainId(): Promise<Uint> {
		return await this.client.call(Methods.eth_chainId, []);
	}
	async eth_syncing(): Promise<SyncingStatus> {
		return await this.client.call(Methods.eth_syncing, []);
	}
	async eth_coinbase(): Promise<Address> {
		return await this.client.call(Methods.eth_coinbase, []);
	}
	async eth_accounts(): Promise<Addresses> {
		return await this.client.call(Methods.eth_accounts, []);
	}
	async eth_blockNumber(): Promise<Uint> {
		return await this.client.call(Methods.eth_blockNumber, []);
	}
	async net_version(): Promise<UintDecimal> {
		return await this.client.call(Methods.net_version, []);
	}
	// eth/block
	async eth_getBlockByHash(
		blockHash: Hash32,
		hydratedTransactions: boolean,
	): Promise<NotFound | Block> {
		return await this.client.call(Methods.eth_getBlockByHash, [
			blockHash,
			hydratedTransactions,
		]);
	}
	async eth_getBlockByNumber(
		block: BlockNumberOrTag,
		hydratedTransactions: boolean,
	): Promise<NotFound | Block> {
		return await this.client.call(Methods.eth_getBlockByNumber, [
			block,
			hydratedTransactions,
		]);
	}
	async eth_getBlockTransactionCountByHash(
		blockHash: Hash32,
	): Promise<NotFound | Uint> {
		return await this.client.call(Methods.eth_getBlockTransactionCountByHash, [
			blockHash,
		]);
	}
	async eth_getBlockTransactionCountByNumber(
		block: BlockNumberOrTag,
	): Promise<NotFound | Uint> {
		return await this.client.call(
			Methods.eth_getBlockTransactionCountByNumber,
			[block],
		);
	}
	async eth_getUncleCountByBlockHash(
		blockHash: Hash32,
	): Promise<NotFound | Uint> {
		return await this.client.call(Methods.eth_getUncleCountByBlockHash, [
			blockHash,
		]);
	}
	async eth_getUncleCountByBlockNumber(
		block: BlockNumberOrTag,
	): Promise<NotFound | Uint> {
		return await this.client.call(Methods.eth_getUncleCountByBlockNumber, [
			block,
		]);
	}
	async eth_getBlockReceipts(
		block: BlockNumberOrTagOrHash,
	): Promise<NotFound | ReceiptInfo> {
		return await this.client.call(Methods.eth_getBlockReceipts, [block]);
	}
}

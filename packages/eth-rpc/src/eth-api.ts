import { BaseClient } from "@asyncswap/jsonrpc";

export class ExecutionClient extends BaseClient<EthMethodsSpec> {
	constructor(url: string) {
		super(url);
	}
}

export type EthRpcMethods<
	T extends Record<string, { params: readonly unknown[]; result: unknown }>,
> = {
		[K in keyof T]: (...params: T[K]["params"]) => Promise<T[K]["result"]>;
	};

export interface ExecutionClient extends EthRpcMethods<EthMethodsSpec> { }

/**
 * @deprecated Use `ExecutionClient` instead.
 * This method will be removed in v0.5.0.
 */
export class EthExecutionClient extends ExecutionClient { }

import { JsonRpcClient } from "@asyncswap/jsonrpc";

export type EthRpcMethods<
	T extends Record<string, { params: unknown[]; result: unknown }>,
> = {
		[K in keyof T]: (...params: T[K]["params"]) => Promise<T[K]["result"]>;
	};

export class ExecutionClient {
	rpc: JsonRpcClient;
	headers: Record<string, string> = {};

	constructor(url: string) {
		this.rpc = new JsonRpcClient(url);

		return new Proxy(this, {
			get: (_, method: string) => {
				return (...params: unknown[]) =>
					this.rpc.call(this.rpc.buildRequest(method, params), this.headers);
			},
		});
	}

	setAuth(headers: Record<string, string>) {
		this.headers = {
			...this.headers,
			...headers,
		};
		return this;
	}
}

export interface ExecutionClient extends EthRpcMethods<EthMethodsSpec> { }

/**
 * @deprecated Use `ExecutionClient` instead.
 * This method will be removed in v0.5.0.
 */
export class EthExecutionClient extends ExecutionClient { }

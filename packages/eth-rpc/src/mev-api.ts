import { JsonRpcClient } from "@asyncswap/jsonrpc";

export type FlashbotsRpcMethods<
	T extends Record<string, { params: unknown[]; result: unknown }>,
> = {
		[M in keyof T]: (...params: T[M]["params"]) => Promise<T[M]["result"]>;
	};

export class FlashbotsClient {
	rpc: JsonRpcClient;
	private headers: Record<string, string> = {};

	constructor(url: string) {
		this.rpc = new JsonRpcClient(url);

		return new Proxy(this, {
			get: (_, method: string) => {
				return (...params: unknown[]) =>
					this.rpc.call(this.rpc.buildRequest(method, params), this.headers);
			},
		});
	}

	// "X-Flashbots-Signature": `${sender}:${signature}`,
}

export interface FlashbotsClient
	extends FlashbotsRpcMethods<FlashbotsMethodsSpec> { }

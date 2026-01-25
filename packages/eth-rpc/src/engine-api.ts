import { JsonRpcClient } from "@asyncswap/jsonrpc";

export type EngineRpcMethods<
	T extends Record<string, { params: unknown[]; result: unknown }>,
> = {
		[K in keyof T]: (...params: T[K]["params"]) => Promise<T[K]["result"]>;
	};

export class EngineExecutionClient {
	rpc: JsonRpcClient;
	headers: Record<string, string>;

	constructor(url: string, jwt_token: string) {
		this.headers = {
			Authorization: `Bearer ${jwt_token}`,
		};
		this.rpc = new JsonRpcClient(url);

		return new Proxy(this, {
			get: (_, method: string) => {
				return (...params: unknown[]) =>
					this.rpc.call(this.rpc.buildRequest(method, params), this.headers);
			},
		});
	}

	setHeaders(headers: Record<string, string>) {
		this.headers = {
			...this.headers,
			...headers,
		};
		return this;
	}
}

export interface EngineExecutionClient
	extends EngineRpcMethods<EngineMethodsSpec> { }

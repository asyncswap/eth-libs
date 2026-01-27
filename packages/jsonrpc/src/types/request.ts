import type { JsonRpcId } from "./base";

export interface JsonRpcRequest<Method, Params extends readonly unknown[]> {
	jsonrpc: "2.0";
	method: Method;
	params?: Params;
	id?: JsonRpcId;
}

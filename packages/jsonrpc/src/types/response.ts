import type { JsonRpcId } from "./base";

export interface JsonRpcSuccess<Result> {
	jsonrpc: "2.0";
	result: Result;
	id: JsonRpcId;
}

export interface JsonRpcError<ErrorCode> {
	jsonrpc: "2.0";
	error: JsonRpcErrorObject<ErrorCode>;
	id: JsonRpcId;
}

export interface JsonRpcErrorObject<ErrorCode> {
	code: ErrorCode;
	message: string;
	data?: unknown;
}
export type JsonRpcResponse<Result, ErrorCode> =
	| JsonRpcSuccess<Result>
	| JsonRpcError<ErrorCode>;

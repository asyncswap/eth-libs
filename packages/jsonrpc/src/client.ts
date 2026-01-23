export class JsonRpcClient {
	private id = 0;

	constructor(private url: string) { }

	async call<Method = string, Result = unknown, E = unknown>(
		method: Method,
		params: unknown[] = [],
		headers?: Record<string, string>,
	): Promise<Result | E> {
		const request: JsonRpcRequest<Method> = this.buildRequest<Method>(
			method,
			params,
		);
		const response = await this.request(request, headers);
		++this.id;
		if ("error" in response) {
			return response.error as E;
		}
		return response.result as Result;
	}

	buildRequest<Method>(method: Method, params: unknown[] = []) {
		return {
			jsonrpc: "2.0" as const,
			method,
			params,
			id: this.id,
		};
	}

	private async request(
		req: JsonRpcRequest<unknown>,
		customHeaders?: Record<string, string>,
		timeout: number = 5000,
	) {
		const controller = new AbortController();
		const timeoutId = setTimeout(() => controller.abort(), timeout);
		try {
			const headers: Record<string, string> = {
				"Content-Type": "application/json",
				...(customHeaders ?? {}),
			};
			const res = await fetch(this.url, {
				method: "POST",
				headers,
				body: JSON.stringify(req),
			});

			return (await res.json()) as JsonRpcResponse<unknown, number>;
		} catch (err) {
			clearTimeout(timeoutId);
			if (err instanceof Error && err.name === "AbortError") {
				throw new Error(`Req timeout after ${timeout}ms`);
			}
			throw err;
		}
	}

	notify<Method = string>(method: Method, params?: unknown[]) {
		const request: JsonRpcRequest<Method> = {
			jsonrpc: "2.0",
			method,
			params,
		};
		return this.request(request);
	}
}

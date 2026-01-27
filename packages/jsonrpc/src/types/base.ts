export type JsonRpcId = string | number | null;

export type SpecBase = Record<string, { params: unknown[]; result: unknown }>;

export type RpcSpec<Spec extends SpecBase> = {
	[Method in keyof Spec]: (
		...params: Spec[Method]["params"]
	) => Promise<Spec[Method]["result"]>;
};

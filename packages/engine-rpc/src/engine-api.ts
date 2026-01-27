import { BaseClient, type RpcSpec } from "@asyncswap/jsonrpc";
import type { EngineMethodsSpec } from "./types";

export class EngineClient extends BaseClient<EngineMethodsSpec> {
  constructor(url: string, jwt_token: string) {
    super(url);
    this.headers = {
      Authorization: `Bearer ${jwt_token}`,
    };
  }
}

export type EngineRpc = EngineClient & RpcSpec<EngineMethodsSpec>;

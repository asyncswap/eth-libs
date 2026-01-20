import { EthExecutionClient } from './src';
import {  JsonRpcClient, type JsonRpcRequest, type JsonRpcResponse } from "@msaki/jsonrpc";

const url = 'http://localhost:8545'
const client = new JsonRpcClient(async (req: JsonRpcRequest<unknown>) => {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(req)
  });

  return (await res.json()) as JsonRpcResponse<unknown, number>
});
const eth = new EthExecutionClient(client);
const balance = await eth.eth_getBalance(
  "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
  "latest"
);
console.log('Balance:', balance);

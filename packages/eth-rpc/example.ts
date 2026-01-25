import { ExecutionClient } from "./src";

const url = "http://localhost:8545";
const eth = new ExecutionClient(url);
const balance = await eth.eth_getBalance(
	"0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
	"latest",
);
console.log("Balance:", balance);
eth.eth_getTransactionCount("0x34", "safe");

import { EngineExecutionClient } from "./src";

const engineUrl = "http://localhost:8551";
const engine = new EngineExecutionClient(engineUrl, process.env.JWT_TOKEN!);
const payload = await engine.eth_chainId();
console.log(payload);

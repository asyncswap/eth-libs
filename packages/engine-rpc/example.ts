import { EngineExecutionClient } from "./src";

const engineUrl = "http://localhost:8551";
const engine = new EngineExecutionClient(engineUrl, process.env.JWT_TOKEN!);
const payload = await engine.eth_chainId();
console.log(payload);

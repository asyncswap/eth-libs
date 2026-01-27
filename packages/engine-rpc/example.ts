import type { EngineRpc } from "./src";
import { EngineClient } from "./src";

const engineUrl = "http://localhost:8551";
const engine = new EngineClient(engineUrl, process.env.JWT_TOKEN!) as EngineRpc;
const payload = await engine.eth_chainId();
console.log(payload);

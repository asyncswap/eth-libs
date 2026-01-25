# eth-rpc

A comprehensive TypeScript client for Ethereum execution and engine APIs.

## Installation

```bash
bun add @asyncswap/eth-rpc
```

## Quick Start

### Execution API Client

```typescript
import { ExecutionClient } from '@asyncswap/eth-rpc';

const url = 'http://localhost:8545'
const eth = new ExecutionClient(url);

const balance = await eth.eth_getBalance(
  "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
  "latest"
);
console.log("Balance:", balance);
eth.eth_getTransactionCount("0x34", "safe");
```

### Engine API Client

```typescript
import { EngineExecutionClient } from '@asyncswap/eth-rpc';

const engineUrl = 'http://localhost:8551';
const engine = new EngineExecutionClient(engineUrl, process.env.JWT_TOKEN!);
const payload = await engine.engine_getPayloadV1("0x1");

console.log(payload);
```

## Type Safety

Full TypeScript support with comprehensive type definitions for all RPC methods and responses.

## Dependencies

- `@asyncswap/jsonrpc` - JSON-RPC 2.0 client/server implementation

## License

MIT

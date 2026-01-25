# @asyncswap/engine-rpc

A library for Ethereum engine api JSON-RPC spec.

## Installation

```
bun add @asyncswap/engine-rpc 
```

## Quick Start

### Engine API Client

```typescript
import { EngineExecutionClient } from '@asyncswap/eth-rpc';

const engineUrl = 'http://localhost:8551';
const engine = new EngineExecutionClient(engineUrl, process.env.JWT_TOKEN!);
const payload = await engine.engine_getPayloadV1("0x1");

console.log(payload);
```

## References

- [ethereum/execution-apis](https://github.com/ethereum/execution-apis/tree/main/src/engine)

## Dependencies

- `@asyncswap/eth-rpc` - lib for ethereum execution client JSON-RPC 2.0 api.

## License

MIT

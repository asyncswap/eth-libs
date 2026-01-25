# flashbots-rpc

A TypeScript client for flashbots relay rpc.

```sh
bun add @asyncswap/flashbots-rpc
```

## Flashbots Client API

```ts
import { FlashbotsClient } from "@asyncswap/flashbots-rpc";

const rpc = "https://relay.flashbots.net";
const client = new FlashbotsClient(rpc);
const bundle = {
 txs: ["0x123abc", "0x456def..."] as Hex[],
 blockNumber: "0xb63dcd" as Hex,
 minTimestamp: 0,
 maxTimestamp: 1615920932,
};
const body = client.rpc.buildRequest("eth_sendBundle", [bundle]);
// const signature = wallet.sign(body)
// const sender = wallet.address
client
 .setHeaders({
  "X-Flashbots-Signature": `0x<sender>:0x<signature>`,
 })
 .eth_sendBundle(bundle);
```

## References

- [Fashbots JSON-RPC API Endpoints](https://docs.flashbots.net/flashbots-auction/advanced/rpc-endpoint)

## License

MIT

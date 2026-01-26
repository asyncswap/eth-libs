import { FlashbotsClient } from "./src";

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
const result = await client
  .withHeaders({
    "X-Flashbots-Signature": `0x<sender>:0x<signature>`,
  })
  .eth_sendBundle(bundle);
console.log(result);

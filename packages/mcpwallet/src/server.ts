import { JsonRpcServer } from "@asyncswap/jsonrpc";

const rpc = new JsonRpcServer();

rpc.register("get_address", async () => "0x_my_address");

const server = Bun.serve({
  port: 4444,
  fetch() {
    return Response.json({ message: "hello world!" });
  },
});

console.log(`Listening on ${server.url}`);

---
"@asyncswap/eth-rpc": patch
---

fix base client proxy

```ts
setHeaders(...) {
    this.headers = ...
    return this; // ❌ returns the *target*
}
```

The correct fix: return the receiver / proxy, not this

You already have access to the proxy inside the get trap via receiver.

So you must bind methods so that they return the proxy.

- setHeaders() mutates the target
- returns receiver (the proxy)
- chaining continues in proxy-land
- RPC methods remain visible

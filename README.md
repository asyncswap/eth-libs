# Ethereum Client Libs

A collections of typescript libraries for Ethereum client JSON-RPC api specs.

1. [`@asyncswap/jsonrpc`](./packages/jsonrpc)
1. [`@asyncswap/eth-rpc`](./packages/eth-rpc)
1. [`@asyncswap/engine-rpc`](./packages/engine-rpc)
1. [`@asyncswap/flashbots-rpc`](./packages/flashbots-rpc)
1. [`@asyncswap/buildernet-rpc`](./packages/buildernet-rpc)

## Installation

Each package is self contained depending on your needs.

```sh
bun add @asyncswap/jsonrpc
bun add @asyncswap/eth-rpc
bun add @asyncswap/engine-rpc
bun add @asyncswap/flashbots-rpc
bun add @asyncswap/buildernet-rpc
```

## Usage

See [/packages](./packages)

## Development

### Semver Package Versioning

Auto-update semver versioning for major, minor or patches.

```sh
bun changeset
```

Apply version changes

```sh
bun changeset version
```

> This will bump all the versions automatically and auto-update dependencies.

### Pusblish

Run

```sh
bun publish:jsonrpc
```

## `Rust Wasm Base`

Starter kit for develop Web Assembly applications using Rust and JavaScript.

## Features

- Rust for compiling WebAssembly modules
- Parcel as build pipeline
- DotEnv for config
- Express as http server
- Eslint for Js Linting

## Prerequisites

- Rust (1.30.0 or higher)
- NodeJs (8.2.0 or higher)

## Getting Started

### Installing

```
$ git clone https://github.com/nicolasAbarca/rust-wasm-base
$ cd rust-wasm-base
$ npm install / yarn install
```

### Installing Wasm Pack

```sh
cargo install wasm-pack
```

### Starting Dev Server

```sh
$ yarn start
```

This command will launch de development server in port defined in EXPRESS_PORT var in .env file (8000 by default )

http://localhost:8000

### Production build

```sh
$ yarn build
```

Will generate the production build

### Code linting

```sh
$ yarn lint
```

This starter uses ESLINT for js code linting.

## CONTRIBUTING

Contributions are always welcome :)

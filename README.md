# Hello MCP

A simple Model Context Protocol (MCP) server that provides a "Hello, World!" message resource.

## Installation

```bash
npm install
```

## Usage

1. Build the server:
```bash
npm run build
```

2. Start the server:
```bash
npm start
```

## What it does

This MCP server exposes a single resource at `hello://world` that returns a greeting message. It demonstrates the basic structure of an MCP server using the official SDK.

## Resources

- **URI**: `hello://world`
- **Name**: Hello World Message
- **Type**: text/plain
- **Content**: "Hello, World! This is my first MCP resource."

## Development

The server is implemented in TypeScript and uses stdio transport for communication with MCP clients. The main logic is in `src/index.ts`.
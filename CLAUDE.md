# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a simple Model Context Protocol (MCP) server implementation that provides a "Hello, World!" resource. The project demonstrates basic MCP server functionality using the `@modelcontextprotocol/sdk`.

## Development Commands

- `npm run build` - Compile TypeScript to JavaScript in the `build/` directory
- `npm start` - Run the compiled server (requires building first)
- `tsc` - Direct TypeScript compilation (equivalent to npm run build)

## Architecture

The codebase consists of a single TypeScript file (`src/index.ts`) that:

1. **Server Setup**: Creates an MCP server instance with resource capabilities
2. **Resource Listing**: Implements `ListResourcesRequestSchema` handler that exposes a single resource at `hello://world`
3. **Resource Reading**: Implements `ReadResourceRequestSchema` handler that returns a greeting message for the `hello://world` URI
4. **Transport**: Uses stdio transport for communication with MCP clients

## Key Components

- **Server Configuration**: Defines server name, version, and capabilities in the server constructor
- **Resource Handlers**: Two main request handlers for listing and reading resources
- **Transport Layer**: StdioServerTransport for standard input/output communication
- **Error Handling**: Basic error handling for unknown resource URIs

## MCP Protocol Details

The server exposes one resource:
- URI: `hello://world`
- Name: "Hello World Message"  
- MIME Type: `text/plain`
- Content: "Hello, World! This is my first MCP resource."

The server logs its startup status to stdout in JSON-RPC format for MCP client consumption.
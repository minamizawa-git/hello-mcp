import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { ListResourcesRequestSchema, ReadResourceRequestSchema } from "@modelcontextprotocol/sdk/types.js";

const server = new Server({
  name: "hello-mcp",
  version: "1.0.0",
}, {
  capabilities: {
    resources: {},
  },
});

server.setRequestHandler(ListResourcesRequestSchema, async () => {
  return {
    resources: [{
      uri: "hello://world",
      name: "Hello World Message",
      description: "A simple greeting message",
      mimeType: "text/plain",
    }],
  };
});

server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
  if (request.params.uri === "hello://world") {
    return {
      contents: [{
        uri: "hello://world",
        text: "Hello, World! This is my first MCP resource.",
      }],
    };
  }
  throw new Error("Resource not found");
});

const transport = new StdioServerTransport();
await server.connect(transport);
console.info('{"jsonrpc": "2.0", "method": "log", "params": { "message": "Server running..." }}');

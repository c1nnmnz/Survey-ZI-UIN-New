# Interface Survey

A modern full-stack web application with AI integration capabilities through Model Context Protocol (MCP).

## Features

- React 18 with TypeScript
- Express backend with REST API
- Tailwind CSS for styling
- Vite for fast builds and development
- Drizzle ORM for database integration
- MCP servers for AI integration
- Authentication and session management
- Modern UI components with Radix UI

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

4. Start the production server:
   ```bash
   npm start
   ```

## Project Structure

The project is organized into the following main directories:

- `apps/client`: Frontend React application
- `apps/server`: Backend Express server
- `mcp-servers`: MCP server files for AI integration
- `src`: Source code for the application
- `config`: Configuration files
- `shared`: Shared code between client and server

For a detailed overview of the project structure, see [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md).

## MCP Servers

This project includes Model Context Protocol (MCP) servers that enable AI integration:

- Filesystem Server: Allows AI to access files on your system
- Memory Server: Provides persistent memory for AI conversations

To use the MCP servers:

1. Navigate to the `mcp-servers` directory
2. Run the appropriate batch file to start the servers:
   - `start_all_mcp_servers.bat`: Start all MCP servers
   - `start_mcp_filesystem.bat`: Start only the filesystem server
   - `start_mcp_memory.bat`: Start only the memory server

For more information about the MCP servers, see [mcp-servers/README_MCP.md](mcp-servers/README_MCP.md).

## Available Scripts

- `npm run dev`: Start the development server
- `npm run build`: Build the project for production
- `npm start`: Start the production server
- `npm run check`: Run TypeScript type checking
- `npm run db:push`: Push database schema changes
- `npm run lint`: Lint the codebase
- `npm run lint:fix`: Fix linting issues
- `npm run format`: Format code with Prettier
- `npm run test`: Run tests
- `npm run test:watch`: Run tests in watch mode
- `npm run test:coverage`: Run tests with coverage

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 
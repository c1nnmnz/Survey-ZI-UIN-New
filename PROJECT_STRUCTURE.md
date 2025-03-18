# Project Structure

This document outlines the organization of the project files and directories.

## Overview

This project is a full-stack web application with the following components:
- React frontend with Tailwind CSS and various UI components
- Express backend with database integration
- MCP (Model Context Protocol) servers for AI integration

## Directory Structure

```
interface_survey/
├── apps/                      # Application code
│   ├── client/                # Frontend application
│   │   ├── public/            # Static assets
│   │   └── src/               # React source code
│   └── server/                # Backend application
│       ├── api/               # API endpoints
│       ├── db/                # Database models and migrations
│       ├── middleware/        # Express middleware
│       ├── services/          # Business logic
│       ├── types/             # TypeScript type definitions
│       ├── utils/             # Utility functions
│       └── config/            # Server configuration
├── backup/                    # Backup of old code
│   ├── client/                # Old client code
│   └── server/                # Old server code
├── config/                    # Configuration files
├── dist/                      # Build output
├── docs/                      # Documentation
├── logs/                      # Log files
├── mcp-servers/               # MCP server files
│   ├── browser-tools-mcp-main/  # Browser tools for MCP
│   ├── browser-tools-mcp.zip    # Zipped browser tools
│   ├── mcp_config.json          # MCP configuration
│   ├── README_MCP.md            # MCP documentation
│   ├── simple_mcp_test.js       # Test script for MCP
│   ├── start_all_mcp_servers.bat  # Script to start all MCP servers
│   ├── start_mcp_filesystem.bat   # Script to start filesystem server
│   ├── start_mcp_memory.bat       # Script to start memory server
│   └── test_mcp_filesystem.js     # Test script for filesystem server
├── node_modules/              # Dependencies
├── public/                    # Public assets
├── scripts/                   # Utility scripts
│   └── script.js              # Utility script
├── shared/                    # Shared code between client and server
├── src/                       # Source code
│   ├── css/                   # CSS styles
│   ├── js/                    # JavaScript files
│   └── templates/             # HTML templates
├── tools/                     # Development tools
├── .eslintrc.json            # ESLint configuration
├── .gitignore                # Git ignore file
├── .prettierrc               # Prettier configuration
├── drizzle.config.ts         # Drizzle ORM configuration
├── LICENSE                   # License file
├── package.json              # Project dependencies and scripts
├── package-lock.json         # Lock file for dependencies
├── postcss.config.js         # PostCSS configuration
├── README.md                 # Project README
├── tailwind.config.js        # Tailwind CSS configuration
├── tailwind.config.ts        # TypeScript version of Tailwind config
├── theme.json                # Theme configuration
├── tsconfig.json             # TypeScript configuration
├── vite.config.ts            # Vite configuration
└── vitest.config.ts          # Vitest configuration
```

## Key Components

### Frontend (apps/client)

The frontend is built with React and uses modern UI libraries:
- React for UI components
- Tailwind CSS for styling
- Radix UI for accessible components
- React Query for data fetching
- Wouter for routing

### Backend (apps/server)

The backend is built with Express and provides:
- REST API endpoints
- Database integration with Drizzle ORM
- Authentication with Passport
- Session management

### MCP Servers (mcp-servers)

The MCP servers provide AI integration capabilities:
- Filesystem Server: Allows AI to access files on your system
- Memory Server: Provides persistent memory for AI conversations
- Browser Tools: Tools for browser automation and integration

## Development Workflow

1. Run `npm run dev` to start the development server
2. Run `npm run build` to build the project for production
3. Run `npm start` to start the production server
4. Use the MCP server scripts in the `mcp-servers` directory to start MCP servers as needed 
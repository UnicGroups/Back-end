# Back-end

## ⚠️ Prototype Notice

**This is a prototype implementation and does not reflect the final report.** This codebase is for experimental and demonstration purposes only. The actual findings, conclusions, and specifications are documented in the official project report.

## Project Overview

This repository contains the back-end implementation for the UnicGroups project. It serves as a proof-of-concept to explore and validate architectural decisions and technical approaches using Node.js and Express.

## Project Structure

```
Back-end/
├── src/
│   ├── app.js                 # Express application setup
│   ├── server.js              # Server entry point
│   ├── config/                # Configuration files
│   ├── controllers/           # Request handlers and business logic
│   ├── middleware/            # Express middleware (auth, validation, etc.)
│   ├── models/                # Database models and queries
│   ├── routes/                # API route definitions
│   └── utils/                 # Utility functions and helpers
├── .env                       # Environment variables (not committed)
├── .gitignore                 # Git ignore rules
├── package.json               # Project dependencies
├── package-lock.json          # Locked dependency versions
├── LICENSE                    # Project license
└── README.md                  # This file
```

### Key Directories

- **`src/config/`**: Database and application configuration files
- **`src/controllers/`**: Business logic for handling requests and responses
- **`src/middleware/`**: Authentication, validation, rate limiting, and error handling middleware
- **`src/models/`**: Database models and data access layers
- **`src/routes/`**: API endpoint route definitions
- **`src/utils/`**: Helper functions and utilities

## Technology Stack

- **Language**: JavaScript (Node.js)
- **Framework**: Express.js 5.2.1
- **Database**: MySQL (mysql2)
- **Authentication**: JWT (jsonwebtoken), bcryptjs
- **Validation**: Joi
- **Security**: CORS, express-rate-limit
- **Environment**: dotenv

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm or yarn
- MySQL database

### Installation

```bash
# Clone the repository
git clone https://github.com/UnicGroups/Back-end.git

# Navigate to the directory
cd Back-end

# Install dependencies
npm install
```

### Configuration

Create a `.env` file in the root directory with your environment variables:

```env
# Server
PORT=3000
NODE_ENV=development

# Database
DB_HOST=localhost
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=unicgroups

# JWT
JWT_SECRET=your_secret_key
JWT_EXPIRE=7d
```

### Running the Project

```bash
# Development mode (with auto-reload via nodemon)
npm run dev

# Production mode
npm start
```

## Available Scripts

- `npm start` - Start the server in production mode
- `npm run dev` - Start the server in development mode with auto-reload

## Important Disclaimers

- **Prototype Status**: This code is not production-ready and is subject to significant changes.
- **Not Report-Representative**: Implementation details, architecture, and design patterns in this repository may not align with the official project report.
- **Limited Testing**: This prototype has limited testing and should not be used in production environments.
- **Security**: While security practices are implemented, this is a prototype and should not handle sensitive data in production.

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## Contact

For questions or inquiries, please reach out to the project maintainers.

---

**Last Updated**: May 16, 2026  
**Status**: Prototype (Under Development)

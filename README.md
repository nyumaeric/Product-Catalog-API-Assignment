# Product Catalog API Assignment

This project is a simple Express.js application that serves as a starting point for a Product Catalog API. It includes basic setup and configuration to get you started with building your API.

## Getting Started

### Prerequisites

- Node.js (v12.x or later)
- npm (v6.x or later)
- Postman (for testing the API)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/Product-Catalog-API-Assignment.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Product-Catalog-API-Assignment
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Server

1. Start the server:
   ```sh
   node index.js
   ```

2. The server will be running on `http://localhost:3000` (or the port specified in your `.env` file).

### Testing with Postman

1. Open Postman and create a new `GET` request.
2. Set the request URL to `http://localhost:3000/`.
3. Click the "Send" button.
4. You should see the response "Hello World!" in the response body.

### Project Structure

```
Product-Catalog-API-Assignment/
├── index.js        # Entry point of the application
├── package.json    # Project metadata and dependencies
├── .env            # Environment variables (not included in the repository)
└── README.md       # Project documentation
```

### Environment Variables

Create a `.env` file in the root directory of the project and add the following environment variables:

```
PORT=3000
```

### Dependencies

- [express](https://www.npmjs.com/package/express): Fast, unopinionated, minimalist web framework for Node.js
- [dotenv](https://www.npmjs.com/package/dotenv): Loads environment variables from a `.env` file into `process.env`

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
# Haiku API

[![Node.js](https://img.shields.io/badge/Node.js-v14.x-green.svg)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-v4.x-blue.svg)](https://expressjs.com/)

## Description

The Haiku API is a simple RESTful API that provides access to a collection of Haiku poems. Haiku poems are a form of Japanese poetry known for their brevity and simplicity. This API allows users to retrieve a random Haiku or fetch all available Haiku poems from the collection.

## Installation

To run the Haiku API locally, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/haiku-api.git
   ```

2. Navigate to the project directory:

   ```bash
   cd haiku-api
   ```

3. Install the required dependencies using npm (Node Package Manager):

   ```bash
   npm install
   ```

4. Start the server:

   ```bash
   npm start
   ```

The API should now be running locally on port 3000.

## Endpoints

- **GET /getRandom**: Retrieve a random Haiku poem.
- **GET /getAll**: Retrieve all available Haiku poems.

## Usage

You can access the API endpoints using your preferred API testing tool (e.g., Postman) or by making HTTP requests in your code.

Example API request to retrieve a random Haiku:
```
GET http://localhost:3000/getRandom
```

Example API request to retrieve all Haiku poems:
```
GET http://localhost:3000/getAll
```

## Technologies Used

- Node.js
- Express.js

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

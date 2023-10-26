// Import required modules
const express = require('express');
const {db} = require('../src/firebase-config')
// Create an Express application
const app = express();

// Define a route (e.g., a simple "Hello, World!" route)
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Define the port to listen on
const port = process.env.PORT || 3000;

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
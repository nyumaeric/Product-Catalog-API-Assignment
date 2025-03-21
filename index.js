const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Add a route to handle POST requests
app.post('/', (req, res) => {
  res.send('POST request received');
});

app.put('/', (req, res) => {
  res.send('PUT request received');
});

app.delete('/', (req, res) => {
  res.send('DELETE request received');
});

app.patch('/', (req, res) => {
  res.send('PATCH request received');
});

app.options('/', (req, res) => {
  res.send('OPTIONS request received');
});

app.head('/', (req, res) => {
  res.send('HEAD request received');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

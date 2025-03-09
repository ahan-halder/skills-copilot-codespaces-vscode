// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Create a comments variable with a default value of an empty array
const comments = [];

// Set up the /comments route that sends the comments array
app.get('/comments', (req, res) => {
  res.send(comments);
});

// Set up the post /comments route that adds a new comment to the comments array
app.post('/comments', (req, res) => {
  const newComment = req.body;
  comments.push(newComment);
  res.send(newComment);
});

// Listen to port 4001
app.listen(4001, () => {
  console.log('Server is listening on port 4001');
});
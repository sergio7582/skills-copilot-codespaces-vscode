// Create web server

// Import Express and create an instance of it
const express = require('express');
const app = express();

// Import body-parser
const bodyParser = require('body-parser');

// Import comments.js
const comments = require('./comments');

// Configure body-parser for express
app.use(bodyParser.urlencoded({ extended: true }));

// Configure body-parser for express
app.use(bodyParser.json());

// Set the port for the server
const port = 3000;

// Get all comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Get a comment by id
app.get('/comments/:id', (req, res) => {
    res.json(comments.find(comment => comment.id === req.params.id));
});

// Create a new comment
app.post('/comments', (req, res) => {
    const comment = {
        id: comments.length + 1,
    };
});
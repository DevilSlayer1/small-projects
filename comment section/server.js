const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Use middleware to parse JSON in request body
app.use(bodyParser.json());

// In-memory array to store comments
let comments = [];

// Serve HTML file with comments and form
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// API endpoint to get comments
app.get('/api/comments', (req, res) => {
    res.json(comments);
});

// API endpoint to post a new comment
app.post('/api/comments', (req, res) => {
    const newComment = req.body.comment;
    comments.push(newComment);
    res.json({ success: true, message: 'Comment added successfully' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

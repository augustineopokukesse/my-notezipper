const express = require("express");
const notes = require("./data/notes");
const dotenv = require('dotenv');
//create object 
const app = express();
dotenv.config();

//create first API endpoint
app.get('/', (req, res) => {
    res.send("API is running..");
});

//create second API endpoint
app.get('/api/notes', (req, res) => {
    res.json(notes);
});

app.get('/api/notes/:id', (req, res) => {
    const note = notes.find(n => n._id === req.params.id);
    res.send(note);
});

const PORT = process.env.PORT || 5000;

//create server
app.listen(PORT, console.log(`Server started on PORT ${PORT}`));

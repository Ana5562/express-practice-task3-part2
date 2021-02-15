const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://localhost/movies');

const app = express();

app.use(bodyParser.json({ extended: true }));

const Comment = require('./model/comment.js');

app.get('/show/:id/comments', async function(req, res) {

    Comment.find({}, function(err, comments){
        if(err) {
            res.status(500).send({error: "Could not fetch comments!"});
        } else {
            res.send(comments);
        }

    });
});

app.listen(3000, () => {
    console.log('Up and running on port 3000!');
});
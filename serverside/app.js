const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const newsPost = require('./models/newsPost');

mongoose.connect('mongodb://localhost:27017/bookapp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {console.log('db connected');})
    .catch(() => {console.log('db connection error');});

app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); //can connect from any host
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE'); //allowable methods
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
    next();
});

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}));

//parse application/json
app.use(bodyParser.json());

app.get('/news', (req,res,next) => {
    newsPost.find()
    .then(data => res.status(200).json(data))
    .catch(err => {
        console.log('Error: $(err)');
        res.status(500).json(err);
    });
});

app.post('/news', (req,res,next) => {
    //create newsPost variable and save request's fields to db
    const post = new newsPost ({
        postTitle: req.body.postTitle,
        postDate: req.body.postDate,
        postAuthor: req.body.postAuthor,
        postContent: req.body.postContent
    });
    post.save()
    //in case of success
    .then(() => { console.log('post saved to db'); })
    //in case of error
    .catch(() => { console.log('error: ' + err); });
});

app.delete('/news/:id', (req,res,next) => {
    newsPost.deleteOne({_id: req.params.id }).then(result => {
        console.log(result);
        res.status(200).json('deleted!');
    });
});


//to use this middleware in other parts of the application
module.exports = app;
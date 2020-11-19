const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const newsPost = require('./models/newsPost');
const { hasLifecycleHook } = require('@angular/compiler/src/lifecycle_reflector');
const connectionString = 'url';

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {console.log('Mongo db connected');})
    .catch(() => {console.log('Mongo db connection error');});

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

//retrieve all news posts
app.get('/news', (req,res,next) => {
    newsPost.find().sort('-postDate')
    .then(data => res.status(200).json(data))
    .catch(err => {
        console.log('Error: $(err)');
        res.status(500).json(err);
    });
});

//retrieve a single news post
app.get('/news/:id', (req,res,next) => {
    newsPost.findById(req.params.id)
    .then(data => res.status(200).json(data))
    .catch(err => {
        console.log('Error: $(err)');
        res.status(500).json(err);
    });
});

//retrieve a single news post for editing
app.get('/news/edit-post/:id', (req,res,next) => {
    newsPost.findById(req.params.id)
    .then(data => res.status(200).json(data))
    .catch(err => {
        console.log('Error: $(err)');
        res.status(500).json(err);
    });
});

//add a new news post
app.post('/news/add-post', (req,res,next) => {
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

//update a news post
app.put('/news/edit-post/:id', (req,res,next) => {
    console.log('id: ' + req.params.id)
        if(mongoose.Types.ObjectId.isValid(req.params.id)) {
            //find document and set new values
            newsPost.findOneAndUpdate(
                {_id: req.params.id},
                {$set: {postTitle: req.body.postTitle,
                    postDate: req.body.postDate,
                    postAuthor: req.body.postAuthor,
                    postContent: req.body.postContent}},
                {new:true})
            .then((news) => {
                if(news) {
                    console.log(news);
                }
                else {
                    console.log('no data exists');
                }
                })
            .catch((err) => {
                console.log(err);
            });
        }
        else {
            console.log('please provide correct id');
        }
});

//delete a news post
app.delete('/news/:id', (req,res,next) => {
    newsPost.deleteOne({_id: req.params.id }).then(result => {
        console.log(result);
        res.status(200).json('deleted!');
    });
});


//to use this middleware in other parts of the application
module.exports = app;
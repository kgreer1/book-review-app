const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use((req,res,next) => {
    console.log('This line is always called.');
    res.setHeader('Access-Control-Allow-Origin', '*'); //can connect from any host
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS'); //allowable methods
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
    next();
});

app.get('/news', (req,res,next) => {
    const news = [
        {id:"1", 
        postTitle:"August New Releases", 
        postDate:"August 5, 2020",
        postAuthor: "Jill Doe", 
        postContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem donec massa sapien faucibus et molestie. Non blandit massa enim nec. Iaculis urna id volutpat lacus laoreet non curabitur."},
        {id:"2", 
        postTitle:"Author Interview: Joon Oluchi Lee", 
        postDate:"August 12, 2020",
        postAuthor: "Jae Hardy", 
        postContent: "Purus gravida quis blandit turpis. Purus sit amet luctus venenatis lectus magna fringilla urna. At ultrices mi tempus imperdiet nulla malesuada. Faucibus turpis in eu mi bibendum neque egestas. Ultrices tincidunt arcu non sodales neque. Pellentesque nec nam aliquam sem. Sit amet consectetur adipiscing elit pellentesque habitant morbi. Est ante in nibh mauris. Aliquam ultrices sagittis orci a."},
        {id:"3", 
        postTitle:"An Adventure in Children's Books", 
        postDate:"August 28, 2020",
        postAuthor: "Sara Little", 
        postContent: "Faucibus interdum posuere lorem ipsum dolor sit. Auctor augue mauris augue neque. In aliquam sem fringilla ut morbi tincidunt augue interdum. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Dui ut ornare lectus sit amet est placerat in. Vitae sapien pellentesque habitant morbi tristique."},
        {id:"4", 
        postTitle:"October New Releases", 
        postDate:"October 4, 2020",
        postAuthor: "Jill Doe", 
        postContent: "Cursus turpis massa tincidunt dui ut. Tincidunt dui ut ornare lectus sit amet. Sed nisi lacus sed viverra tellus in hac habitasse platea. Sed odio morbi quis commodo odio aenean. Amet est placerat in egestas erat imperdiet sed euismod nisi. Neque convallis a cras semper."},
    ];
    res.json(news); //send the array as the response
    next();
});

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}));

//parse application/json
app.use(bodyParser.json());

//serve incoming post requests to /news
app.post('/news', (req,res,next) => {
    const news = req.body;
    console.log("New post submitted: " + news.postTitle);
    //send acknowledgement back to caller
    res.status(201).json('Post successful');
});


//to use this middleware in other parts of the application
module.exports = app;
const express = require("express");  // we have imported the module 
const path = require("path");  // path module
const fs =require("fs");
const app = express(); // we have made the express app
const port = 80;
// EXPRESS SPECIFIC STUFF
app.use('/static',express.static('static')) //'static' is the folder name
app.use(express.urlencoded()) //help lrta hai form ke data ko express tak laane ke liye ]

//PUG SPECIFIC STUFF
app.set('view engine', 'pug');
app.set('views',path.join(__dirname,'views'))  //dirname=directory name
//ENDPOINTS
app.get('/',(req,res)=>{
    const con="this is the best content";
    const params = {'title': 'pubg is the best game ', 'content':con}
    res.status(200).render('index.pug',params);
})
app.post('/',(req,res)=>{
    name = req.body.name
    age = req.body.age
    gender = req.body.gender
    more = req.body.more
    let outputToWrite = `the name of the client is ${name},${age} years old , ${gender}, ${more}`
    fs.writeFileSync('output.txt',outputToWrite)
    const params = {'message': 'Your form has been successfully submitted'}
    res.status(200).render('index.pug',params);

})
//START THE SERVER
app.listen(port,()=>{
    console.log(`the application started successfully ${port}`);

})
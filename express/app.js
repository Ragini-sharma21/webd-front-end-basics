const express = require("express");  // we have imported the module 
const path = require("path");  // path module
const app = express(); // we have made the express app
const port = 80;
// EXPRESS SPECIFIC STUFF
app.use('/static',express.static('static')) //'static' is the folder name

//PUG SPECIFIC STUFF
app.set('view engine', 'pug');
app.set('views',path.join(__dirname,'views'))  //dirname=directory name
//ENDPOINTS
app.get('/',(req,res)=>{
    const con="this is the best content";
    const params = {'title': 'pubg is the best game ', 'content':con}
    res.status(200).render('index.pug',params);
})
//START THE SERVER
app.listen(port,()=>{
    console.log(`the application started successfully ${port}`);

})
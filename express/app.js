const express = require("express");  // we have imported the module 
const path = require("path");  // path module
const app = express(); // we have made the express app
const port = 80;
// for serving static files 
app.use('/static',express.static('static')) //'static' is the folder name

// set the template engine as pug
app.set('view engine', 'pug');

//set the views diectory
app.set('views',path.join(__dirname,'views'))  //dirname=directory name

//our pug demo endpoint
app.get("/demo" , (req,res)=>{        // whenever we will encounter this /demo or enter this folder ..this arrow function will give " this ....." response
    res.status(200).render('demo',{title: 'hey ragini' , message:'how are you '})
})

app.get("/" , (req,res)=>{        // whenever we will encounter this / or enter this folder ..this arrow function will give " this ....." response
    res.send("This is my first home app ")
})

app.get("/about" , (req,res)=>{        // whenever we will encounter this /about or enter this folder ..this arrow function will give " this ....." response
    res.send("This is my first about app ")
})
app.listen(port,()=>{
    console.log(`the application started successfully ${port}`);

})
// console.log("hello world");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3001;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Navigation Bar</title>
      <style>
          .navbar{
              background-color: black;
              border-radius:30px;
          }
          .navbar ul{
              overflow:auto;
          }
          .navbar li{
              float:left;
              list-style:none;
              margin:13px 20px;
      
          }
          .navbar li a{
              color:white;
              text-decoration:none;
              padding:3px 3px;
          } 
          .navbar li a:hover{
              color:red;
          }
          .search{
              color:white;
              float:right;
              padding:12px 75px;
          }
          .navbar input{
              border:2px solid black;
              padding:3px ;
              border-radius:14px;
              width:149px;
          }
  
      </style>
  </head>
  
  <body>
      <header>
      <nav class="navbar">
          <ul>
              <li> <a href="#">Home</a></li>
              <li> <a herf="#">About</a></li>
              <li> <a href="#">Contact us</a></li>
              <li> <a herf="#">Services</a></li>
              <div class="search">
                  <input type="search" class="search" id="search" placeholder="Search this website">
              </div>
  
  
          </ul>
         </nav>
          <header>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
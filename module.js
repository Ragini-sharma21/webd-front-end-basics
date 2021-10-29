const fs = require("fs");
let text = fs.readFileSync("dance.txt","utf-8");
text = text.replace("love","like");
//  text="my name is ragini";
console.log("we love to dance.");
console.log(text);

fs.writeFileSync("rohan.txt",text);
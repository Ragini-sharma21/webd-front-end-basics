
//getting started 
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/raginikart', { useNewUrlParser: true, useUnifiedTopology: true });   //raginikart database is now connected with mongod

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function () {

//     console.log("We are connected bro/sis")
// });

var kittySchema = new mongoose.Schema({
    name: String
});
kittySchema.methods.speak = function () {
    var greeting ="My name is " + this.name
      
    console.log(greeting);
  }
  

var Kitten = mongoose.model('raginikitty', kittySchema);  // name of collections will be harrykitty

var raginikitty= new Kitten({ name: 'raginikitty' });
var raginikitty2= new Kitten({ name: 'raginikitty2' });
// console.log(raginikitty.name);
// raginikitty.speak();

raginikitty.save(function (err, raginikitty){  //2 arguments error and object which is to be saved 
    if(err)return console.error(err);
    // raginikitty.speak();

}); 
raginikitty2.save(function (err, k){  //2 arguments error and object which is to be saved 
    if(err)return console.error(err);
    // raginikitty2.speak();

}); 
Kitten.find({name:"harryKitty2"},function(err,kittens){
    if(err)return console.error(err);
    console.log(kittens);
})
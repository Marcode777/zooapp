var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zoo_db'
});

var prompt = require('prompt');
  prompt.start();
  prompt.message = "";

var zoo = {
  welcome: function() {
    console.log("Welcome to the Zoo and Friends App~!")
  },
  menu: function () {
    console.log("Enter (A): -----> to Add to a new animal to the Zoo!")
        console.log("Enter (U): -----> to Update info on an animal in the Zoo!")
        console.log("Enter (V): -----> to Visit animals in the Zoo!")
        console.log("Enter (D): -----> to Adopt an animal from the Zoo!")
        console.log("Enter (Q): -----> to Quit and exit the Zoo!")
    } //in an object, you don't use semicolons after last property and curly bracket
};
connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    };
    console.log("yeah!");//this "yeah!" is just to test//
    //console.log('connected as id ' + connection.threadId);
    zoo.welcome();
    zoo.menu();

});




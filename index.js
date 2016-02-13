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
//This is the ZOO OBJECT
var zoo = {
        welcome: function() {
            console.log("Welcome to the Zoo and Friends App~!")
        },
        menu: function() {
            console.log("Enter (A): -----> to Add to a new animal to the Zoo!")
            console.log("Enter (U): -----> to Update info on an animal in the Zoo!")
            console.log("Enter (V): -----> to Visit animals in the Zoo!")
            console.log("Enter (D): -----> to Adopt an animal from the Zoo!")
            console.log("Enter (Q): -----> to Quit and exit the Zoo!")
        }, //in an object, you don't use semicolons after last property and curly bracket
        add: function(input_scope) {
                var currentScope = input_scope;
                console.log("To add an animal to the zoo please fill out the following form for us!");
                //the following would prompt the user to add a new animal, then it's inserted into the animals table in zoo_db
                prompt.get(["caretaker_ID", "name", "type", "age"], function(err, result) {
                    var query = "INSERT INTO animals (caretaker_ID, name, type, age) VALUES (?,?,?,?);";
                    var newAnimal = [result.caretaker_ID, result.name, result.type, result.age]
                    console.log('Your full name is ' + result.first_name + ' ' + result.last_name);
                });
                connection.query(query, newAnimal, function(err, res) {
                            if (err) {
                                throw err
                            }
                            console.log(result.name + "is in the zoo with the animals!");
                        })
                    },
                        //currentScope.menu(); currentScope.promptUser();

                        visit: function() {
                            console.log("Enter (I):---> do you know the animal by its ID? We will visit that animal!")
                            console.log("Enter (N):---> do you know the animal by its name? We will visit that animal!")
                            console.log("Enter (A):---> here's the count for all animals in all locations!")
                            console.log("Enter (C):---> here's the count for all animals in this one city!")
                            console.log("Enter (O):---> here's the count for all the animals by the type you specified!")
                            console.log("Enter (Q):---> Quits to the main menu!")

                            currentScope.visit();
                            currentScope.view();
                        },
                    }




                            connection.connect(function(err) {
                                if (err) {
                                    console.error('error connecting: ' + err.stack);
                                    return;
                                };
                                console.log("yeah!"); //this "yeah!" is just to test//
                                //console.log('connected as id ' + connection.threadId);
                                zoo.welcome();
                                zoo.menu();

                            });
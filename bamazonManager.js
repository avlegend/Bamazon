const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require('console.table');

const connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "password",
    database: "bamazon_db"
});

connection.connect(err => {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    //afterConnection();

});

function start() {
    inquirer
    .prompt([
        
    ])
}
// List a set of menu options:
// View Products for Sale
// View Low Inventory
// Add to Inventory
// Add New Product
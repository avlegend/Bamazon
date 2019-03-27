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

// connect to the mysql server and sql database
connection.connect(err => {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    //afterConnection();

});

connection.query("SELECT * FROM products", (err, res) => {
    if (err) throw err;
    //Below here we know we do not have an error AND we have fetched everythign from DB
    console.table(res);
    //connection.end();
    start();
});


// function which prompts the user for what action they should take
function start() {

    inquirer
        // prompt the user to select items
        .prompt([
            {
                //The first should ask them the ID of the product they would like to buy.
                name: "id_Item",
                input: "input",
                message: "Enter Item ID that you would like to purchase.",
                // validate: (Function) Receive the user input and should return true if the value is valid, and an error message (String) otherwise. If false is returned, a default error message is provided.
                validate: function (value) {
                    if (!isNaN(+value)) {
                        return true;
                    }
                    return false;
                }
            },
            {
                //The second message should ask how many units of the product they would like to buy
                name: "stock_units",
                input: "input",
                message: "How many Units would you like to buy?",
                validate: function (value) {
                    if (!isNaN(+value)) {
                        return true;
                    }
                    return false;
                }
            }
        ])
        .then(answer => {
            connection.query(
                "SELECT * FROM products WHERE id=?",
                [answer.id_Item],
                (err, res) => {
                    if (err) throw err;
                    var currentItem = res.pop();
                    //if item exists check to make sure we have qty if not tell user if so subtract and update db and show user total cost
                    const nsq = currentItem.stock_quantity - answer.stock_units
                    if (nsq >= 0) {

                        connection.query('UPDATE products SET stock_quantity=? WHERE id=?', [nsq, currentItem.id], (err, res) => {
                            if (err) throw err;
                            //console.table(res);

                            console.table("Purchased $" + answer.stock_units * currentItem.price);
                            connection.end();
                        })
                    } else {
                        console.log("Insufficient quantity!");
                    }
                }

            );
        });

};


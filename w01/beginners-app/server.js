//To start this server, type node server.js in the terminal

//To stop it, combine CTRL + C

/* ******************************************
 * This is the application server
 * ******************************************/
const express = require("express") //import express package
const app = express() //create the application

/* ******************************************
 * Default GET route
 * ***************************************** */

//Get the index route and return a message to the browser
app.get("/", (req, res) => {
    res.send("Welcome home!")
})

/* ******************************************
 * Server host name and port
 * ***************************************** */
const HOST = "localhost"
const PORT = 3000

/* ***********************
* Log statement to confirm server operation
* *********************** */
app.listen(PORT, () => {
    console.log(`Trial app listening on "${HOST}:${PORT}"`)
})

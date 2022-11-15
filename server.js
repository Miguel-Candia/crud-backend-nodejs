const express = require('express')
const initDB = require ('./db/db')
const bodyParser = require('body-parser')
const app = express()
const path=require("path");

const port = 4444

const studentRouters = require ('./app/routes/student')

//motor de plantillas
app.set("views", path.join(__dirname,"view"));
app.set('view engine', 'ejs');



// Parsing json
app.use(
    bodyParser.json({
        limit:'20mb'
    })
)

// Parsing application/x-www-form-urlencoded
app.use(
    bodyParser.urlencoded({
        limit: '20mn',
        extended: true
    })
)
 app.use(studentRouters)

app.listen(port, () => {
    console.log('La app esta en linea');
})

initDB()
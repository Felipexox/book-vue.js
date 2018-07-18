console.log("Hello world")
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const morgan = require("morgan")

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get("/status",(request, response) =>{
    response.send({
        message: "hello world"
    })
})

app.listen(process.env.PORT || 8080)
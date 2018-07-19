
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const morgan = require("morgan")

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.post("/register",(request, response) =>{
    response.send({
        message: `${request.body.email} Register has sucessful`
    })
})

app.listen(process.env.PORT || 8081)
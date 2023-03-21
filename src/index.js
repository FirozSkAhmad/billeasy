const express = require('express')
const route = require('./routes/route');
const cors = require('cors')


const app = express()

require('dotenv').config()
app.use(cors({
    origin: "*"
}))

app.use(express.json())

app.use('/', route)
app.use('/*', (req, res) => {
    return res.status(400).send({ msg: "no such url" })
})

app.listen(process.env.PORT, () => {
    console.log("Express app is running on port" + process.env.PORT)
})
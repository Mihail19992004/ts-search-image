const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserRoute = require('./Routes/UserRoute')
const app = express()
app.use(cors())
app.use(express.json())
app.use('/users', UserRoute)

async function start() {
        try {
            await mongoose.connect('mongodb+srv://User:User@cluster0.nska2.mongodb.net/photoReg?retryWrites=true&w=majority',
                { useUnifiedTopology: true } )
            app.listen(5000, ()=> console.log('ok'))
        }catch (e) {
            console.log(e)
        }
}
start()
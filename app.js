const express = require('express')
const bodyParser = require('body-parser')
const path =  require('path')
const Router = require('./router/route')
const emailRoute = require('./router/sendEmail')
const app = express()
const PORT = 3300


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(express.static(path.join(__dirname, 'public')))


app.use('/', emailRoute)
app.use('/', Router)





app.listen(PORT , ()=> console.log(`listening to route ${PORT}`))

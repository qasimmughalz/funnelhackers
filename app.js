const express = require('express')
const path =  require('path')
const Router = require('./router/route')
const app = express()
const PORT = 3300


app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(express.static(path.join(__dirname, 'public')))

app.use('/', Router)





app.listen(PORT , ()=> console.log(`listening to route ${PORT}`))


const express = require('express')
const Router = express.Router()
const getPage = require('../DirectPages/directPages')


Router.get('/', getPage.HomePage)
Router.get('/aboutus', getPage.AboutUs)
Router.get('/contactus', getPage.ContactUs)
Router.get('/portfolio', getPage.Portfolio)
Router.get('/services', getPage.GetServiePage)
Router.get('/casestudies', getPage.GetCaseStudies)


Router.get('*', getPage.HomePage)



module.exports = Router

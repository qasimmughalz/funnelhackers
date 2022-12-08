const nodemailer = require('nodemailer')
const express = require('express')
const Router = express.Router()

const sendEmail = ( response , req)=>{
    let transporter = nodemailer.createTransport({
        host: "smtp.titan.email",
        port: 465,
        secure: true,
        auth:{
            user:'hello@sixfigureshark.com', 
            pass:'Salesshark1234!'
        }
    })

    let mailOption1 = {
        from: 'hello@sixfigureshark.com',
        to: 'hello@sixfigureshark.com',
        subject: 'User Testing Query',
        text:  
        "Name: " + response.name + "\n" + "Email: " + response.email + "\n" +
        "Phone: " +response.phone + "\n" +"Website: " + response.website + "\n" + 
        "option" + response.option + "\n" +"description " + response.description
    };

    transporter.sendMail(mailOption1,(err,info)=> {
        if(err){
            console.log("======error in sending email =========",err);
        } else {
            console.log('Email Sent: =============' + info.response);
        }
    });

}



Router.post('/formSubmit', (req, res)=>{
    const data = req.body
    console.log('=========', data)

    const response = {
		name:req.body.name,
		email:req.body.email,
		phone:req.body.phone, 
		website:req.body.website,
		option:req.body.option,
		desc:req.body.description
    }

    sendEmail(response, res)

    res.render('success', {
        Username: req.body.name ? req.body.name : '',
        path:''
    })

    res.end();
})



module.exports = Router

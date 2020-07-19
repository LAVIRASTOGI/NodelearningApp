//sending email in node js using sendgrid third party  
var nodemailer = require('nodemailer');
var sendGridTransport = require('nodemailer-sendgrid-transport');
const APIkeyvar = require('../sendgrid.env')
const apiKey = APIkeyvar.APIkey;

var transporter = nodemailer.createTransport(sendGridTransport({
    auth: {
        api_key: apiKey
    }
}))
transporter.sendMail({
        to: '1993lavirastogi11@gmail.com',
        from: '1993lavirastogi@gmail.com',
        subject: 'sign up done',
        html: '<h1>Signed up success</h1>'

    }).then(msg => {
        console.log("emailsent")
    })
    .catch(err => {
        console.log(err)
    })
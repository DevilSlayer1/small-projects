const nodemailer = require('nodemailer');

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'Anish Das',
        pass: 'Kirtania Sada Hari@'
    }
});

// Define email options
const mailOptions = {
    from: 'anishdas506@gmail.com',
    to: 'lifeisstrange506@gmail.com',
    subject: 'Test Email',
    text: 'This is a test email.'
};

// Send the email
transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});

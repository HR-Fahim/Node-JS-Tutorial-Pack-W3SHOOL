var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'youremail@gmail.com',
        pass: 'yourpassword'
    }
});

var mailOptions = {
    from: 'youremail@gmail.com',
    // For multiple person "to: 'myfriend@yahoo.com, myotherfriend@yahoo.com',"
    to: 'myfriend@yahoo.com',
    subject: 'Sending Email using Node.js',
    // If want to send HTML formatted text "html: '<h1>Welcome</h1><p>That was easy!</p>'"
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
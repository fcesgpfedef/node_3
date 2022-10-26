var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'naga.pradeep9@gmail.com',
    pass: 'rpjajgrebhqpmxoo'
  }
});

var mailOptions = {
  from: 'naga.pradeep9@gmail.com',
  to: 'naga.pradeep10@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
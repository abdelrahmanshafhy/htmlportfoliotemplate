const express = require('express');
const nodemailer = require('nodemailer'); // Import nodemailer
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/contact.html'); // Correct typo _dirname to __dirname
});

app.post('/', (req, res) => {
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'strngpss@gmail.com', // Your Gmail email address
            pass: 'zjut kcaw reld yyky' // Your Gmail password or an app-specific password if you have 2FA enabled
        }
    });

    const mailOptions = {
        from: req.body.email,
        to: 'mrwbwdyshafy@gmail.com',
        subject: `Message from ${req.body.email}: ${req.body.subject}`,
        text: req.body.message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send('error');
        } else {
            console.log('Email sent:' + info.response);
            res.send('success'); // Correct response to 'success'
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
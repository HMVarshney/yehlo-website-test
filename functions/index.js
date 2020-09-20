const functions = require('firebase-functions');
const sgMail = require('@sendgrid/mail');
const express = require('express');
const app = express();
app.use(express.json());

sgMail.setApiKey('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');

app.post('/api/sendAppLink',(req,res)=>{
    const toEmail = req.body.toEmail;
    (async ()=>{
        try {
            const msg = {
              to: toEmail,
              from: 'yehlo.company@gmail.com',
              subject: 'YEH!O App Link',
              text: 'You will soon receive our App Link',
              html: '<strong>YEH!O App Link</strong>',
            };

            const response = await sgMail.send(msg);
            return res.status(200).send(response)

        } catch (error) {
            console.log(error);
            return res.sendStatus(500);
        }
    })();
});

exports.sendAppLink = functions.https.onRequest(app);
var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();

const { EMAIL_ACCOUNT, EMAIL_PASS, EMAIL_SERVER, EMAIL_USER } = process.env;
const emailEncoded = encodeURIComponent(`${EMAIL_ACCOUNT}:${EMAIL_PASS}`);
const mail_sender = nodemailer.createTransport(`smtps://${emailEncoded}@${EMAIL_SERVER}`);

const makeContactUsEmail = (form) => {
  console.log(process.env)
  return {
    from: `"${process.env.EMAIL_USER}" <${process.env.EMAIL_ACCOUNT}>`,
    to: process.env.CONTACT_US_SEND_TO_EMAIL,
    subject: `Inquiry Received - ${form.email}`,
    html: `<p>Name: ${form.name}</p>
           <p>Email: ${form.email}</p>
           <p>Message: ${form.message}</p>`,
  };
};

/* GET home page. */
router.post('/', function(req, res, next) {
  const message = makeContactUsEmail(req.body);
  console.log(message)
  mail_sender.sendMail(message).then(function(response) {
    console.log(response);
    if (response.accepted.length > 0) {
      console.log('FLAG0');
      res.json({
        code: 200,
        message: `We have received your request`,
      });
    } else {
      console.log('FLAG1');
      res.json({ code: 500, message: `There was an error sending the email.`, response });
    }
  });
});

module.exports = router;

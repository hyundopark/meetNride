const sgMail = require('@sendgrid/mail');

module.exports = {
    sendEmail: sendEmail
  };

function sendEmail(){
    debugger
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: 'hyundo@mailinator.com',
      from: 'test@example.com',
      subject: 'Sending with SendGrid is Fun',
      text: 'and easy to do anywhere, even with Node.js',
      html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };
    sgMail.send(msg);
}
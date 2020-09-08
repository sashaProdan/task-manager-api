const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'prodan.sasha@gmail.com',
    subject: 'Thanks for joining in!',
    text: `Welcome to the app ${name}. Let me know how you get along with the app.`
  })
}

const sendCancelationEmail = (email, name) => {
  console.log(name + ' : ' + email)
  sgMail.send({
    to: email,
    from: 'prodan.sasha@gmail.com',
    subject: 'Sorry to see you go!',
    text: `Dear ${name}, we are sorry to see you go. \
      I would like to find out more about your experience and \
      reasons for your cancellation. Please, let me know if \
      we can do something for you!. Sincerely yours, Alexandra.`
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail
}

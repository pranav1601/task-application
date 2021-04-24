const sgMail=require('@sendgrid/mail')

const sendgridAPIKey=''

sgMail.setApiKey(sendgridAPIKey)

sgMail.send({
    to:'pranav.agarw@gmail.com',
    from:'pranav.agarw@gmail.com',
    subject:'first mail',
    text:'did it reach you?'
})
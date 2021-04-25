const sgMail=require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail=(email,name)=>{
    sgMail.send({
        to:email,
        from:'pranav.agarw@gmail.com',
        subject:'Thanks for joining in!',
        text:`Welcome to the application, ${name}. Let me know if you face any difficulties during the functioning.`
    })
}

const sendGoodbyeEmail=(email,name)=>{
    sgMail.send({
        to:email,
        from:'pranav.agarw@gmail.com',
        subject:'Sorry to see you leave :(',
        text:`See you again ${name}!. Let me know if I could have helped you with anything.`
    })
}

module.exports={
    sendWelcomeEmail,
    sendGoodbyeEmail
}
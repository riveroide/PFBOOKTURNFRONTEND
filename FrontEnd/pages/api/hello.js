const nodemailer = require("nodemailer");

export default function sendEmail(req, res) {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: "465",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PW,
    },
  })

  transporter.sendMail({
      from: `"BookTurn" <${process.env.EMAIL}>`, 
      to: req.body.email, 
      subject: req.body.subject,
      html: `<b>${req.body.message}</b>`,
    })
    .then((response)=>{res.send(response)})
    .catch((error) =>{res.send(error)});
}

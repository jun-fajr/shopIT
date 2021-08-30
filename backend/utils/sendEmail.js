const nodemailer = require('nodemailer');

const sendEmail = async options => {
    // const transporter = nodemailer.createTransport({
    //     host: process.env.SMTP_HOST,
    //     port: process.env.SMTP_PORT,
    //     auth: {
    //         user: process.env.SMTP_EMAIL,
    //         pass: process.env.SMTP_PASSWORD
    //     }
    // });
    const transporter = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "7cae151869d9d6",
            pass: "7b9f2546085ab4"
        }
    });

    const message = {
        from: `${process.env.SMTP_FROM_NAME} <${process.env.SMTP_FROM_EMAIL}>`,
        to: options.email,
        subject: options.subject,
        text: options.message
    }

    await transporter.sendMail(message)
}

module.exports = sendEmail;
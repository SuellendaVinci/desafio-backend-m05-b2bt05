const nodemailer = require('nodemailer');

var transportador = nodemailer.createTransport({
    host: process.env.NODEMAIL_HOST,
    port: process.env.NODEMAIL_PORT,
    auth: {
        user: process.env.NODEMAIL_USER,
        pass: process.env.NODEMAIL_PASS
    }
});

module.exports = transportador;
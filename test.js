const nodemailer = require('nodemailer');
const email = {
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "8d958ca4240b69",
      pass: "626a871af94e12"
    }
};

const send = async (option) => {
    nodemailer.createTransport(email).sendMail(option,(error, info) =>{
        if(error){
            console.log(error);
        }else{
            console.log(info);
            return info.response;
        }
    });
};

let email_data = {
    from: 'ghkstmd800@gmail.com',
    to: 'ghkstmd800@gmail.com',
    subject : '테스트 메일 입니다.',
    text: 'nodejs 한시간만에 끝내보자.'
}

send(email_data);
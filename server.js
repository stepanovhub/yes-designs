// var express = require('express');
// var app = express();

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!');
// });


// var http = require('http');

// var options = {
//   host: 'www.host.com',
//   path: '/',
//   port: '80',
//   method: 'POST'
// };

// callback = function(response) {
//   var str = ''
//   response.on('data', function (chunk) {
//     str += chunk;
//   });

//   response.on('end', function () {
//     console.log(str);
//   });
// }

// var req = http.request(options, callback);
// //This is the data we are posting, it needs to be a string or a buffer
// req.write("data");
// req.end();


// index.js
const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: path.join(__dirname, '')
}))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, ''))
app.listen(3000)

app.use(express.static('public'));


app.post('/mail', (request, response) => {
	console.log('req')
	console.log(request)
	console.log('res')
	console.log(response)
	// var req = http.request(options, callback);

})
app.get('/', (request, response) => {
    response.render('home', {
        name: 'John'
    })
})


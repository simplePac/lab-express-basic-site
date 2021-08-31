const express = require('express');
const app = express();

app.use(express.static('public'));
 
app.get('/home', (request, response, next) => response.sendFile(__dirname + '/view/home.html'));
 
// cat route:
app.get('/members', (request, response, next) => response.sendFile(__dirname + '/view/member.html'));
app.get('/discography', (request, response, next) => response.sendFile(__dirname + '/view/discography.html'));
app.get('/photos', (request, response, next) => response.sendFile(__dirname + '/view/galeria.html'));

app.listen(3000, () => console.log('My first app listening on port 3000! '));
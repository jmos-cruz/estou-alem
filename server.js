const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

const port = 8080;

const resourcePath = '/resources';
const viewPath = '/views'
const controllersPath = '/controllers';
const servicePath = '/service';

const resources = fs.readdirSync('./resources').map(filename => '/'.concat(filename));
const controllers = fs.readdirSync(`.${controllersPath}`).map(filename => controllersPath.concat('/').concat(filename));
const views = fs.readdirSync(`.${viewPath}`).map(filename => viewPath.concat('/').concat(filename));
const services = fs.readdirSync(`.${servicePath}`).map(filename => servicePath.concat('/').concat(filename));

//app.use(express.static(__dirname + '/'));

app.get(['', '/'], (req, res) => {
    res.sendFile(`${__dirname}${resourcePath}/home.html`);
});

app.get('/main.js', (req, res) => {
    res.sendFile(`${__dirname}/main.js`);
});
/*
app.get('/variaçoes_2.png', (req, res) => {
    res.sendFile(`${__dirname}${resourcePath}/variaçoes_2.png`);
})
*/
app.use(express.static(`${__dirname}${resourcePath}`));

app.get(resources, (req, res) => {
    res.sendFile(`${__dirname}${resourcePath}${req.originalUrl}`);
});

console.log(services);

app.get([views, services, controllers].flat(), (req, res) => {
    res.sendFile(`${__dirname}${req.originalUrl}`);
})

app.get('/result.html', (req, res) => {
    res.sendFile(`${__dirname}${resourcePath}/batata.html`);
});

app.listen(port, '127.0.0.1', (err) => { //LAN address 192.168.1.78
    if (err) throw new Error(err);
    console.log('Server started');
});

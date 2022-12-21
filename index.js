var express = require('express');
var router = express.Router();
const fs = require('fs');

const mainImages = fs.readdirSync(`${__dirname}/public/images`).map(filename => '/'.concat(filename));
const cardImages = fs.readdirSync(`${__dirname}/public/images/Img`).map(filename => '/Img/'.concat(filename));
const controllers = fs.readdirSync(`${__dirname}/public/javascripts/controllers`).map(filename => '/controllers/'.concat(filename));
const service = fs.readdirSync(`${__dirname}/public/javascripts/service`).map(filename => '/service/'.concat(filename));
const views = fs.readdirSync(`${__dirname}/public/javascripts/views`).map(filename => '/views/'.concat(filename));

/* GET home page. */
router.get(['/', '/home'], function(req, res, next) {
  res.sendFile(`${__dirname}/public/home.html`);
});

router.get('/index', function(req, res, next) {
    res.sendFile(`${__dirname}/public/index.html`);
})

router.get('/creators', function(req, res, next) {
    res.sendFile(`${__dirname}/public/creators.html`);
})

router.get([mainImages, cardImages], function(req, res, next) {
    res.sendFile(__dirname + '/public/images' + req.originalUrl);
})

router.get([controllers, service, views, '/main.js'], function(req, res, next) {
    res.sendFile(__dirname + '/public/javascripts' + req.originalUrl);
})

module.exports = router;

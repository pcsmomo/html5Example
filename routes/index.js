var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.render('index');
});

router.get('/index', function(req, res, next) {
  res.render('index');
});

router.get('/join', function(req, res, next) {
  res.render('join');
});

router.get('/introduce', function(req, res, next) {
  res.render('introduce');
});

router.get('/qna', function(req, res, next) {
  res.render('qna');
});

router.get('/gallery', function(req, res, next) {
  res.render('gallery');
});

module.exports = router;

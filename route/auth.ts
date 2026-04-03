var express = require('express');
var router = express.Router();

var loginController = require('../controller/authController')


router.post('/login', function(req, res, next) {
  // res.send('auth route');
  // console.log('route', req.body);
  loginController.Login(req,res);
});

router.post('/register', function(req, res, next) {
  loginController.Register(req,res);
});

/* GET users listing. */
router.get('/hello', function(req, res, next) {
  res.send('hello for auth route');
});

module.exports = router;
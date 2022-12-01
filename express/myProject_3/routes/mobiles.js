var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/mobiles', function(req, res, next) {
  res.render('mobiles', { title: 'Samsung Mobile' , model:'Galaxy S23'});
});

module.exports = router;

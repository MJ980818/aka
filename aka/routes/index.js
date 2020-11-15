var express = require('express');
var router = express.Router();
// var result = require.resolve('./public/data/result.csv')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', result: 'result' });
});

module.exports = router;

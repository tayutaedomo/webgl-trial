var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'WebGL Trial' });
});

router.get('/webgl/triangle', function(req, res) {
  res.render('webgl/triangle');
});


module.exports = router;


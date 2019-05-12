var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'WebGL Trial' });
});

router.get('/webgl/:view', function(req, res) {
  res.render('webgl/' + req.params.view);
});

router.get('/threejs/:view', function(req, res) {
  res.render('threejs/' + req.params.view);
});

router.get('/threejs_r94/:view', function(req, res) {
  res.render('threejs_r94/' + req.params.view);
});

router.get('/canvas/:view', function(req, res) {
  res.render('canvas/' + req.params.view);
});


module.exports = router;


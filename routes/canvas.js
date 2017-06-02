"use strict";

var express = require('express');
var router = express.Router();

router.get('/text', function(req, res) {
  res.render('canvas/text');
});

router.get('/text_2', function(req, res) {
  res.render('canvas/text_2');
});

router.get('/text_3', function(req, res) {
  res.render('canvas/text_3');
});


module.exports = router;


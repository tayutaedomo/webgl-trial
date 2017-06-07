"use strict";

var express = require('express');
var router = express.Router();

router.get('/svg', function(req, res) {
  res.render('canvas/svg');
});

router.get('/svg_2', function(req, res) {
  res.render('canvas/svg_2');
});

router.get('/svg_3', function(req, res) {
  res.render('canvas/svg_3');
});

router.get('/svg_4', function(req, res) {
  res.render('canvas/svg_4');
});

router.get('/video', function(req, res) {
  res.render('canvas/video');
});

router.get('/video_2', function(req, res) {
  res.render('canvas/video_2');
});

router.get('/wrap_text', function(req, res) {
  res.render('canvas/wrap_text');
});


module.exports = router;


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

router.get('/text_4', function(req, res) {
  res.render('canvas/text_4');
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


"use strict";

var express = require('express');
var router = express.Router();

router.get('/plane', function(req, res) {
  res.render('threejs/plane');
});

router.get('/cube', function(req, res) {
  res.render('threejs/cube');
});

router.get('/cube_rotate', function(req, res) {
  res.render('threejs/cube_rotate');
});

router.get('/cube_rotate_capture', function(req, res) {
  res.render('threejs/cube_rotate_capture');
});

router.get('/cube_orbit', function(req, res) {
  res.render('threejs/cube_orbit');
});

router.get('/lookat', function(req, res) {
  res.render('threejs/lookat');
});

router.get('/lookat_2', function(req, res) {
  res.render('threejs/lookat_2');
});

router.get('/css3d_youtube', function(req, res) {
  res.render('threejs/css3d_youtube');
});

router.get('/css3d_youtube_sprite', function(req, res) {
  res.render('threejs/css3d_youtube_sprite');
});

router.get('/load_obj', function(req, res) {
  res.render('threejs/load_obj');
});

router.get('/attendant_moving', function(req, res) {
  res.render('threejs/attendant_moving');
});

router.get('/attendant_moving_camera', function(req, res) {
  res.render('threejs/attendant_moving_camera');
});

router.get('/canvas', function(req, res) {
  res.render('threejs/canvas');
});

router.get('/canvas_2', function(req, res) {
  res.render('threejs/canvas_2');
});


module.exports = router;


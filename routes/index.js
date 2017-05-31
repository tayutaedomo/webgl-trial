var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'WebGL Trial' });
});

router.get('/webgl/triangle', function(req, res) {
  res.render('webgl/triangle');
});

router.get('/threejs/plane', function(req, res) {
  res.render('threejs/plane');
});

router.get('/threejs/cube', function(req, res) {
  res.render('threejs/cube');
});

router.get('/threejs/cube_rotate', function(req, res) {
  res.render('threejs/cube_rotate');
});

router.get('/threejs/cube_rotate_capture', function(req, res) {
  res.render('threejs/cube_rotate_capture');
});

router.get('/threejs/cube_orbit', function(req, res) {
  res.render('threejs/cube_orbit');
});

router.get('/threejs/lookat', function(req, res) {
  res.render('threejs/lookat');
});

router.get('/threejs/lookat_2', function(req, res) {
  res.render('threejs/lookat_2');
});

router.get('/threejs/css3d_youtube', function(req, res) {
  res.render('threejs/css3d_youtube');
});

router.get('/threejs/css3d_youtube_sprite', function(req, res) {
  res.render('threejs/css3d_youtube_sprite');
});

router.get('/threejs/load_obj', function(req, res) {
  res.render('threejs/load_obj');
});

router.get('/threejs/attendant_moving', function(req, res) {
  res.render('threejs/attendant_moving');
});

router.get('/threejs/attendant_moving_camera', function(req, res) {
  res.render('threejs/attendant_moving_camera');
});

module.exports = router;


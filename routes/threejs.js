"use strict";

var express = require('express');
var router = express.Router();

router.get('/:view', function(req, res) {
  res.render('threejs/' + req.params.view);
});


module.exports = router;


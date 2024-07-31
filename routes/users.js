var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users/all', function(req, res, next) {
  res.render('layouts/home', { title: 'All Users'});
});

module.exports = router;

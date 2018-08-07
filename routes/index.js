var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html', { title: 'Express' });
});

router.get('/bg5kc8b3kjq1r6inngnzwjeuvsuvvq.html', function(req, res, next) {
  res.render('bg5kc8b3kjq1r6inngnzwjeuvsuvvq.html', { title: 'Verification' });
});

module.exports = router;

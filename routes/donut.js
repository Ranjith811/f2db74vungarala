var express = require('express');
const donut_controlers= require('../controllers/donut'); 
var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('donut', { title: 'search results donut' });
// });

router.get('/', donut_controlers.donut_view_all_Page ); 

module.exports = router;

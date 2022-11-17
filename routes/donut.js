var express = require('express');
const donut_controlers = require('../controllers/donut');
var router = express.Router();

/* GET home page. */
router.get('/', donut_controlers.donut_view_all_Page);
/* GET detail donut page */
router.get('/detail', donut_controlers.donut_view_one_Page);
/* GET create donut page */
router.get('/create', donut_controlers.donut_create_Page);
/* GET create update page */
router.get('/update', donut_controlers.donut_update_Page);
/* GET delete donut page */
router.get('/delete', donut_controlers.donut_delete_Page);

module.exports = router;



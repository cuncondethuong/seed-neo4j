var express = require('express');
var router = express.Router();
const { seedToNeo4j } = require('../controller/index');

/* GET users listing. */
router.post('/', seedToNeo4j);

module.exports = router;

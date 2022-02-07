var express = require('express');
const { getUsers } = require('../controller/index');
var router = express.Router();

/* GET users listing. */
router.get('/', getUsers);

module.exports = router;

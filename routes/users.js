const express = require('express');
const { schema } = require('./route-validators/validatorWithSecurityIssues');
const router = express.Router();

/* GET users listing. */
router.get('/', schema, function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

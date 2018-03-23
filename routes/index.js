
const { Router } = require('express');
const router = Router();

router.use(require('./customers'));

module.exports = router;
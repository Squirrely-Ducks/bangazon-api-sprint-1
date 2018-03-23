
const { Router } = require('express');
const router = Router();

router.use(require('./customers'));
router.use(require('./payment_types'));

module.exports = router;
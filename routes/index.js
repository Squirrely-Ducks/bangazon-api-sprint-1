
const { Router } = require('express');
const router = Router();

router.use(require('./customers'));
router.use(require('./products'));
router.use(require('./employees'));

module.exports = router;
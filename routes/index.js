
const { Router } = require('express');
const router = Router();

router.use(require('./customers'));
router.use(require('./products'));
router.use(require('./payment_types'));
router.use(require('./employees'));
router.use(require('./departments'));

module.exports = router;
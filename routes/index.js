
const { Router } = require('express');
const router = Router();

router.use(require('./customers'));
router.use(require('./products'));
router.use(require('./payment_types'));
router.use(require('./employees'));
router.use(require('./departments'));
router.use(require('./computers'));
router.use(require('./training_programs'));
router.use(require('./product_types'));

module.exports = router;
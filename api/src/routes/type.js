const { Router } = require('express');
const router = Router();
const typeController = require('../controllers/type.controllers');

router.get('/', typeController.getAllTypes);
router.post('/', typeController.createType);
module.exports = router;

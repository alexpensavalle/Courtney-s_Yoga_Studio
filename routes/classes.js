const express = require('express');
const router = express.Router();
const classCtrl = require('../controllers/classes');

router.get('/', classCtrl.index);
router.get('/new', classCtrl.new);
//router.get('/:id', classCtrl.show);
router.post('/', classCtrl.create);


module.exports = router;
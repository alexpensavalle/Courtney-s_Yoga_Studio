const express = require('express');
const router = express.Router();
const bookCtrl = require('../controllers/book');

router.get('/book', bookCtrl.index);
router.get('/new', bookCtrl.new);
//router.get('/:id', bookCtrl.show);
//router.post('/', bookCtrl.create);


module.exports = router;
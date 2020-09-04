const express = require('express');
const router = express.Router();
const aboutCtrl = require('../controllers/about');

router.get('/', aboutCtrl.index);
router.get('/new', aboutCtrl.new);
router.get('/:id', aboutCtrl.show);
router.put('/:id', aboutCtrl.show);////////this ain't it boi
router.post('/',isLoggedIn, aboutCtrl.create);
router.delete('/:id',isLoggedIn, aboutCtrl.delete);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

module.exports = router;
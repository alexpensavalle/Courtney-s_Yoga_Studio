const express = require('express');
const router = express.Router();
const classCtrl = require('../controllers/classes');

router.get('/', classCtrl.index);
router.get('/new', classCtrl.new);
router.get('/:id', classCtrl.show);
router.post('/',isLoggedIn, classCtrl.create);
router.post('/:id/add',isLoggedIn, classCtrl.signup);
router.delete('/:id',isLoggedIn, classCtrl.delete);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

module.exports = router;

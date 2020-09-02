const router = require('express').Router();
const passport = require('passport');

// The root route renders our view
router.get('/', function(req, res) {
  res.redirect('/users');
});

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/users',
    failureRedirect : '/users'
  }
));

// OAuth logout route
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

//Book an appointment:
router.get('/book', function(req, res) {
  res.render('/book');
});

module.exports = router;
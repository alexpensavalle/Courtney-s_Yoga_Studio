const About = require('../models/about');

module.exports = {
    index,
    new: newComment,
    show,
    create,
    delete: deleteComment,
  }

  function index(req, res) {
    About.find({}, function(err, comments) {
        let d = new Date();
        let n = d.toUTCString();
        let checkDateConv = new Date(n).getTime();
        let date = checkDateConv.toString().slice(0, 16);
          res.render('about/index', { title: 'About', section: 'About', date, comments, user: req.user });
    }).sort( { dateTimeComment: 1 } );//<--sorts in date order, ascending (1)
  }
  
  function newComment(req, res) {
    let newComment = new About();
    let d = new Date();
    let n = d.toUTCString();
    let checkDateConv = new Date(n).getTime();
    let dateTime1 = checkDateConv.toString().slice(0, 16);
    res.render('about/new', { dateTimeComment: dateTime1, commentTitle: newComment.commentTitle, comment: newComment, user: req.user });
  }
  
  function create(req, res) {
    req.body.user = req.user._id;
    About.create(req.body, function(err, comments1) {
        res.redirect(`/about/`);
    });
  }
  
  //find class by req.params.id
  function show(req, res) {
    let d = new Date();
    let n = d.toUTCString();
    let checkDateConv = new Date(n).getTime();
    let dateTimeComment = checkDateConv.toString().slice(0, 16);
    About.findById(req.params.id, function(err, comment1){
      res.render('about/show', {comment1, user: req.user, dateTimeComment});
    })
  }
  
  
  function deleteComment(req, res) {
    About.findByIdAndDelete(req.params.id, function (err, comment1) {
        res.redirect(`/about/`);
    });
  }
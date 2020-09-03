const Class = require('../models/class');

module.exports = {
  index,
  new: newAppointment,
  //show,
  create,
  //delete: deleteTicket
}

function index(req, res) {
    //console.log('Hello World');
    Class.find({}, function(err, classes) {
    let d = new Date();
    let n = d.toUTCString();
    let checkDateConv = new Date(n).getTime() ;
    let date = checkDateConv.toString().slice(0, 16);
        res.render('classes', { title: 'Classes', section: 'All Classes', date, classes, user: req.user });
      }).sort( { departs: 1 } );
  }

function newAppointment(req, res) {
  let newClass = new Class();
  let d = new Date();
  let n = d.toUTCString();
  let checkDateConv = new Date(n).getTime();
  let date = checkDateConv.toString().slice(0, 16);
  res.render('classes/new', { date, title: 'Class', class: newClass, user: req.user })
}

function create(req, res) {
  /*req.body.class = req.params.id
  Class.create(req.body, function(err, tickets) {
    res.redirect(`/classes/${req.params.id}`)
  })*/
  req.body.class = req.params.id;
  Class.create(req.body, function(err, classes) {
    res.redirect(`/classes/${req.params.id}`)
  })
}

/*function deleteTicket(req, res) {
  Ticket.findByIdAndDelete(req.params.ticket, function (err, ticket) {
      res.redirect(`/classes/${req.params.class}`);
  });
}*/
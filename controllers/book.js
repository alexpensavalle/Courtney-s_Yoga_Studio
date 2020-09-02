const Book = require('../models/book');

module.exports = {
  index,
  new: newAppointment,
  //show,
  //create,
  //delete: deleteTicket
}

function index(req, res) {
    Book.find({}, function(err, books) {
    let d = new Date();
    let n = d.toUTCString();
    let checkDateConv = new Date(n).getTime() ;
        res.render('book', { title: 'Book', section: 'All Books', checkR: checkDateConv, books });
      }).sort( { departs: 1 } );
  }

function newAppointment(req, res) {
  res.render('tickets/new', { title: 'Flight Operator', section: 'Ticket Sales', flight: req.params.id })
}

/*function create(req, res) {
  req.body.flight = req.params.id
  Ticket.create(req.body, function(err, tickets) {
    res.redirect(`/flights/${req.params.id}`)
  })
}

function show(req, res) {
  let book = new Book();
  res.render('/book', {});
}

function deleteTicket(req, res) {
  Ticket.findByIdAndDelete(req.params.ticket, function (err, ticket) {
      res.redirect(`/flights/${req.params.flight}`);
  });
}*/
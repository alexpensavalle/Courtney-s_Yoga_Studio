const Class = require('../models/class');

module.exports = {
  index,
  new: newAppointment,
  show,
  create,
  delete: deleteClass,
  signup
}

function index(req, res) {
  //let currentDateTime = new Date().getTime();
    Class.find({}, function(err, classes) {
      let d = new Date();
      let n = d.toUTCString();
      let checkDateConv = new Date(n).getTime();
      let date = checkDateConv.toString().slice(0, 16);
        res.render('classes/index', { title: 'Classes', section: 'All Classes', date, classes, user: req.user });
      }).sort( { dateTime: 1 } );//<--sorts in date order, ascending (1)
  }

function newAppointment(req, res) {
  let newClass = new Class();
  let d = new Date();
  let n = d.toUTCString();
  let checkDateConv = new Date(n).getTime();
  let dateTime = checkDateConv.toString().slice(0, 16);
  console.log(newClass);
  res.render('classes/new', { dateTime, title: 'Class', class: newClass, user: req.user });
}

function create(req, res) {
  req.body.user = req.user._id;
  Class.create(req.body, function(err, class1) {
    res.redirect(`/classes/`);
  });
}

//find class by req.params.id
function show(req, res) {
  let d = new Date();
  let n = d.toUTCString();
  let checkDateConv = new Date(n).getTime();
  let dateTime = checkDateConv.toString().slice(0, 16);
  Class.findById(req.params.id, function(err, class1){
    res.render('classes/show', {class1, user: req.user, dateTime});
  })
};

function signup(req, res){
  Class.findById(req.params.id, function(err, class1){
    if(class1.students.length < class1.classSize && !class1.students.some(student => student._id.equals(req.user._id))){
        class1.students.push(req.user._id);
        class1.save(function(err){
        res.redirect(`/classes/${req.params.id}`);
      });
    }else{
      res.redirect(`/classes/${req.params.id}`);
    }
  });
};

function deleteClass(req, res) {
  Class.findByIdAndDelete(req.params.id, function (err, class1) {
      res.redirect(`/classes/`);
  });
}
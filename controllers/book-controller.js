const Book = require('../models/Book');

module.exports = {
  getIndex: function (req, res) {
    Book.find()
      .then(book => {
        res.render('index', {
          'title': book.title,
          'author': book.author,
          'price': book.price
          
        })
      })
    
  },
  getCreate: function (req, res) {
    // TODO:
    res.render('create');
  },
  postCreate: function (req, res) {
    // TODO:
    console.log(req.body);
    Book.create(req.body)
      .then(() => res.redirect('/'))
      .catch((err) => console.log(err));
  },
  getEdit: function (req, res) {
    // TODO:
  },
  postEdit: function (req, res) {
    // TODO:
  },
  getDelete: function (req, res) {
    // TODO:
  },
  postDelete: function (req, res) {
    // TODO:
  }
};